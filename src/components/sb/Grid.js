import { storyblokEditable } from "@storyblok/react";
import ServerComponent from "./ServerComponent";
import { getStoryblokApi } from "@/lib/storyblok";

export default async function Grid({ blok }) {
  const response = await getProducts();
  let heroClasses = `mt-10 mb-10 text-center gap-4`;

  return (
    <div
      {...storyblokEditable(blok)}
      className={`${heroClasses} grid grid-row-3 gap-1 justify-items-center`}
      style={{ backgroundColor: blok?.background_color }}
    >
      {response.data.stories.map((p, index) => (
        <div
          key={p.id}
          className={`relative flex flex-col items-center justify-start w-64 h-[28rem] rounded-lg overflow-hidden shadow-md bg-white
          ${index === 0 ? "col-span-2 -translate-y-2" : ""}`}
        >
          <img
            src={p.content.image.filename}
            alt={p.content.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-white text-center">
          <p className="text-black font-bold productTitle mt-2 text-center">{p.content.title}</p>
          <p className="text-black font-bold text-center">{p.content.price}</p>
          </div>
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
