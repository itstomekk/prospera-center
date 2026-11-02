import { useMemo } from "react";
import rawKnowledge from "@/content/prospera-knowledge.md?raw";
import { parseKnowledge, type Knowledge } from "@/lib/knowledge";

/** Snapshot date of the bundled source file. */
export const SOURCE_SNAPSHOT = "Mon, 03 Aug 2026 19:16:31 GMT";

export function useKnowledge() {
  const data = useMemo<Knowledge>(
    () => parseKnowledge(rawKnowledge, SOURCE_SNAPSHOT),
    [],
  );

  return {
    data,
    isLoading: false,
    isFetching: false,
    error: null as Error | null,
    refetch: () => {},
  };
}
