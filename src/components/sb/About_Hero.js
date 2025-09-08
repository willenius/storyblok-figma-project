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
    <h1>{blok.title}</h1>
    <p>{blok.description}</p>
</div>
  )
};