import { storyblokEditable } from "@storyblok/react";
import ServerComponent from "./ServerComponent";
import { getStoryblokApi } from "@/lib/storyblok";

export default async function GridProducts({ blok }) {
  const response = await getProducts()
  console.log("product",response.data)
  return (
    <div
      {...storyblokEditable(blok)}
      className="grid gap-2 justify-items-center grid-cols-[repeat(auto-fit,minmax(12.625rem,1fr))]"
    >
      {/* map funktion för hela products datan, hämtas in via response */}
      <div className="products-grid">
        {response.data.stories.map((p) => (
          <div key={p.id} className="gridProducts">
            <img src={p.content.image.filename} alt={p.content.title} />
            <p className="product-title">{p.content.title}</p>
            <p className="product-title">{p.content.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
};

async function getProducts() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get("cdn/stories/", {
    version: "draft",
    content_type: 'product', per_page: 8
  });
}