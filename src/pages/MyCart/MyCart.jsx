import { Footer, CartPrice, CartCard } from "../../components";

const MyCart = () => {
  return (
    <div>
      <div className="mycart-container">
        <CartCard />
        <CartPrice />
      </div>
      <Footer />
    </div>
  );
};

export { MyCart };
