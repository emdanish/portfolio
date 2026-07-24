import Image from "next/image";
import type { Project } from "@/content";

type ProjectArtProps = {
  image: Project["image"];
  title: string;
  /** next/image responsive hint, set by the surface this art sits in. */
  sizes: string;
  priority?: boolean;
};

/**
 * Project artwork slot. Renders the real illustration once the file exists
 * (image.available flips in src/content.ts); until then, a dignified
 * solid-color editorial block — never a fake screenshot or stock texture.
 */
export function ProjectArt({ image, title, sizes, priority = false }: ProjectArtProps) {
  if (image.available) {
    return (
      <div className="relative aspect-video overflow-hidden border border-line bg-secondary">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${title} artwork placeholder`}
      className="relative flex aspect-video items-end overflow-hidden border border-line bg-secondary p-5"
    >
      <span aria-hidden="true" className="absolute top-5 left-5 size-3 bg-amber" />
      <span className="font-mono text-xs text-subtle">{title} — artwork coming soon</span>
    </div>
  );
}
