import ServerComponent from "./ServerComponent";
import { storyblokEditable } from "@storyblok/react";

export default function Footer({ blok }) {
  return (
    <footer
      {...storyblokEditable(blok)}
      className="mt-12 border-t border-black-400 bg-black text-gray-300"
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Newsletter */}
        <div className="mb-8 text-center">
          <h1 className="text-white text-3xl font-bold font-sans drop-shadow-lg">{blok.newsletter}</h1>
          <p className="mt-3 text-gray-400 text-lg font-sans max-w-xl mx-auto leading-relaxed">{blok.newsletter_p}</p>
          <form
            className="flex max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder={blok.placeholder}
              className="flex-1 text-center border border-white px-3 py-3 rounded-none focus:outline-none text-white placeholder-gray-400"
            />
            <button
              type="submit"
              className="font-bold text-black border border-black px-10 py-3 rounded-none cursor-pointer transition hero-button"
            >
              {blok.button_placeholder}
            </button>
          </form>
        </div>

        {/* nav-bar */}
        <nav className="flex justify-center space-x-8 mb-6">
          <a href="/" className="hover:text-white transition">
            {blok.link_home}
          </a>
          <a href="/products" className="hover:text-white transition">
            {blok.link_products}
          </a>
          <a href="/about" className="hover:text-white transition">
            {blok.link_about}
          </a>
        </nav>

        <p className="text-left text-sm text-white-500">{blok.copyright}</p>
      </div>
    </footer>
  );
}
