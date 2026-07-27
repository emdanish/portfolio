import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "@/components/external-link";
import { OutcomeStat } from "@/components/outcome-stat";
import { ProjectArt } from "@/components/project-art";
import { StackTags } from "@/components/stack-tags";
import { recruitimate } from "@/content";

/**
 * The featured second project: a compact editorial band between the
 * Variorum flagship spread and the project cards. Static apart from the
 * shared Reveal wrapper at the call site.
 */
export function RecruitimateFeature() {
  return (
    <article className="grid gap-10 border-t border-line pt-16 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-4">
        <ProjectArt
          image={recruitimate.image}
          title={recruitimate.title}
          sizes="(min-width: 1024px) 30vw, 100vw"
        />
        <OutcomeStat className="mt-6" />
      </div>

      <div className="lg:col-span-8">
        <p className="font-mono text-xs text-subtle uppercase">Featured · Case study</p>
        <h3 className="mt-5 font-display text-display text-balance text-ink">
          <Link href={recruitimate.caseStudyPath} className="transition-colors hover:text-subtle">
            {recruitimate.title}
          </Link>
        </h3>
        <p className="mt-4 max-w-2xl text-lg text-pretty">{recruitimate.oneLiner}</p>
        <p className="mt-6 max-w-2xl border-l-2 border-amber pl-5 font-display text-title text-pretty text-ink">
          {recruitimate.principle}
        </p>
        <StackTags items={recruitimate.stack} className="mt-8" />
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button asChild variant="outline">
            <Link href={recruitimate.caseStudyPath}>
              Read the case study
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          {recruitimate.links.map((link) => (
            <ExternalLink key={link.href} href={link.href}>
              {link.label}
              <span className="sr-only"> of {recruitimate.title}</span>
            </ExternalLink>
          ))}
        </div>
      </div>
    </article>
  );
}
