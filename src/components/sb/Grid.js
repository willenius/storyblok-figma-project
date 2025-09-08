import { storyblokEditable } from "@storyblok/react";
import ServerComponent from "./ServerComponent";
import { getStoryblokApi } from "@/lib/storyblok";

export default async function Grid({ blok }) {
  const response = await getProducts()
  console.log("product", response.data);

  return (
    <div
      {...storyblokEditable(blok)}
      className="grid gap-2 justify-items-center grid-cols-[repeat(auto-fit,minmax(12.625rem,1fr))]"
    >
      <div className="home-grid">
        {response.data.stories.map((p) => (
          <div key={p.id} className="homeProducts">
            <img src={p.content.image.filename} alt="pictures of shoes" />
            <p className="productTitle">{p.content.title}</p>
            </div>
        ))}
      {/* {blok.columns.map((nestedBlok, index) => (
        <div
          key={nestedBlok._uid}
          className={`flex items-center justify-center w-128 h-128 rounded-lg overflow-hidden shadow-md 
            ${index === Math.floor(blok.columns.length / 2) ? "-translate-y-1/4 relative" : ""}`}
        >
          <ServerComponent blok={nestedBlok} />
        </div> */}
      {/* ))} */}
    </div>
    </div>
  )};

async function getProducts () {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get("cdn/stories/", {
    version: "draft",
    content_type: 'product', per_page: 3
  });
}
