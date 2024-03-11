"use client";

import * as React from "react";

// import { useConfig } from "@/hooks/use-config";
// import { Style } from "@/registry/styles";

interface StyleWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  styleName?: string //Style["name"];
}

export function StyleWrapper({ styleName, children }: StyleWrapperProps) {
  // const [configa` = useConfig();

  if (!styleName || 'new-york' === styleName) {
    return <>{children}</>;
  }

  return null;
}
