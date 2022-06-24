import { Footer } from "../../components";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const currentLocation = useNavigate();
  return (
    <div>
      <section className="main-content-page">
        <div className="three-box-section">
          <article className="category">
            <img
              src="https://i.postimg.cc/9XBZq97Q/Monstera-Minima.jpg"
              alt="plant"
              className="img card-image"
            />
            <Link
              to="/productlisting"
              className="category-text-overlay text-bold"
            >
              Indoor Plants
            </Link>
          </article>

          <article className="category">
            <img
              src="https://i.postimg.cc/t4FpcqkY/white-orchid.jpg"
              alt="plant"
              className="img card-image"
            />
            <Link
              to="/productlisting"
              className="category-text-overlay text-bold"
            >
              Flowering Plants
            </Link>
          </article>

          <article className="category">
            <img
              src="https://i.postimg.cc/90P6cp8T/Philodendron-verrucosum.jpg"
              alt="plant"
              className="img card-image"
            />
            <Link
              to="/productlisting"
              className="category-text-overlay text-bold"
            >
              Outdoor Plants
            </Link>
          </article>
        </div>

        <div className="hero-img">
          <img
            src="https://i.postimg.cc/Njc3CW04/ren-ran-b-Biu-Sdck8t-U-unsplash.jpg"
            alt="hero-img"
          />
          <div className="hero-img-overlay">
            <h2>Indoor Plants</h2>
            <h4>Live with Nature</h4>
            <button
              id="btn-shop-now"
              className="btn btn-secondary"
              onClick={() => currentLocation("/productListing")}
            >
              Shop Now
            </button>
          </div>
        </div>

        <div className="two-box-section">
          <article className="sub-section-container">
            <div className="sub-section">
              <div className="sub-section-image">
                <img
                  src="https://i.postimg.cc/qv7vZhqQ/Asplenium-nidus.jpg"
                  alt="plant"
                  className="ss-image"
                />
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
                <img
                  src="https://i.postimg.cc/ncJsThqw/Zamioculcas-zamiifolia.jpg"
                  alt="plant"
                  className="ss-image"
                />
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
