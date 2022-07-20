import "./CartPrice.css";
import { useDataLayer } from "../../context";
import { useNavigate } from "react-router-dom";

const CartPrice = (props) => {
  const { state, handleAddToCart } = useDataLayer();
  const currentLocation = useNavigate();

  const result = state.cartData.reduce(
    (acc, product) => {
      acc.actualPrice = acc.actualPrice + product.qty * product.actualPrice;
      acc.discountedPrice =
        acc.discountedPrice + product.qty * product.discountedPrice;
      acc.discount = acc.actualPrice - acc.discountedPrice;
      return acc;
    },
    { actualPrice: 0, discountedPrice: 0, discount: 0 }
  );

  const deliveryCharges = 50 * Number(state.cartData.length);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    if (location.pathname === "/mycart") {
      currentLocation("/ordersummary");
    } else {
      state.cartData.map((item) => handleAddToCart(event, item));
      currentLocation("/checkout");
    }
  };

  return (
    <article className="mycart vertical-card text-only-card">
      <div className="product-description">
        <h3 className="product-main-heading"> PRICE DETAILS</h3>
        <hr />
        <div className="card-mycart">
          <div className="card-mycart-detail">
            <span>Price({state.cartData.length} items)</span>
            <span>₹{result.actualPrice}</span>
          </div>
          <div className="card-mycart-detail">
            <span>Discount</span>
            <span> - ₹ {result.discount}</span>
          </div>
          <div className="card-mycart-detail">
            <span>Delivery Charges</span>
            <span>₹ {deliveryCharges}</span>
          </div>
          <hr />
          <div className="card-mycart-detail">
            <span>TOTAL AMOUNT</span>
            <span>₹ {result.discountedPrice + deliveryCharges}</span>
          </div>
          <hr />
          <p>You will save ₹ {result.discount} on this order</p>
        </div>
      </div>
      <div className="button-container">
        <button
          className="btn btn-cta"
          onClick={(event) => handlePlaceOrder(event)}
        >
          PLACE ORDER
        </button>
      </div>
    </article>
  );
};

export { CartPrice };
