import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle } from "lucide-react";
import KnowledgeLayout from "@/components/KnowledgeLayout";
import MarkdownBody from "@/components/MarkdownBody";
import { useKnowledge } from "@/hooks/useKnowledge";

const Index = () => {
  const { data: kb, isLoading, error } = useKnowledge();

  useEffect(() => {
    document.title = "Próspera Center — knowledge base on Próspera ZEDE, Roatán";
  }, []);

  return (
    <KnowledgeLayout>
      <div className="max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.2em] text-primary/70">
          Independent knowledge base
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          Everything about Próspera ZEDE on Roatán — sourced, dated, and honest
          about what nobody knows.
        </h1>
        <p className="mt-4 text-[15px] leading-7 text-foreground/70">
          Legal status, tax, companies, residency, property, banking and the real
          cost of living. Every significant claim carries a source tier, so you can
          tell official statutes from marketing.
        </p>

        {isLoading && (
          <p className="mt-8 animate-pulse text-sm text-muted-foreground">
            Loading knowledge base…
          </p>
        )}

        {error && (
          <div className="mt-8 flex items-start gap-2 rounded-sm border border-destructive/40 p-4 text-sm text-destructive">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>Could not load the knowledge source right now. Please retry shortly.</span>
          </div>
        )}
      </div>

      {kb && (
        <>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {kb.sections.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="group rounded-sm border border-border bg-card p-4 transition-colors hover:border-primary/60"
              >
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Section {s.number}
                </div>
                <div className="mt-1 flex items-center gap-2 text-base font-semibold text-primary">
                  {s.title}
                  <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-foreground/60">
                  {s.subsections.length
                    ? s.subsections.map((x) => x.title).slice(0, 4).join(" · ")
                    : s.body.replace(/[#*`>|-]/g, " ").replace(/\s+/g, " ").slice(0, 140)}
                </p>
              </Link>
            ))}
          </div>

          <section className="mt-14 max-w-3xl border-t border-border pt-8">
            <h2 className="text-xl font-semibold text-primary">About this source</h2>
            <MarkdownBody>{kb.preamble}</MarkdownBody>
          </section>
        </>
      )}
    </KnowledgeLayout>
  );
};

export default Index;
