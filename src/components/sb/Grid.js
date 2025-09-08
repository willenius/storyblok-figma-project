import { storyblokEditable } from "@storyblok/react";
import ServerComponent from "./ServerComponent";
import { getStoryblokApi } from "@/lib/storyblok";

export default async function Grid({ blok }) {
  const response = await getProducts();
  console.log("price", response.data.content);

  return (
    <div
      {...storyblokEditable(blok)}
      className="flex flex-row gap-4 overflow-x-auto py-4"
    >
      {response.data.stories.map((p) => (
        <div
          key={p.id}
          
          className="flex flex-col items-center justify-center w-48 h-48 rounded-lg overflow-hidden shadow-md"
        >
          <img
            src={p.content.image.filename}
            alt={p.content.title}
            className="w-full h-full object-cover"
          />
          <p className="productTitle mt-2 text-center">{p.content.title}</p>
          <p>{p.content.price}</p>
        </div>
      ))}
    </div>
  );
}
async function getProducts() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get("cdn/stories/", {
    version: "draft",
    content_type: "product",
    per_page: 3,
  });
}
