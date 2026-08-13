"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import type { Components } from "react-markdown";
import { Mermaid } from "./mermaid";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

const components: Components = {
  code(props) {
    const { className, children, ...rest } = props;
    const match = /language-(\w+)/.exec(className || "");

    if (match?.[1] === "mermaid") {
      const value = String(children).replace(/\n$/, "");
      return <Mermaid chart={value} />;
    }

    return (
      <code className={className} {...rest}>
        {children}
      </code>
    );
  },
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles["markdown"]}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
          components={components}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
