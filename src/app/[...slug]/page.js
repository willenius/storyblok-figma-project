//Example of a dynamic page ex
// about-us, blog/post-title, contact-us, etc.

import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory, storyblokEditable } from '@storyblok/react/rsc'
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  try {
    const { slug } = params; 
    const data = await fetchData(slug);

    if (!data?.data?.story || data.data.story.content.component === "config") {
      throw new Error("CONFIG_ERROR");
    }

    const blok = data.data.story.content;

    return (
      <div
        {...storyblokEditable(blok)}
        className="hero-section"
        style={{ backgroundColor: blok?.background_color || "transparent" }}
      >
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center master-Div">
          <h1 className="mt-20 text-black text-5xl font-bold drop-shadow-lg">
            {blok.title}
          </h1>
          <h4 className="mt-3 text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            {blok.description}
          </h4>
          <br />
          <button className="font-bold text-black border border-black px-10 py-3 rounded-none cursor-pointer transition hero-button">
            {blok.button}
          </button>
          {blok?.image?.filename && (
            <img
              src={blok.image.filename}
              alt={blok.image.alt || "Hero image"}
              className="mt-10 w-full max-w-[1000px] h-[50vh] object-cover rounded shadow-md"
            />
          )}
        </div>
      </div>
    );
  } catch (error) {
    return notFound();
  }
}

export async function fetchData(slug) {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/${slug.join("/")}`, {
    version: "draft",
  });
}
