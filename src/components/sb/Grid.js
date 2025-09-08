import { storyblokEditable } from "@storyblok/react";
import ServerComponent from "./ServerComponent";
import { getStoryblokApi } from "@/lib/storyblok";

export default async function Grid({ blok }) {
  const response = await getProducts();
  console.log("price", response.data.content);

  return (
    <div
      {...storyblokEditable(blok)}
      className="grid grid-cols-2 gap-1 justify-items-center"
    >
      {response.data.stories.map((p, index) => (
        <div
          key={p.id}
          className={`flex flex-col items-center justify-start w-64 h-[28rem] rounded-lg overflow-hidden shadow-md bg-white
          ${index === 0 ? "col-span-2 -translate-y-2" : ""}`}
        >
          <img
            src={p.content.image.filename}
            alt={p.content.title}
            className="w-full h-48 object-cover"
          />
          <p className="productTitle mt-2 text-center">{p.content.title}</p>
          <p className="text-center font-semibold">{p.content.price}</p>
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
