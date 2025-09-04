import { storyblokEditable } from "@storyblok/react";
import ServerComponent from "./ServerComponent";

export default function Grid({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="grid gap-2 justify-items-center grid-cols-[repeat(auto-fit,minmax(12.625rem,1fr))]"
    >
      {blok.columns.map((nestedBlok, index) => (
        <div
          key={nestedBlok._uid}
          className={`flex items-center justify-center w-128 h-128 rounded-lg overflow-hidden shadow-md 
            ${index === Math.floor(blok.columns.length / 2) ? "-translate-y-1/4 relative" : ""}`}
        >
          <ServerComponent blok={nestedBlok} />
        </div>
      ))}
    </div>
  );
}
