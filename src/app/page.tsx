"use client";
import { RetroGridDemo } from "@/components/bg";
import { BoxRevealDemo } from "@/components/boxUi";
import { GradualSpacingDemo } from "@/components/gradualSpacing";
import { GridPatternDashed } from "@/components/gridBg";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { MarqueeDemo } from "@/components/marquee";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Clarity from "@microsoft/clarity";
import Link from "next/link";
import Markdown from "react-markdown";
import { ContactForm } from "../components/contact-form";
const BLUR_FADE_DELAY = 0.04;
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          portalId: string;
          formId: string;
          region: string;
          target: string;
        }) => void;
      };
    };
  }
}

const HubSpotForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js-na2.hsforms.net/forms/embed/v2.js";
    script.type = "text/javascript";
    script.async = true;
    script.charset = "utf-8";
    
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "242302643",
          formId: "d2ae0293-d913-4581-bced-111fdd579ff2",
          region: "na2",
          target: "#hubspotForm",
        });
      }
    };

    document.body.appendChild(script);
  }, []); // Run only once when the component mounts

  return <div id="hubspotForm"></div>; // Container where the form will be rendered
};


export default function Page() {
  useEffect(() => {
    // Initialize Microsoft Clarity with your project ID
    if (typeof window !== "undefined") {
      Clarity.init("qp62o29iir");
      Clarity.identify(
        "custom-id",
        "custom-session-id",
        "custom-page-id",
        "friendly-name"
      );
    }
  }, []);
  return (
    <>
      <Analytics />
      <BlurFade delay={BLUR_FADE_DELAY}>
        <RetroGridDemo />
        <BoxRevealDemo />
        <MarqueeDemo />
      </BlurFade>
      <main className="flex flex-col min-h-[100dvh] space-y-10 mt-20 ">
        {/* <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section> */}
        {/* <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section> */}
        <section
          id="profession-skill"
          className="py-5 pb-20 border-b min-h-[100vh]"
        >
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1">
                  Education & Technical Skills
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Academic achievements and practical expertise
                </h2>
              </div>
            </div>
          </BlurFade>
          <section id="education" className="mb-10">
            <div className="flex min-h-0 lg-max-w-[1800px] max-w-[80vw] mx-auto flex-col gap-y-3">
              <BlurFade delay={BLUR_FADE_DELAY * 7}>
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Education
                </div>
              </BlurFade>
              {DATA.education.map((education, id) => (
                <BlurFade
                  key={education.school}
                  delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                >
                  <ResumeCard
                    key={education.school}
                    href={education.href}
                    logoUrl={education.logoUrl}
                    altText={education.school}
                    title={education.school}
                    subtitle={education.degree}
                    period={`${education.start} - ${education.end}`}
                  />
                </BlurFade>
              ))}
            </div>
          </section>
          <section id="skills bg-black " className="">
            <div className="flex min-h-0 lg-max-w-[1800px] max-w-[80vw] mx-auto flex-col gap-y-3 ">
              <BlurFade delay={BLUR_FADE_DELAY * 7}>
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Skills
                </div>
              </BlurFade>
              <div className="flex flex-wrap gap-1">
                {DATA.skills.map((skill, id) => (
                  <BlurFade
                    key={skill.title}
                    delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                  >
                    <Badge
                      key={skill.title}
                      className="text-sm py-2 flex gap-2"
                    >
                      <img
                        className="rounded-full w-[2rem] h-[2rem] object-cover"
                        alt="rel"
                        src={skill.image}
                      />
                      {skill.title}
                    </Badge>
                  </BlurFade>
                ))}
              </div>
            </div>
          </section>
        </section>
        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my latest work
                  </h2>
                  <p className="text-muted-foreground font-light md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;ve worked on a variety of projects, from simple
                    websites to complex web applications. Here are a few of my
                    favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="flex  gap-10 max-w-[80vw] justify-center mx-auto flex-wrap">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <GridPatternDashed>
            <div className="flex w-full items-center justify-center gap-4 px-1 text-center md:px-6  py-12">
              <BlurFade delay={BLUR_FADE_DELAY * 16}>
                <div className="space-y-3">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Contact
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Get in Touch
                  </h2>
                  <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Want to chat? Just shoot me a dm or send me a message via
                    contact form .I&apos;ll respond whenever I can.
                  </p>
                  <ContactForm />
                </div>
              </BlurFade>
            </div>
          </GridPatternDashed>
        </section>
        {/* <HubSpotForm/>*/}
      </main>
    </>
  );
}
