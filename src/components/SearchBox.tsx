import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { searchKnowledge, type Knowledge } from "@/lib/knowledge";

const SearchBox = ({ kb }: { kb: Knowledge | undefined }) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const results = useMemo(
    () => (kb ? searchKnowledge(kb, query) : []),
    [kb, query],
  );

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        boxRef.current?.querySelector("input")?.focus();
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const go = (slug: string, subId: string | null) => {
    setOpen(false);
    setQuery("");
    navigate(`/${slug}${subId ? `#${subId}` : ""}`);
  };

  return (
    <div ref={boxRef} className="relative w-full">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        placeholder="Search the knowledge base…  (press / )"
        aria-label="Search the knowledge base"
        className="h-10 w-full rounded-sm border border-border bg-input/60 pl-9 pr-9 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/40"
      />
      {query && (
        <button
          type="button"
          onClick={() => setQuery("")}
          aria-label="Clear search"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      )}

      {open && query.trim().length >= 2 && (
        <div className="absolute left-0 right-0 top-12 z-50 max-h-[60vh] overflow-y-auto rounded-sm border border-border bg-popover shadow-xl">
          {results.length === 0 ? (
            <div className="px-4 py-6 text-sm text-muted-foreground">
              No matches for “{query}”.
            </div>
          ) : (
            <ul className="divide-y divide-border/60">
              {results.map((hit, i) => (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => go(hit.sectionSlug, hit.subId)}
                    className="block w-full px-4 py-3 text-left hover:bg-secondary/60"
                  >
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {hit.sectionTitle}
                    </div>
                    <div className="text-sm text-primary">{hit.subTitle}</div>
                    <div className="mt-1 line-clamp-2 text-xs leading-5 text-foreground/60">
                      {hit.snippet}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export const SectionNav = ({
  kb,
  activeSlug,
  onNavigate,
}: {
  kb: Knowledge | undefined;
  activeSlug?: string;
  onNavigate?: () => void;
}) => (
  <nav className="space-y-0.5">
    <Link
      to="/"
      onClick={onNavigate}
      className={`block rounded-sm px-3 py-2 text-sm transition-colors hover:bg-secondary/60 ${
        !activeSlug ? "bg-secondary text-primary" : "text-foreground/70"
      }`}
    >
      Overview
    </Link>
    {kb?.sections.map((s) => (
      <Link
        key={s.slug}
        to={`/${s.slug}`}
        onClick={onNavigate}
        className={`flex gap-2 rounded-sm px-3 py-2 text-sm transition-colors hover:bg-secondary/60 ${
          activeSlug === s.slug ? "bg-secondary text-primary" : "text-foreground/70"
        }`}
      >
        <span className="w-5 shrink-0 text-right text-muted-foreground">{s.number}</span>
        <span>{s.title}</span>
      </Link>
    ))}
  </nav>
);

export default SearchBox;
