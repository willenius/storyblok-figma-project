import { storyblokEditable } from "@storyblok/react";
import ServerComponent from "./ServerComponent";
import { getStoryblokApi } from "@/lib/storyblok";

export default async function GridProducts({ blok }) {
    const response = await getProducts()
    return (
        <div
      {...storyblokEditable(blok)}
      className="grid gap-2 justify-items-center grid-cols-[repeat(auto-fit,minmax(12.625rem,1fr))]"
      >
        {response.data.stories.map((p) => (
            <div key={p.id}>
                <img src={p.content.image.filename}/>
                <p className="text-blue-500">{p.content.title}</p>
            </div>
        ))}
       {/* {blok.productsBlock.map((nestedBlok, index) => (
               <div
                 key={nestedBlok._uid}
                 className={`flex items-center justify-center w-128 h-128 rounded-lg overflow-hidden shadow-md 
                   ${index === Math.floor(blok.productsBlock.length / 2) ? "-translate-y-1/4 relative" : ""}`}
               >
               </div>
             ))} */}
    </div>
    )
};

async function getProducts() {
    const storyblokApi = getStoryblokApi();
      return await storyblokApi.get("cdn/stories/", {
        version: "draft",
        content_type: 'product',per_page: 8
      });
}