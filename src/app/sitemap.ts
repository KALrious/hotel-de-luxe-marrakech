import { MetadataRoute } from "next";
import {
  getHotels,
  getRestaurants,
  getSpas,
  getFtours,
  getContentItems,
} from "@/lib/markdown";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.hotel-de-luxe-marrakech.com";

  // Static routes
  const staticRoutes = [
    "",
    "/cgv",
    "/contact",
    "/galerie",
    "/histoire",
    "/mentions-legales",
    "/partenariat",
    "/reservation",
    "/articles",
    "/guides",
    "/interviews",
    "/hotels",
    "/gastronomie",
    "/spas",
    "/ftour",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic routes
  const hotels = getHotels().map((hotel) => ({
    url: `${baseUrl}/hotels/${hotel.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const restaurants = getRestaurants().map((restaurant) => ({
    url: `${baseUrl}/gastronomie/${restaurant.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const spas = getSpas().map((spa) => ({
    url: `${baseUrl}/spas/${spa.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const ftours = getFtours().map((ftour) => ({
    url: `${baseUrl}/ftour/${ftour.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articles = getContentItems("articles").map((item) => ({
    url: `${baseUrl}/articles/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  const guides = getContentItems("guides").map((item) => ({
    url: `${baseUrl}/guides/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  const interviews = getContentItems("interviews").map((item) => ({
    url: `${baseUrl}/interviews/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...hotels,
    ...restaurants,
    ...spas,
    ...ftours,
    ...articles,
    ...guides,
    ...interviews,
  ];
}
