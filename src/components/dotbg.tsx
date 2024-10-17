"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ReactNode } from "react";
interface DotPatternDashedProps {
  children?: ReactNode; // Explicitly typing children
}
export function DotPatternDemo({ children }: DotPatternDashedProps) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden border bg-background">
      <div className="z-10">{children}</div>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent,50%)]"
        )}
      />
    </div>
  );
}
