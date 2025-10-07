"use client";

import { useProducts } from "@/context/ProductContext";

export default function Products(props) {
  const { planner, stickers } = props || {};
  const { handleIncrementProduct } = useProducts() || {};

  const safeStickers = Array.isArray(stickers) ? stickers : [];

  if (!planner || safeStickers.length === 0) return null;

  // Map product names to image filenames
  const getImageForProduct = (productName) => {
    const imageMap = {
      '"Ancient Weed': "/ReactJS.jpeg",
      "Runic Bookmark Set": "/Firebase.jpeg",
      "Celestial Desk Mat": "/NextJS.jpeg",
      "Enchanted Notebook": "/docker.jpeg",
    };

    return imageMap[productName] || "/low_res/NextJS.jpeg";
  };

  return (
    <>
      {/* Planner Section */}
      <div className="section-container">
        <div className="section-header">
          <h2>Shop Our Selection</h2>
          <p>From organisation or accessorization</p>
        </div>

        <div className="planner-container">
          <div>
            <img src="/low_res/planner.jpeg" alt="planner" />
          </div>
          <div className="planner-info">
            <p className="text-large planner-header">
              Medieval Dragon Month Planner
            </p>
            <h3>
              <span>€</span>14.99
            </h3>
            <p>
              Step into a realm of fantasy and organization with our{" "}
              <strong>Medieval Dragon Month Planner</strong>! This
              high-resolution PNG asset combines the fierce elegance of dragons
              with intricate medieval designs to create a planner that's not
              only functional but also a work of art.
            </p>
            <ul>
              <li>
                <strong>Epic Dragon Artwork:</strong> Stunning hand-drawn dragon
                motifs and medieval-inspired borders make every month feel
                legendary.
              </li>
              <li>
                <strong>Fully Printable:</strong> Designed at ultra-high
                resolution, perfect for printing on any size paper.
              </li>
            </ul>
            <div className="purchase-btns">
              <button
                onClick={() =>
                  handleIncrementProduct(planner.default_price, 1, planner)
                }
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stickers Section */}
      <div className="section-container">
        <div className="section-header">
          <h2>Or Collect Your Favorite Tech</h2>
          <p>Choose from our custom designed tech logos</p>
        </div>

        <div className="sticker-container">
          {safeStickers.map((sticker) => {
            const stickerName = sticker.name || "Unnamed";
            const key = sticker.id || sticker.default_price || stickerName;
            const imageName = getImageForProduct(stickerName);

            return (
              <div key={key} className="sticker-card">
                <img
                  src={`/low_res/${imageName}`}
                  alt={`${stickerName} sticker`}
                />
                <div className="sticker-info">
                  <p className="text-medium">{stickerName}</p>
                  <p>{sticker.description}</p>
                  <h4>
                    <span>€</span>
                    {Array.isArray(sticker.prices) && sticker.prices[0]
                      ? (sticker.prices[0].unit_amount / 100).toFixed(2)
                      : "--"}
                  </h4>
                  <button
                    onClick={() =>
                      handleIncrementProduct(sticker.default_price, 1, sticker)
                    }
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
