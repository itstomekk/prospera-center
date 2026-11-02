type Json = string | number | boolean | null | Json[] | { [k: string]: Json };

const humanize = (key: string) =>
  key
    .replace(/[_-]+/g, " ")
    .replace(/\b([a-z])/g, (m) => m.toUpperCase())
    .replace(/\bUsd\b/g, "USD")
    .replace(/\bId\b/g, "ID")
    .replace(/\bUrl\b/g, "URL")
    .replace(/\bFaq\b/g, "FAQ");

const isPrimitive = (v: Json): v is string | number | boolean | null =>
  v === null || typeof v !== "object";

const Primitive = ({ value }: { value: string | number | boolean | null }) => {
  if (value === null) return <span className="text-muted-foreground">—</span>;
  if (typeof value === "boolean")
    return (
      <span className={value ? "text-primary" : "text-destructive"}>
        {value ? "Yes" : "No"}
      </span>
    );
  const text = String(value);
  const parts = text.split(/(\[[A-Z][A-Z\s—–\-0-9.,:/]*\])/g);
  return (
    <span className="text-foreground/85">
      {parts.map((p, i) =>
        /^\[[A-Z]/.test(p) ? (
          <span
            key={i}
            className="ml-1 inline-block rounded-sm border border-primary/40 px-1 py-0.5 align-middle text-[10px] uppercase tracking-wider text-primary/90"
          >
            {p.replace(/^\[|\]$/g, "")}
          </span>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </span>
  );
};

const isRecord = (v: Json): v is { [k: string]: Json } =>
  typeof v === "object" && v !== null && !Array.isArray(v);

/** Array of flat objects → table. */
function tableColumns(rows: Json[]): string[] | null {
  if (rows.length < 2) return null;
  if (!rows.every(isRecord)) return null;
  const cols: string[] = [];
  for (const row of rows as { [k: string]: Json }[]) {
    for (const [k, v] of Object.entries(row)) {
      if (!isPrimitive(v) && !(Array.isArray(v) && v.every(isPrimitive))) return null;
      if (!cols.includes(k)) cols.push(k);
    }
  }
  return cols.length > 0 && cols.length <= 7 ? cols : null;
}

const Cell = ({ value }: { value: Json }) => {
  if (isPrimitive(value)) return <Primitive value={value} />;
  if (Array.isArray(value))
    return (
      <span className="text-foreground/85">
        {value.map((v) => (isPrimitive(v) ? String(v) : "")).join(", ")}
      </span>
    );
  return null;
};

const TIER_KEY = /(^|_)tier$|^tiers?$|^source_tier$|^confidence$/i;

const Value = ({ value, depth }: { value: Json; depth: number }) => {
  if (isPrimitive(value)) return <Primitive value={value} />;



  if (Array.isArray(value)) {
    if (value.length === 0) return <span className="text-muted-foreground">—</span>;
    if (value.every(isPrimitive))
      return (
        <ul className="list-disc space-y-1 pl-5 marker:text-primary/60">
          {value.map((v, i) => (
            <li key={i} className="text-[14px] leading-6">
              <Primitive value={v as string} />
            </li>
          ))}
        </ul>
      );

    const cols = tableColumns(value);
    if (cols) {
      return (
        <div className="overflow-x-auto rounded-sm border border-border">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-secondary/60">
              <tr>
                {cols.map((c) => (
                  <th
                    key={c}
                    className="border-b border-border px-3 py-2 text-left text-xs uppercase tracking-wider text-primary"
                  >
                    {humanize(c)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(value as { [k: string]: Json }[]).map((row, i) => (
                <tr key={i}>
                  {cols.map((c) => (
                    <td
                      key={c}
                      className="border-b border-border/60 px-3 py-2 align-top text-[13px] leading-6"
                    >
                      {c in row ? <Cell value={row[c]} /> : <span className="text-muted-foreground">—</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    return (
      <div className="space-y-3">
        {value.map((v, i) => (
          <div key={i} className="rounded-sm border border-border/70 bg-background/40 p-3">
            <Value value={v} depth={depth + 1} />
          </div>
        ))}
      </div>
    );
  }

  const entries = Object.entries(value);
  return (
    <dl className="space-y-2.5">
      {entries.map(([k, v]) => (
        <div
          key={k}
          className={
            isPrimitive(v)
              ? "grid gap-1 sm:grid-cols-[minmax(9rem,14rem)_1fr] sm:gap-4"
              : "space-y-1.5"
          }
        >
          <dt className="text-[11px] uppercase tracking-wider text-muted-foreground sm:pt-0.5">
            {humanize(k)}
          </dt>
          <dd className="text-[14px] leading-6">
            {TIER_KEY.test(k) && typeof v === "string" ? (
              <span className="inline-block rounded-sm border border-primary/40 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-primary/90">
                {v.replace(/^\[|\]$/g, "")}
              </span>
            ) : (
              <Value value={v} depth={depth + 1} />
            )}
          </dd>

        </div>
      ))}
    </dl>
  );
};

const JsonView = ({ data }: { data: Json }) => (
  <div className="my-5 rounded-sm border border-border bg-card/50 p-4">
    <Value value={data} depth={0} />
  </div>
);

export default JsonView;
