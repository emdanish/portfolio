import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";
import { Writing } from "@/components/sections/writing";
import { Experience } from "@/components/sections/experience";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { identity } from "@/content";
import { SITE_URL } from "@/lib/site";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: identity.name,
  jobTitle: "Full-Stack Developer",
  email: `mailto:${identity.email}`,
  url: SITE_URL,
  sameAs: [identity.github, identity.linkedin],
  address: { "@type": "PostalAddress", addressCountry: "PK" },
};

export default function HomePage() {
  return (
    <div id="top">
      <SiteNav />
      <main id="main">
        <Hero />
        <Work />
        <Writing />
        <Experience />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        // Static, build-time content from src/content.ts — nothing user-generated.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </div>
  );
}
