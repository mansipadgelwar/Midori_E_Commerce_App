import { useState } from "react";
import { useDataLayer } from "../../context";
import "./VerticalCard.css";

const VerticalCard = ({ product }) => {
  const { addToWishlist } = useDataLayer();
  const [iconClass, setIconClass] = useState(true);

  function addProductToWishlist(product) {
    setIconClass((iconClass) => !iconClass);
    addToWishlist(product);
  }
  return (
    <article className="vertical-card">
      <button
        className={"material-icons icon btn-link"}
        onClick={() => addProductToWishlist(product)}
      >
        {iconClass ? "favorite_border" : "favorite"}
      </button>
      <div className="img-container">
        <img
          src={product.image}
          alt={product.name}
          className="img-responsive"
        />
      </div>
      <div className="product-description">
        <h3 className="product-main-heading">{product.name}</h3>
        <p className="product-sub-heading">
          ₹{product.actualPrice}
          <span className="product-discount">({product.discount})</span>
        </p>
      </div>
      <div className="button-container">
        <button className="btn btn-cta">Add To Bag</button>
      </div>
    </article>
  );
};

export { VerticalCard };
