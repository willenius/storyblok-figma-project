import { storyblokEditable } from "@storyblok/react";

export default function Teaser({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className=""
    >
      <p className="text-gray-600">{blok.description}</p>
    </div>
  );
}
