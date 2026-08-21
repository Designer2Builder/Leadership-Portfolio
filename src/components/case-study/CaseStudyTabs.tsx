"use client";

import type { TabsBlock } from "@/content/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

function TabBody({
  body,
  bullets,
  groups,
}: Pick<TabsBlock["items"][number], "body" | "bullets" | "groups">) {
  return (
    <div className="space-y-8">
      {body ? (
        <p className="text-[1.25rem] leading-normal text-text-muted">{body}</p>
      ) : null}
      {bullets?.length ? (
        <ul className="space-y-2 text-[1.25rem] leading-normal text-cream">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {groups?.map((group) => (
        <div key={group.title}>
          <h4 className="text-[1.25rem] leading-normal text-cream">
            {group.title}
          </h4>
          {group.body ? (
            <p className="mt-1 text-[1.25rem] leading-normal text-text-muted">
              {group.body}
            </p>
          ) : null}
          {group.bullets?.length ? (
            <ul className="mt-1 space-y-1 text-[1.25rem] leading-normal text-text-muted">
              {group.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
}

/** Folder-tab set matching Figma node 587:9816 (Monileo Goal / Top Problems / Persona). */
export function CaseStudyTabs({ items }: { items: TabsBlock["items"] }) {
  if (items.length === 0) return null;

  return (
    <Tabs defaultValue={items[0]?.id} className="w-full gap-0">
      <TabsList
        variant="line"
        className="relative z-10 mb-0 flex h-auto w-full items-stretch justify-start gap-1.5 bg-transparent p-0 sm:gap-2 group-data-horizontal/tabs:!h-auto lg:group-data-horizontal/tabs:!h-[3.625rem]"
      >
        {items.map((item) => (
          <TabsTrigger
            key={item.id}
            value={item.id}
            className={cn(
              "relative flex h-auto min-h-[3.25rem] flex-1 items-center justify-center whitespace-normal rounded-none rounded-t-card border border-border bg-transparent px-2 py-2 text-center text-[0.875rem] leading-tight font-normal text-cream shadow-none sm:px-3 sm:text-[1rem] lg:h-[3.625rem] lg:w-[13.75rem] lg:flex-none lg:whitespace-nowrap lg:px-4 lg:py-0 lg:text-[1.25rem]",
              "hover:text-cream",
              "after:pointer-events-none after:absolute after:!inset-x-px after:!-bottom-px after:!h-[3px] after:bg-surface after:opacity-0 after:transition-none",
              "data-[state=active]:z-10 data-[state=active]:!border-border data-[state=active]:!border-b-transparent data-[state=active]:!bg-surface data-[state=active]:!text-cream data-[state=active]:!shadow-none data-[state=active]:after:!opacity-100"
            )}
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {items.map((item) => (
        <TabsContent key={item.id} value={item.id} className="relative z-0 mt-0">
          <div className="-mt-px rounded-card rounded-tl-none border border-border bg-surface px-6 py-8 lg:px-10 lg:py-10">
            <TabBody
              body={item.body}
              bullets={item.bullets}
              groups={item.groups}
            />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
