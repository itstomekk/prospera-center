import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import KnowledgeLayout from "@/components/KnowledgeLayout";
import MarkdownBody from "@/components/MarkdownBody";
import { useKnowledge } from "@/hooks/useKnowledge";

const SectionPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: kb, isLoading } = useKnowledge();
  const section = kb?.sections.find((s) => s.slug === slug);

  useEffect(() => {
    if (section) {
      document.title = `${section.title} — Próspera Center`;
      const desc = section.body
        .replace(/[#*`>|_-]/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 155);
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", desc);
    }
  }, [section]);

  useEffect(() => {
    if (!section) return;
    const hash = window.location.hash.slice(1);
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [section]);

  const index = kb?.sections.findIndex((s) => s.slug === slug) ?? -1;
  const prev = index > 0 ? kb!.sections[index - 1] : null;
  const next = kb && index > -1 && index < kb.sections.length - 1 ? kb.sections[index + 1] : null;

  return (
    <KnowledgeLayout activeSlug={slug}>
      {isLoading && <p className="animate-pulse text-sm text-muted-foreground">Loading…</p>}

      {!isLoading && !section && (
        <div className="text-sm text-muted-foreground">
          Section not found.{" "}
          <Link to="/" className="text-primary underline underline-offset-4">
            Back to overview
          </Link>
        </div>
      )}

      {section && (
        <div className="flex gap-10">
          <article className="min-w-0 max-w-3xl flex-1">
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Section {section.number}
            </div>
            <h1 className="mt-2 text-3xl font-bold text-foreground">{section.title}</h1>

            {section.subsections.length > 0 && (
              <div className="mt-6 rounded-sm border border-border bg-card/60 p-4 xl:hidden">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  On this page
                </div>
                <ul className="mt-2 space-y-1">
                  {section.subsections.map((sub) => (
                    <li key={sub.id}>
                      <a href={`#${sub.id}`} className="text-sm text-primary/90 hover:text-primary">
                        {sub.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-4">
              <MarkdownBody>{section.body}</MarkdownBody>
            </div>

            <nav className="mt-14 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between">
              {prev ? (
                <Link to={`/${prev.slug}`} className="text-sm text-primary hover:underline">
                  ← {prev.title}
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link to={`/${next.slug}`} className="text-sm text-primary hover:underline">
                  {next.title} →
                </Link>
              )}
            </nav>
          </article>

          {section.subsections.length > 0 && (
            <aside className="sticky top-[85px] hidden h-[calc(100vh-120px)] w-60 shrink-0 overflow-y-auto py-1 xl:block">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                On this page
              </div>
              <ul className="mt-3 space-y-1.5 border-l border-border pl-3">
                {section.subsections.map((sub) => (
                  <li key={sub.id}>
                    <a
                      href={`#${sub.id}`}
                      className="block text-xs leading-5 text-foreground/60 hover:text-primary"
                    >
                      {sub.title}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      )}
    </KnowledgeLayout>
  );
};

export default SectionPage;
