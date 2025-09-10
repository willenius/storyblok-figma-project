import { storyblokEditable } from "@storyblok/react";

export default function Header({ blok }) {
  return (
    <>
      {/* Svart header högst upp */}
      <header {...storyblokEditable(blok)} className="header">
        <nav className="links-nav">
          <a href="/">{blok.link_home}</a>
          <a href="/products">{blok.link_products}</a>
          <a href="/about">{blok.link_about}</a>
        </nav>

        {blok.logo?.filename && (
          <img
            src={blok.logo.filename}
            alt={blok.logo.alt || "Logo"}
            className="header-logo"
          />
        )}
      </header>

      {/* Vitt block under med endast sökfält */}
      <div className="links-section">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
      </div>
    </>
  );
}
