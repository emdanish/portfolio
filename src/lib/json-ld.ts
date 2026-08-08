import {
  education,
  experience,
  identity,
  projects,
  recruitimate,
  seoDescription,
  skillGroups,
  variorum,
} from "@/content";
import { SITE_URL, absoluteUrl } from "@/lib/site";

/** Stable @id for the Muhammad Danish person entity across pages. */
export const personId = `${SITE_URL}/#person`;

const technologies = [
  ...new Set(skillGroups.flatMap((group) => [...group.items])),
];

/**
 * Canonical Person node. Every claim is mirrored in visible site content
 * (identity, about, experience, skills, projects).
 */
export function personNode() {
  return {
    "@type": "Person" as const,
    "@id": personId,
    name: identity.name,
    alternateName: ["emdanish", "MD"],
    url: SITE_URL,
    email: identity.email,
    jobTitle: identity.role,
    description: seoDescription,
    image: absoluteUrl("/og.png"),
    sameAs: [identity.github, identity.linkedin],
    address: {
      "@type": "PostalAddress" as const,
      addressCountry: "PK",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity" as const,
      name: education.school,
      url: education.schoolUrl,
    },
    worksFor: {
      "@type": "Organization" as const,
      name: experience[0]?.company,
      url: experience[0]?.companyUrl,
    },
    knowsAbout: [
      "Full-stack software engineering",
      "AI-powered SaaS products",
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Retrieval-augmented generation",
      "Developer tools",
      ...technologies.slice(0, 24),
    ],
  };
}

/** Homepage: ProfilePage + WebSite + Person graph for entity understanding. */
export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": absoluteUrl("/#profile"),
        url: SITE_URL,
        name: `${identity.name} · ${identity.role}`,
        description: seoDescription,
        isPartOf: { "@id": absoluteUrl("/#website") },
        mainEntity: { "@id": personId },
        about: { "@id": personId },
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: SITE_URL,
        name: `${identity.name} Portfolio`,
        description: seoDescription,
        inLanguage: "en",
        publisher: { "@id": personId },
        author: { "@id": personId },
      },
      personNode(),
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/#projects"),
        name: "Selected work",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: variorum.title,
            url: absoluteUrl(variorum.caseStudyPath),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: recruitimate.title,
            url: absoluteUrl(recruitimate.caseStudyPath),
          },
          ...projects.map((project, index) => ({
            "@type": "ListItem" as const,
            position: index + 3,
            name: project.title,
            url: project.links[0]?.href ?? SITE_URL,
          })),
        ],
      },
    ],
  };
}

export function variorumJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": absoluteUrl(`${variorum.caseStudyPath}#webpage`),
        url: absoluteUrl(variorum.caseStudyPath),
        name: `${variorum.title} Case Study`,
        description: variorum.oneLiner,
        isPartOf: { "@id": absoluteUrl("/#website") },
        about: { "@id": absoluteUrl(`${variorum.caseStudyPath}#software`) },
        author: { "@id": personId },
        mainEntity: { "@id": absoluteUrl(`${variorum.caseStudyPath}#software`) },
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": absoluteUrl(`${variorum.caseStudyPath}#software`),
        name: variorum.title,
        description: variorum.oneLiner,
        url: variorum.links.live.href,
        codeRepository: variorum.links.source.href,
        programmingLanguage: [
          "TypeScript",
          "Python",
          "Next.js",
          "React",
          "FastAPI",
          "PostgreSQL",
        ],
        author: { "@id": personId },
        creator: { "@id": personId },
        keywords: [
          "engineering memory",
          "GitHub App",
          "RAG",
          "code intelligence",
          "AI developer tools",
        ],
      },
      personNode(),
    ],
  };
}

export function recruitimateJsonLd() {
  const live = recruitimate.links[0]?.href;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": absoluteUrl(`${recruitimate.caseStudyPath}#webpage`),
        url: absoluteUrl(recruitimate.caseStudyPath),
        name: `${recruitimate.title} Case Study`,
        description: recruitimate.oneLiner,
        isPartOf: { "@id": absoluteUrl("/#website") },
        about: { "@id": absoluteUrl(`${recruitimate.caseStudyPath}#software`) },
        author: { "@id": personId },
        mainEntity: { "@id": absoluteUrl(`${recruitimate.caseStudyPath}#software`) },
      },
      {
        "@type": "SoftwareApplication",
        "@id": absoluteUrl(`${recruitimate.caseStudyPath}#software`),
        name: recruitimate.title,
        description: recruitimate.oneLiner,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: live,
        author: { "@id": personId },
        creator: { "@id": personId },
        keywords: [
          "AI hiring",
          "resume screening",
          "structured interviews",
          "transcript scoring",
          "FastAPI",
          "Next.js",
        ],
      },
      personNode(),
    ],
  };
}
