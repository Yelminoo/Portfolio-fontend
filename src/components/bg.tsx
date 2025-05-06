"use client";

import RetroGrid from "@/components/ui/retro-grid";
import { GradualSpacing } from "./ui/gradual-spacing";
import { FlipTextDemo } from "./flipTextDemo";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DATA } from "@/data/resume";

export function RetroGridDemo() {
  return (
    <div className="relative flex flex-col h-[100vh] w-full items-center justify-center overflow-visible rounded-lg border">
      <RetroGrid />
      <Avatar className="size-28 border">
        <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
        <AvatarFallback>{DATA.initials}</AvatarFallback>
      </Avatar>
      <span className="pointer-events-none z-10 whitespace-normal bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-left text-7xl font-bold leading-none tracking-tighter text-transparent">
        Hello I&apos;m
        <strong className="block sm:inline px-3">Yel Min Oo</strong>
      </span>

      <GradualSpacing
        className="text-left text-sm font-light tracking-normal md:text-2xl break-words"
        text="Expert in both frontend and backend development,"
      />
      <GradualSpacing
        className="text-left text-sm font-light tracking-normal md:text-2xl break-words"
        text="I bring dynamic and robust web solutions to life."
      />
      <GradualSpacing
        className="text-left text-sm font-light tracking-normal md:text-2xl break-words"
        text="Whether it's crafting seamless user experiences"
      />
      <GradualSpacing
        className="text-left text-sm font-light tracking-normal md:text-2xl break-words"
        text="or building powerful server-side applications,"
      />
      <GradualSpacing
        className="text-left text-sm font-light tracking-normal md:text-2xl break-words"
        text="I leverage my skills in JavaScript and PHP"
      />
      <GradualSpacing
        className="text-left text-sm font-light tracking-normal md:text-2xl break-words"
        text="to deliver exceptional results."
      />
      <GradualSpacing
        className="text-left text-sm font-light tracking-normal md:text-2xl break-words"
        text="Let's create something amazing together."
      />
    </div>
  );
}
