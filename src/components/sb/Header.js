import { storyblokEditable } from "@storyblok/react";

export default function Header({ blok }) {
  let heroClasses =
    "h-[20vh] flex flex-col justify-center items-center text-center gap-4 bg-gray-100 shadow";

    
  return (
    <header {...storyblokEditable(blok)} className={heroClasses}>
      {/* Visa loggan om den finns */}
      {blok.logo?.filename && (
        <img
          src={blok.logo.filename}
          alt={blok.logo.alt || "Logo"}
          className="h-12 w-auto"
        />
      )}

      {/* Visa labeln */}
      {blok.label && <h1 className="text-xl font-bold">{blok.label}</h1>}
    </header>
  );
}
