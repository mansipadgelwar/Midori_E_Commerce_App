import "./CartPrice.css";
import { useDataLayer } from "../../context";

const CartPrice = () => {
  const { state } = useDataLayer();

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
        <button className="btn btn-cta">PLACE ORDER</button>
      </div>
    </article>
  );
};

export { CartPrice };
