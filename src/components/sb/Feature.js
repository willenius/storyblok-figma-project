import { storyblokEditable } from "@storyblok/react/rsc";
import ServerComponent from "./ServerComponent";

export default function Feature({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="feature shadow-md p-4 rounded-md w-75"
    >
      <img
        src={`https://www.skk.se/contentassets/bd4c36b7031a452f844c977f3d115e14/mediaflow-shibavalp-gulli-9928.jpg=${blok._uid}`}
        alt={blok.name}
        className="w-full aspect-square object-cover rounded-md"
      />
      <h2 className="text-2xl font-bold">{blok.name}</h2>
      <p className="text-gray-600">{blok.description}</p>
      <div className="flex flex-col gap-2">
        {blok?.cta?.map((nestedBlok) => (
          <ServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>

    </div>
  );
}
