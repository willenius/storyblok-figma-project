"use client";

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
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        {/* H1 med svart text och text shadow */}
        <h1 className="mt-10 text-black text-3xl font-bold drop-shadow-lg">
          {blok.title}
        </h1>
        {/* Description under H1 med mindre font och grå text + shadow */}
        <h4 className="text-gray-600 text-2xl drop-shadow-md">
          {blok.description}
        </h4>

        {/* Knapp */}
        <button className="bg-white text-black border-2 border-black px-6 py-3 rounded cursor-pointer hover:bg-gray-100 transition">
          {blok.button}
        </button>

        {blok?.image?.filename && (
          <img
            src={blok.image.filename}
            alt={blok.image.alt || "Hero image"}
            className="mt-10 w-4/5 max-w-[1000px] h-[30vh] object-cover rounded shadow-md"
          />
        )}
      </div>
    </div>
  );
}
