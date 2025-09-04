import { storyblokEditable } from "@storyblok/react/rsc";
import ServerComponent from "./ServerComponent";

export default function Feature({ blok }) {
  

  return (
    <div
      {...storyblokEditable(blok)}
      className="feature shadow-md p-4 rounded-md w-75"
    >
      <img src={blok.image.filename} alt="Image"/>
      <h2>{blok.name}</h2>
      <p>{blok.price}</p>
      <div className="flex flex-col gap-2">
        {blok?.cta?.map((nestedBlok) => (
          <ServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>

    </div>
  );
}
