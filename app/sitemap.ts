import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Section anchors are part of this page, not separate indexable URLs.
  return [{ url: `${site.url}/` }];
}
