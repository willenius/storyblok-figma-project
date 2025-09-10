import { getStoryblokApi } from "@/lib/storyblok";
import { storyblokEditable } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic"; // Viktigt för att undvika cache 404

export default async function Page({ params }) {
  try {
    // här tar vi emot slug som en array
    const slugArray = params.slug;
    const data = await fetchData(slugArray);

    // om vi inte hittar storyn eller om det är en config
    if (!data?.data?.story || data.data.story.content.component === "config") {
      throw new Error("CONFIG_ERROR");
    }

    const blok = data.data.story.content;

    return (
      <div {...storyblokEditable(blok)} className="product-page">
        <div className="product-container">
          {/* Produktbild */}
          {blok?.image?.filename && (
            <div className="product-image">
              <img
                src={blok.image.filename}
                alt={blok.image.alt || "product image"}
              />
            </div>
          )}

          {/* Produktinfo */}
          <div className="product-info">
            <h1 className="product-title">{blok.title}</h1>
            <p className="product-price">{blok.price}</p>
            <p className="product-description">{blok.info}</p>

            {/* Storlekar */}
            {blok.sizes?.length > 0 && (
              <div className="product-sizes">
                <h3 className="size-headline">Size</h3>
                <div className="sizes-list">
                  {blok.sizes.map((s) => (
                    <span key={s._uid} className="size-tag">
                      {s.size}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Add to cart */}
            <div className="product-actions">
              <button className="add-to-cart">
                {blok.addtocart_button || "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return notFound();
  }
}

export async function fetchData(slugArray) {
  const storyblokApi = getStoryblokApi();
  const path = slugArray ? slugArray.join("/") : "home"; // fallback till "home"
  return await storyblokApi.get(`cdn/stories/${path}`, {
    version: process.env.NODE_ENV === "production" ? "published" : "draft",
  });
}
