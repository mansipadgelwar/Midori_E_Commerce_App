import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <section className="main-content-page">
        <div className="three-box-section">
          <article className="category">
            <img src="/" alt="plant" className="img card-image" />
            <Link
              href="/product/product.html"
              target="_blank"
              className="category-text-overlay text-bold"
            >
              Indoor Plants
            </Link>
          </article>

          <article className="category">
            <img src="/" alt="plant" className="img card-image" />
            <Link
              href="/product/product.html"
              target="_blank"
              className="category-text-overlay text-bold"
            >
              Flowering Plants
            </Link>
          </article>

          <article className="category">
            <img src="/" alt="plant" className="img card-image" />
            <Link
              href="/product/product.html"
              target="_blank"
              className="category-text-overlay text-bold"
            >
              Outdoor Plants
            </Link>
          </article>
        </div>

        <div className="hero-img">
          <img src="/" alt="hero-img" />
          <div className="hero-img-overlay">
            <h2>Indoor Plants</h2>
            <h4>Live with Nature</h4>
            <button id="btn-shop-now" className="btn btn-secondary">
              Shop Now
            </button>
          </div>
        </div>

        <div className="two-box-section">
          <article className="sub-section-container">
            <div className="sub-section">
              <div className="sub-section-image">
                <img src="/" alt="plant" className="ss-image" />
              </div>
              <div className="sub-section-description">
                <h3>Planters on fleek</h3>
                <p>There is a plant for every home and a planter.</p>
              </div>
            </div>
          </article>

          <article className="sub-section-container">
            <div className="sub-section">
              <div className="sub-section-image">
                <img src="/" alt="plant" className="ss-image" />
              </div>
              <div className="sub-section-description">
                <h3>Planters on fleek</h3>
                <p>There is a plant for every home and a planter.</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export { Home };