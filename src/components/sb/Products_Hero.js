import ServerComponent from "./ServerComponent";
import { storyblokEditable } from "@storyblok/react";

export default function Products_Hero({ blok }) {
  let heroClasses = `h-[60vh] mt-[0px] mb-[0px] flex flex-col justify-center items-center text-center gap-4`;
  
  return (
    <div
    {...storyblokEditable(blok)}
    className={heroClasses}
    style={{ backgroundColor: blok?.background_color }}
  >
    <div className="productsHero">
        <h1 className="text-black text-5xl font-bold drop-shadow-lg">{blok.title}</h1>
        <h4 className="text-gray-600 text-2xl drop-shadow-md">{blok.description}</h4>
    </div>
</div>
  )
};