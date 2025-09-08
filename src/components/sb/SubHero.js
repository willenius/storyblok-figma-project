import ServerComponent from "./ServerComponent";
import { storyblokEditable } from "@storyblok/react";

export default function Hero({ blok }) {
  let heroClasses = `h-[60vh] mt-[0px] mb-[0px] flex flex-col justify-center items-center text-center gap-4`;
  /* om header margin inte fungerar så är det pga MT^^^^ */

  return (
    <div
      {...storyblokEditable(blok)}
      className={heroClasses}
      style={{ backgroundColor: blok?.background_color }}
    >
      <h1 className="mt-20 text-black text-5xl font-bold font-sans drop-shadow-lg">
          {blok.title}
        </h1>

      <h4 className="mt-3 text-gray-400 text-lg font-sans max-w-xl mx-auto leading-relaxed">
          {blok.description}
        </h4>

      <button className="font-bold text-black border border-black px-10 py-3 rounded-none cursor-pointer transition hero-button">
        {blok.button}
      </button>
    </div>
  );
}
