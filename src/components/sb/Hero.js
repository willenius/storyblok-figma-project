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
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center master-Div">
        {/* H1 med svart text och text shadow */}
        <h1 className="mt-50 text-black text-5xl font-bold font-sans drop-shadow-lg">
          {blok.title}
        </h1>
        {/* Description under H1 med mindre font och grå text + shadow */}
        <h4 className="mt-3 text-gray-400 text-lg font-sans max-w-xl mx-auto leading-relaxed">
          {blok.description}
        </h4>
        <br></br> {/* Knapp */}
        <button className="font-bold text-black border border-black px-10 py-3 rounded-none cursor-pointer transition hero-button">
          {blok.button}
        </button>
        {blok?.image?.filename && (
          <img
            src={blok.image.filename}
            alt={blok.image.alt || "Hero image"}
            className="mt-10 w-5/5 max-w-[1000px] h-[50vh] justify-content: center object-cover rounded shadow-md"
          />
        )}
      </div>
    </div>
  );
}
