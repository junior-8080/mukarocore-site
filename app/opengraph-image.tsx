import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "MukaroCore Enterprise: software development and IT services in Accra, Ghana";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "MukaroCore Enterprise",
    title: "Software, cloud, DevOps, and QA for growing businesses.",
  });
}
