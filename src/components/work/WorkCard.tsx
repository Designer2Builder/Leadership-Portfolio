import Image from "next/image";
import Link from "next/link";
import { Lock } from "lucide-react";

export type WorkItem = {
  slug: string;
  title: string;
  mobileTitle: string;
  href: string;
  image: string;
  imagePosition?: string;
  role: string;
  mobileRole?: string;
  year: string;
  tags: string;
  locked?: boolean;
};

function LockBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-pill border border-cream/40 bg-plum/60 px-3 py-1 text-meta text-cream backdrop-blur-sm">
      <Lock className="size-3" aria-hidden />
      Password protected
    </span>
  );
}

function RoleMeta({ role, year }: { role: string; year: string }) {
  return (
    <span className="inline-flex flex-wrap items-center gap-2 text-meta text-cream lg:text-meta-lg">
      <span className="size-1.5 shrink-0 rounded-full bg-lime" aria-hidden />
      <span>{role}</span>
      <span className="size-1.5 shrink-0 rounded-full bg-lime" aria-hidden />
      <span>{year}</span>
    </span>
  );
}

export function WorkCardDesktop({ item }: { item: WorkItem }) {
  return (
    <Link
      href={item.href}
      className="block overflow-hidden rounded-card border border-border bg-surface transition-opacity hover:opacity-95"
    >
      <div className="p-7 pb-4">
        <div className="work-card-media relative aspect-[942/382] overflow-hidden rounded-card border border-border bg-cream">
          <Image
            src={item.image}
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: item.imagePosition ?? "center" }}
            sizes="942px"
          />
          {item.locked && (
            <div className="absolute top-4 right-4">
              <LockBadge />
            </div>
          )}
        </div>
      </div>

      <div className="flex items-end justify-between gap-8 px-8 pb-6">
        <h3 className="text-title-lg text-cream">{item.title}</h3>
        <div className="flex shrink-0 flex-col items-end gap-1 text-right">
          <RoleMeta role={item.role} year={item.year} />
          <p className="text-meta-lg text-cream">{item.tags}</p>
        </div>
      </div>
    </Link>
  );
}

export function WorkCardMobile({ item }: { item: WorkItem }) {
  return (
    <Link
      href={item.href}
      className="block overflow-hidden rounded-card border border-border bg-surface transition-opacity hover:opacity-95"
    >
      <div className="work-card-media relative aspect-[327/150] overflow-hidden rounded-t-card border-b border-border bg-cream">
        <Image
          src={item.image}
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: item.imagePosition ?? "center" }}
          sizes="327px"
        />
        {item.locked && (
          <div className="absolute top-3 right-3">
            <LockBadge />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1.5 px-4 py-3">
        <h3 className="text-2xl leading-none text-cream">{item.mobileTitle}</h3>
        <p className="text-sm text-cream">
          {item.mobileRole ?? item.role} • {item.year}
        </p>
        <p className="text-meta text-text-muted">{item.tags}</p>
      </div>
    </Link>
  );
}
