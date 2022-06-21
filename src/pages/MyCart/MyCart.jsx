import { Footer, CartPrice, CartCard } from "../../components";
import { useDataLayer } from "../../context";
import "./MyCart.css";

const MyCart = () => {
  const { state } = useDataLayer();
  return (
    <div>
      <div className="mycart-container">
        {state.cartData.map((product) => {
          return <CartCard product={product} />;
        })}
        <CartPrice />
      </div>
      <Footer />
    </div>
  );
};

export { MyCart };
