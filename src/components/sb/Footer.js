import ServerComponent from "./ServerComponent";
import { storyblokEditable } from "@storyblok/react";

export default function Footer({ blok }) {
  let heroClasses = `h-[60vh] mt-[0px] mb-[0px] flex flex-col justify-center items-center text-center gap-4`;
  

  return (
    <div
    {...storyblokEditable(blok)}
    className={heroClasses}
    style={{ backgroundColor: blok?.background_color }}
  >
    <div>
       <p className="text-white">{blok.copyright}</p>
    </div>
</div>
  )
};