import type { MetadataRoute } from "next";
import { allSlugs } from "@/lib/products";

const baseUrl = "https://rubyassur.fr";

// Pages statiques réellement indexables (liées dans la navigation).
// Les redirections (assurance-auto, flotte-vtc, creation-entreprise) et
// les doublons non liés (services, nos-assurances, confidentialite,
// pourquoi-nous) sont volontairement exclus.
const staticRoutes = [
  "",
  "/particuliers",
  "/professionnels",
  "/a-propos",
  "/contact",
  "/mentions-legales",
  "/politique-confidentialite",
  "/reclamations",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const productEntries: MetadataRoute.Sitemap = allSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...productEntries];
}
