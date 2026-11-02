import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import SearchBox, { SectionNav } from "@/components/SearchBox";
import DomainBar from "@/components/DomainBar";
import { useKnowledge } from "@/hooks/useKnowledge";
import { SOURCE_URL } from "@/lib/knowledge";

const KnowledgeLayout = ({
  activeSlug,
  children,
}: {
  activeSlug?: string;
  children: React.ReactNode;
}) => {
  const { data: kb } = useKnowledge();
  const [menuOpen, setMenuOpen] = useState(false);
  useLocation();


  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
          <button
            type="button"
            className="lg:hidden text-foreground/70"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link to="/" className="shrink-0 text-sm font-semibold tracking-tight text-primary sm:text-base">
            PRÓSPERA<span className="text-foreground/50">.center</span>
          </Link>
          <div className="ml-auto w-full max-w-xl">
            <SearchBox kb={kb} />
          </div>
        </div>
        {menuOpen && (
          <div className="max-h-[70vh] overflow-y-auto border-t border-border px-3 py-3 lg:hidden">
            <SectionNav kb={kb} activeSlug={activeSlug} onNavigate={() => setMenuOpen(false)} />
          </div>
        )}
      </header>

      <div className="mx-auto flex max-w-7xl gap-8 px-4">
        <aside className="sticky top-[61px] hidden h-[calc(100vh-61px)] w-64 shrink-0 overflow-y-auto py-6 pr-2 lg:block">
          <SectionNav kb={kb} activeSlug={activeSlug} />
          <div className="mt-6 space-y-2 border-t border-border pt-4 text-[11px] leading-5 text-muted-foreground">
            {kb?.sourceLastModified && (
              <div>Source snapshot: {new Date(kb.sourceLastModified).toUTCString()}</div>
            )}

            <a
              href={SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block underline underline-offset-2 hover:text-primary"
            >
              View raw source file
            </a>
          </div>
        </aside>

        <main className="min-w-0 flex-1 py-8">{children}</main>
      </div>

      <DomainBar />
    </div>
  );
};

export default KnowledgeLayout;
