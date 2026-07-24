import { ExternalLink } from "@/components/external-link";
import { ProjectArt } from "@/components/project-art";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StackTags } from "@/components/stack-tags";
import { FlagshipSpotlight } from "@/components/sections/flagship-spotlight";
import { projects, sections, type Project } from "@/content";
import { cn } from "@/lib/utils";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-lift group flex h-full flex-col border border-line bg-surface">
      <ProjectArt
        image={project.image}
        title={project.title}
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
      />
      <div className="flex grow flex-col gap-3 p-5">
        <h4 className="font-display text-title text-balance text-ink">{project.title}</h4>
        <p className="text-sm text-pretty">{project.oneLiner}</p>
        <StackTags items={project.stack} className="mt-auto pt-2" />
        <div className="flex items-center gap-4 border-t border-line pt-3">
          {project.links.map((link) => (
            <ExternalLink
              key={link.href}
              href={link.href}
              iconClassName="transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
            >
              {link.label}
              <span className="sr-only">— {project.title}</span>
            </ExternalLink>
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
        <SectionHeading eyebrow={sections.work.eyebrow} title={sections.work.title} />
        <div className="mt-16">
          <Reveal>
            <FlagshipSpotlight />
          </Reveal>
        </div>
        <ul role="list" className="mt-20 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <li
              key={project.slug}
              // The middle card steps down at desktop, breaking the uniform
              // grid into an editorial stagger.
              className={cn("sm:last:col-span-2 lg:last:col-span-1", i === 1 && "lg:mt-12")}
            >
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
