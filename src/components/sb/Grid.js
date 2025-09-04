import { storyblokEditable } from "@storyblok/react";
import ServerComponent from "./ServerComponent";

export default function Grid({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="grid gap-4 w-full justify-items-center grid-cols-[repeat(auto-fit,minmax(12.625rem,1fr))]"
    >
      {blok.columns.map((nestedBlok, index) => (
        <div
          key={nestedBlok._uid}
          className={
            index === Math.floor(blok.columns.length / 2)
              ? "-translate-y-1/4 relative"
              : ""
          }
        >
          <ServerComponent blok={nestedBlok} />
        </div>
      ))}
    </div>
  );
}
