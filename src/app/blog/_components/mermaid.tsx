"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useTheme } from "next-themes";

type Props = {
  chart: string;
};

export function Mermaid({ chart }: Props) {
  const id = useId().replace(/:/g, "-");
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    let cancelled = false;

    async function render() {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: resolvedTheme === "dark" ? "dark" : "default",
          securityLevel: "strict",
        });

        const { svg } = await mermaid.render(`mermaid-${id}`, chart);

        if (!cancelled) {
          setSvg(svg);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to render diagram");
        }
      }
    }

    render();

    return () => {
      cancelled = true;
    };
  }, [chart, id, resolvedTheme]);

  if (error) {
    return (
      <pre className="my-6 overflow-x-auto rounded-lg bg-red-50 dark:bg-red-950 p-4 text-sm text-red-700 dark:text-red-300">
        Failed to render mermaid diagram: {error}
      </pre>
    );
  }

  if (!svg) {
    return (
      <div
        ref={containerRef}
        className="my-6 flex justify-center overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-800 p-4"
      >
        <span className="text-sm text-neutral-500">Rendering diagram…</span>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="my-6 flex justify-center overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-800 p-4"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
