"use client";

import RetroGrid from "@/components/ui/retro-grid";
import { GradualSpacing } from "./ui/gradual-spacing";
import { FlipTextDemo } from "./flipTextDemo";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DATA } from "@/data/resume";

export function RetroGridDemo() {
  return (
    <div className="relative flex flex-col h-[100vh] w-full items-center justify-center overflow-hidden rounded-lg border">
      <Avatar className="size-28 border">
        <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
        <AvatarFallback>{DATA.initials}</AvatarFallback>
      </Avatar>
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-left text-7xl font-bold leading-none tracking-tighter text-transparent">
        Hello I&apos;m <strong className="">Yel Min Oo </strong>
      </span>

      <GradualSpacing
        className="text-wrap text-left text-md font-light -tracking-wide md:text-2xl "
        text="With expertise in both frontend and backend development,"
      />
      <RetroGrid />
      <GradualSpacing
        className="text-wrap text-left text-md font-light -tracking-wide md:text-2xl"
        text="I bring dynamic and robust web solutions to life. Whether "
      />
      <GradualSpacing
        className="text-wrap text-left text-md font-light -tracking-wide md:text-2xl"
        text="it's crafting seamless user experiences or building powerful server-side
       "
      />

      <GradualSpacing
        className="text-wrap text-left text-md font-light -tracking-wide md:text-2xl"
        text="applications, I leverage my skills in JavaScript and PHP to deliver
       "
      />
      <GradualSpacing
        className="text-wrap text-left text-md font-light -tracking-wide md:text-2xl"
        text="exceptional results. Let's create something amazing together.
       "
      />
    </div>
  );
}
