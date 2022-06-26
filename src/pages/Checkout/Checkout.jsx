import { Link } from "react-router-dom";
import { OrderPlaced } from "../../asset";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="authentication-page">
      <div className="logout-content">
        <div className="ecom-image-container">
          <img
            src={OrderPlaced}
            alt="order-placed"
            className="img-responsive"
          />
        </div>
        <h2 className="h3">Order placed successfully!!</h2>
        <Link to="/" className="btn btn-cta btn-link">
          Home
        </Link>
      </div>
    </div>
  );
};

export { Checkout };