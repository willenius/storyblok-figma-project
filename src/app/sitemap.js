import { getStoryblokApi } from "@/lib/storyblok";

export default async function sitemap() {
  try {
    const baseUrl = "https://storyblok-figma-project.vercel.app";

    const staticPaths = [
      {
        url: `${baseUrl}/home/`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
      },
      {
        url: `${baseUrl}/products/`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/about/`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      },
    ];

    const storyblok = getStoryblokApi();

    const productDetails = await storyblok.get("cdn/stories/", {
      version: "published",
      starts_with: "products",
    });

    const dynamicPaths = productDetails.data.stories.map((product) => ({
      url: `${baseUrl}/products/${product.slug}/`,
      lastModified: new Date(product.updated_at) || new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

    return [...staticPaths, ...dynamicPaths];
  } catch (error) {
    return [];
  }
}
