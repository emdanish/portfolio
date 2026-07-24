import { ArrowDownToLine } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { CopyEmailButton } from "@/components/copy-email-button";
import { Reveal } from "@/components/reveal";
import { identity } from "@/content";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl border-t border-line pt-20">
        <Reveal>
          <p className="flex items-center gap-2.5 font-mono text-xs text-subtle uppercase">
            <span aria-hidden="true" className="size-2 bg-amber" />
            {identity.availability}
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-hero font-semibold text-balance text-ink">
            Let&rsquo;s build something.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-pretty">
            The fastest way to reach me is email — I read everything.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-baseline gap-x-6 gap-y-3">
            <a
              href={`mailto:${identity.email}`}
              className="link-underline font-display text-title text-ink break-all"
            >
              {identity.email}
            </a>
            <CopyEmailButton />
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Button asChild variant="outline">
              <a href={identity.cv.path} download>
                <ArrowDownToLine aria-hidden="true" />
                {identity.cv.label}
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href={identity.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                <GitHubIcon aria-hidden="true" className="size-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href={identity.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                <LinkedInIcon aria-hidden="true" className="size-5" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
