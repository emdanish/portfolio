type JsonLdProps = {
  /** Schema.org object or @graph payload. Serialized server-side only. */
  data: Record<string, unknown> | Record<string, unknown>[];
};

/**
 * Safe JSON-LD script injection for Server Components.
 * Escapes `<` so payload cannot break out of the script element.
 */
export function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      // Static portfolio content only; never user-generated.
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
