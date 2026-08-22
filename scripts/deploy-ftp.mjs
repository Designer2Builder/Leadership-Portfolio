// Uploads the static export in out/ to a remote host over FTPS.
// Note: uploadFromDir overwrites/adds files but does not delete remote files
// that no longer exist locally (e.g. after renaming/removing a page) — check
// the remote directory manually after structural changes.
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import tls from "node:tls";
import { Client } from "basic-ftp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// The host (StackCP/123-reg) doesn't send its intermediate cert during the
// TLS handshake, so Node can't build the chain to a trusted root on its own.
// This bundle supplies that missing intermediate + its root (Let's Encrypt
// "YR2" / "ISRG Root YR") alongside Node's default trusted roots.
const extraCa = readFileSync(
  path.join(__dirname, "certs/isrg-root-yr-chain.pem"),
  "utf8"
);

process.loadEnvFile(".env.local");

const { FTP_HOST, FTP_USER, FTP_PASSWORD } = process.env;
const FTP_PORT = Number(process.env.FTP_PORT ?? 21);
const FTP_REMOTE_DIR = process.env.FTP_REMOTE_DIR || "/";

if (!FTP_HOST || !FTP_USER || !FTP_PASSWORD) {
  console.error(
    "Missing FTP credentials. Set FTP_HOST, FTP_USER, and FTP_PASSWORD in .env.local."
  );
  process.exit(1);
}

if (!existsSync("out")) {
  console.error("out/ not found. Run `npm run build` first.");
  process.exit(1);
}

const client = new Client();
client.ftp.verbose = false;
client.trackProgress((info) => {
  console.log(`${info.name} (${info.bytesOverall} bytes)`);
});

try {
  await client.access({
    host: FTP_HOST,
    port: FTP_PORT,
    user: FTP_USER,
    password: FTP_PASSWORD,
    secure: true,
    secureOptions: {
      ca: [...tls.rootCertificates, extraCa],
      // This host's FTPS cert is issued for its shared hosting platform
      // (*.gb.stackcp.com), not the customer domain, so the hostname won't
      // match — a known pattern for this hosting stack. The chain is still
      // fully verified above; only the hostname check is skipped.
      checkServerIdentity: () => undefined,
    },
  });
  await client.ensureDir(FTP_REMOTE_DIR);
  await client.uploadFromDir("out", FTP_REMOTE_DIR);
  console.log("Deploy complete.");
} finally {
  client.trackProgress();
  client.close();
}
