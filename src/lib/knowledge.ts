export interface Subsection {
  id: string;
  title: string;
  body: string;
}

export interface Section {
  slug: string;
  number: string;
  title: string;
  intro: string;
  body: string;
  subsections: Subsection[];
}

export interface Knowledge {
  title: string;
  preamble: string;
  sections: Section[];
  fetchedAt: string;
  sourceLastModified: string | null;
  raw: string;
}

export const SOURCE_URL =
  "https://roatan.live/prosperacenterfiles/PROSPERA-WEBSITE-KNOWLEDGE.md";

export function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

/** Strips emoji-ish decorations and trailing "— explanation" from a heading. */
export function cleanTitle(raw: string): string {
  return raw
    .replace(/^[⚠️✅🔔•\s]+/u, "")
    .replace(/\s*\(publish this[^)]*\)/i, "")
    .trim();
}

function splitByHeading(text: string, level: 2 | 3) {
  const marker = level === 2 ? "## " : "### ";
  const lines = text.split("\n");
  const chunks: { heading: string; body: string }[] = [];
  let current: { heading: string; body: string[] } | null = null;
  let inFence = false;

  for (const line of lines) {
    if (line.trimStart().startsWith("```")) inFence = !inFence;
    const isHeading =
      !inFence && line.startsWith(marker) && !line.startsWith(marker + "#");
    if (isHeading) {
      if (current) chunks.push({ heading: current.heading, body: current.body.join("\n") });
      current = { heading: line.slice(marker.length).trim(), body: [] };
    } else if (current) {
      current.body.push(line);
    }
  }
  if (current) chunks.push({ heading: current.heading, body: current.body.join("\n") });
  return chunks;
}

export function parseKnowledge(raw: string, lastModified: string | null): Knowledge {
  const titleMatch = raw.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : "Próspera Knowledge Base";

  const firstH2 = raw.indexOf("\n## ");
  const preamble = firstH2 > -1 ? raw.slice(raw.indexOf("\n", raw.indexOf("# ")) + 1, firstH2) : "";

  const sections: Section[] = splitByHeading(raw, 2)
    .map(({ heading, body }) => {
      const numMatch = heading.match(/^(\d+)\.\s*(.*)$/);
      const number = numMatch ? numMatch[1] : "";
      const rest = cleanTitle(numMatch ? numMatch[2] : heading);
      const short = rest.split(/\s+[—–-]\s+/)[0].trim();
      const KEEP_UPPER = new Set(["ZEDE", "FAQ", "PTC", "US", "VAT", "ICSID", "AI"]);
      const SMALL = new Set([
        "and", "or", "the", "a", "an", "in", "on", "of", "for", "to", "with", "at", "by",
      ]);
      const words = short.split(/\s+/).map((w, i) => {
        const bare = w.replace(/[^A-Za-zÀ-ÿ]/g, "");
        if (KEEP_UPPER.has(bare.toUpperCase()) && bare === bare.toUpperCase()) return w;
        if (bare && bare === bare.toUpperCase()) {
          const lower = w.toLowerCase();
          if (i > 0 && SMALL.has(lower.replace(/[^a-z]/g, ""))) return lower;
          return lower.charAt(0).toUpperCase() + lower.slice(1);
        }
        return w;
      });
      const nice = words.join(" ");
      const displayTitle = nice.charAt(0).toUpperCase() + nice.slice(1);


      const subs = splitByHeading(body, 3).map((s) => ({
        id: slugify(s.heading.replace(/`/g, "")),
        title: cleanTitle(s.heading).replace(/\s*`\[[^\]]*\]`\s*/g, " ").trim(),
        body: s.body.trim(),
      }));


      const intro = (subs.length ? body.slice(0, body.indexOf("### ")) : body).trim();

      return {
        slug: slugify(`${number ? number + "-" : ""}${short}`),
        number,
        title: displayTitle,
        intro,
        body: body.trim(),
        subsections: subs,
      };
    })
    .filter(
      (s) =>
        s.number !== "0" &&
        s.body.length > 0 &&
        !/website builder/i.test(s.title),
    );

  return {
    title,
    preamble: preamble.trim(),
    sections,
    fetchedAt: new Date().toISOString(),
    sourceLastModified: lastModified,
    raw,
  };
}

export interface SearchHit {
  sectionSlug: string;
  sectionTitle: string;
  subId: string | null;
  subTitle: string;
  snippet: string;
  score: number;
}

export function searchKnowledge(kb: Knowledge, query: string): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const hits: SearchHit[] = [];

  const consider = (
    section: Section,
    subTitle: string,
    subId: string | null,
    text: string,
  ) => {
    const hay = (subTitle + "\n" + text).toLowerCase();
    let score = 0;
    for (const t of terms) {
      const count = hay.split(t).length - 1;
      if (count === 0) return;
      score += count + (subTitle.toLowerCase().includes(t) ? 12 : 0);
    }
    const first = hay.indexOf(terms[0]);
    const start = Math.max(0, first - 90);
    const snippet =
      (start > 0 ? "…" : "") +
      (subTitle + "\n" + text)
        .slice(start, start + 240)
        .replace(/\s+/g, " ")
        .trim() +
      "…";
    hits.push({
      sectionSlug: section.slug,
      sectionTitle: section.title,
      subId,
      subTitle,
      snippet,
      score,
    });
  };

  for (const section of kb.sections) {
    if (section.subsections.length === 0) {
      consider(section, section.title, null, section.body);
    } else {
      if (section.intro) consider(section, section.title, null, section.intro);
      for (const sub of section.subsections) {
        consider(section, sub.title, sub.id, sub.body);
      }
    }
  }

  return hits.sort((a, b) => b.score - a.score).slice(0, 40);
}
