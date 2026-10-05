import { getCategory, getService, services } from "@/lib/services";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "MukaroCore Enterprise service";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);

  return renderOgImage({
    eyebrow: service ? `Services · ${getCategory(service.category).label}` : "Services",
    title: service?.title ?? "Technology services",
  });
}
