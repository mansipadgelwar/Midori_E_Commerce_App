import { useNavigate } from "react-router-dom";
import { useDataLayer } from "../../context";
import "./VerticalCard.css";

const VerticalCard = ({ product }) => {
  const { addToWishlist, state, handleAddToCart } = useDataLayer();
  const currentLocation = useNavigate();
  const currentProductInWishlist = state.wishlistData.find(
    (element) => element._id === product._id
  );
  const isInWishlist = currentProductInWishlist === undefined ? false : true;

  const isInCart =
    state.cartData.find((element) => element._id === product._id) === undefined
      ? false
      : true;
  return (
    <article className="vertical-card">
      <button
        className={"material-icons icon btn-link"}
        onClick={(event) => addToWishlist(event, product)}
      >
        {!isInWishlist ? "favorite_border" : "favorite"}
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
          ₹{product.discountedPrice}
          <span className="product-discount">({product.discount})</span>
        </p>
      </div>
      <div className="button-container">
        {isInCart ? (
          <button
            className="btn btn-cta"
            onClick={() => currentLocation("/mycart")}
          >
            Go to cart
          </button>
        ) : (
          <button
            className="btn btn-cta"
            onClick={(event) => handleAddToCart(event, product)}
          >
            Add to cart
          </button>
        )}
      </div>
    </article>
  );
};

export { VerticalCard };
