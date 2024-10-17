"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";
import { ReactNode } from "react";
interface GridPatternDashedProps {
  children?: ReactNode; // Explicitly typing children
}
export function GridPatternDashed({ children }: GridPatternDashedProps) {
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden  border bg-background p-4 md:p-20 ">
      {/* <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Grid Pattern
      </p> */}
      <div>{children}</div>
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(1200px_circle_at_center,white,transparent 70%)]"
        )}
      />
    </div>
  );
}
