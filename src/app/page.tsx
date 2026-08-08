import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";
import { Impact } from "@/components/sections/impact";
import { Writing } from "@/components/sections/writing";
import { Experience } from "@/components/sections/experience";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { homeJsonLd } from "@/lib/json-ld";

export default function HomePage() {
  return (
    <div id="top">
      <SiteNav />
      <main id="main">
        <Hero />
        <Work />
        <Impact />
        <Writing />
        <Experience />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
      <JsonLd data={homeJsonLd()} />
    </div>
  );
}
