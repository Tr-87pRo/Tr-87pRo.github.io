import React from "react";
import "./style.css";

export default function IndexPage() {
  return (
    <div>
      <h1>Hello World!</h1>
      <ul>
        <li><a href="/index.html">Home</a></li>
        <li><a href="/species.html">Species</a></li>
        <li><a href="/games.html">Games</a></li>
        <li><a href="/images.html">Images</a></li>
      </ul>
      <h2>Welcome to my new page</h2>
      <div className="image-gallery">
        <img src="images/snop.jpg" alt="Image 1" />
        <img src="images/dice.jpg" alt="Image 2" />
        <img src="images/man.jpg" alt="Image 3" />
      </div>
      <article>
        <p>This is a simple HTML page to demonstrate basic structure and links.</p>
        <p>Feel free to explore the links above to learn more about the species in the natural park.</p>
        <p>Enjoy your visit!</p>
      </article>
    </div>
  );
}