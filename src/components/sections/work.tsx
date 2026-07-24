import { ArrowUpRight } from "lucide-react";
import { ProjectArt } from "@/components/project-art";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StackTags } from "@/components/stack-tags";
import { FlagshipSpotlight } from "@/components/sections/flagship-spotlight";
import { projects, type Project } from "@/content";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col border border-line bg-surface transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <ProjectArt
        image={project.image}
        title={project.title}
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
      />
      <div className="flex grow flex-col gap-3 p-5">
        <h4 className="font-display text-title text-ink">{project.title}</h4>
        <p className="text-sm text-pretty">{project.oneLiner}</p>
        <StackTags items={project.stack} className="mt-auto pt-2 font-mono text-xs text-subtle" />
        <div className="flex items-center gap-4 border-t border-line pt-3">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-1 font-mono text-xs text-subtle uppercase transition-colors hover:text-ink"
            >
              {link.label}
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
              />
              <span className="sr-only">— {project.title}</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Selected Work" title="Products shipped end to end." />
        <div className="mt-16">
          <Reveal>
            <FlagshipSpotlight />
          </Reveal>
        </div>
        <ul className="mt-20 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <li key={project.slug} className="sm:last:col-span-2 lg:last:col-span-1">
              <Reveal delay={i * 0.08} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
