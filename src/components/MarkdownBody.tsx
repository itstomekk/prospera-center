import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { slugify } from "@/lib/knowledge";
import JsonView from "@/components/JsonView";


const TIER_LABELS: Record<string, string> = {
  OFFICIAL: "Official source",
  CLAIM: "Self-reported — unverified",
  INDEPENDENT: "Independent source",
  RESIDENT: "Resident report",
  ESTIMATE: "Our estimate",
  TOMEK: "Direct report — not publicly documented",
  CONFIRMED: "Confirmed",
};

const TIER_STYLES: Record<string, string> = {
  OFFICIAL: "border-primary/50 text-primary",
  CONFIRMED: "border-primary/50 text-primary",
  INDEPENDENT: "border-accent/60 text-accent-foreground/90 bg-accent/10",
  CLAIM: "border-destructive/50 text-destructive",
  ESTIMATE: "border-muted-foreground/40 text-muted-foreground",
  RESIDENT: "border-foreground/30 text-foreground/70",
  TOMEK: "border-foreground/30 text-foreground/70",
};

function TierBadge({ raw }: { raw: string }) {
  const key = Object.keys(TIER_LABELS).find((k) =>
    raw.toUpperCase().includes(k),
  );
  if (!key) return <code className="text-primary/80">{raw}</code>;
  const extra = raw.replace(/^\[/, "").replace(/\]$/, "").replace(key, "").replace(/^\s*[—–-]\s*/, "");
  return (
    <span
      title={TIER_LABELS[key]}
      className={`inline-flex items-center gap-1 rounded-sm border px-1.5 py-0.5 align-middle text-[10px] uppercase tracking-wider ${TIER_STYLES[key]}`}
    >
      {TIER_LABELS[key]}
      {extra ? <span className="normal-case opacity-70">· {extra}</span> : null}
    </span>
  );
}

function nodeText(node: unknown): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeText).join("");
  const props = (node as { props?: { children?: unknown } }).props;
  return props ? nodeText(props.children) : "";
}

const MarkdownBody = ({ children }: { children: string }) => (
  <div className="max-w-none">
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{

        h3: ({ children }) => (
          <h3
            id={slugify(nodeText(children))}
            className="scroll-mt-28 border-b border-border pb-2 pt-10 text-xl font-semibold text-primary"

          >
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4 className="pt-6 text-base font-semibold text-foreground">{children}</h4>
        ),
        h5: ({ children }) => (
          <h5 className="pt-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {children}
          </h5>
        ),
        p: ({ children }) => (
          <p className="py-2 text-[15px] leading-7 text-foreground/85">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="list-disc space-y-1.5 py-2 pl-6 text-[15px] leading-7 text-foreground/85 marker:text-primary/60">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal space-y-1.5 py-2 pl-6 text-[15px] leading-7 text-foreground/85 marker:text-primary/60">
            {children}
          </ol>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            {children}
          </a>
        ),
        blockquote: ({ children }) => (
          <blockquote className="my-4 border-l-2 border-primary/60 bg-secondary/40 px-4 py-2 text-foreground/75">
            {children}
          </blockquote>
        ),
        table: ({ children }) => (
          <div className="my-5 overflow-x-auto rounded-sm border border-border">
            <table className="w-full border-collapse text-sm">{children}</table>
          </div>
        ),
        thead: ({ children }) => <thead className="bg-secondary/60">{children}</thead>,
        th: ({ children }) => (
          <th className="border-b border-border px-3 py-2 text-left text-xs uppercase tracking-wider text-primary">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="border-b border-border/60 px-3 py-2 align-top text-foreground/85">
            {children}
          </td>
        ),
        hr: () => <hr className="my-8 border-border" />,
        code: ({ className, children }) => {
          const text = String(children);
          if (!className && /^\[[A-Z]/.test(text.trim())) {
            return <TierBadge raw={text.trim()} />;
          }
          if (!className) {
            return (
              <code className="rounded-sm bg-secondary px-1.5 py-0.5 text-[13px] text-primary">
                {children}
              </code>
            );
          }
          return (
            <code className="block whitespace-pre text-[12px] leading-6 text-foreground/80">
              {children}
            </code>
          );
        },
        pre: ({ children }) => {
          const raw = nodeText(children).trim();
          if (raw.startsWith("{") || raw.startsWith("[")) {
            try {
              return <JsonView data={JSON.parse(raw)} />;
            } catch {
              /* fall through to plain code block */
            }
          }
          return (
            <pre className="my-4 max-w-full overflow-x-auto rounded-sm border border-border bg-secondary/50 p-4">
              {children}
            </pre>
          );
        },

        strong: ({ children }) => (
          <strong className="font-semibold text-foreground">{children}</strong>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  </div>
);

export default MarkdownBody;
