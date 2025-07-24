import React from "react";
import "../style.css";

export default function IndexPage() {
  return (
    <>
      <nav>
        <div className="nav-inner">
          <div className="nav-left"></div>
          <div className="nav-center">
            <div className="nav-links">
              <a href="/index.html">Home</a>
              <a href="/genres.html">Genres</a>
              <a href="/games.html">Games</a>
              <a href="/images.html">Images</a>
            </div>
          </div>
          <div className="nav-right">
            <input type="search" placeholder="Search..." aria-label="Search" />
          </div>
        </div>
      </nav>
      <div className="page-container">
        <aside className="ad-left">
          <p>Ad Space Left</p>
        </aside>
        <main className="main-content">
          <h1>Gaming Den</h1>
          <h2>Top 3 games this month</h2>
          <div className="image-gallery">
            <div className="image-placeholder">Placeholder 1</div>
            <div className="image-placeholder">Placeholder 2</div>
            <div className="image-placeholder">Placeholder 3</div>
          </div>
          <article>
            <p>This is a simple HTML page to demonstrate basic structure and links.</p>
            <p>Feel free to explore the links above to learn more about the species in the natural park.</p>
            <p>Enjoy your visit!</p>
          </article>
        </main>
        <aside className="ad-right">
          <p>Ad Space Right</p>
        </aside>
      </div>
      <footer>
        <div className="footer-inner">
          <p>Footer</p>
        </div>
      </footer>
    </>
  );
}
