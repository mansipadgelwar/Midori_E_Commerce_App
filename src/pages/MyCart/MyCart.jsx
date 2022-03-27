import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { CartPrice } from "../../components/CartPrice/CartPrice";
import { CartCard } from "../../components/CartCard/CartCard";

const MyCart = () => {
  return (
    <div>
      <Header />
      <div className="mycart-container">
        <CartCard />
        <CartPrice />
      </div>
      <Footer />
    </div>
  );
};

export { MyCart };
