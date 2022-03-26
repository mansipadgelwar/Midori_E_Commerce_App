import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-items">
        <div className="nav-brand">
          <Link className="btn-link" to="/">
            Midori
          </Link>
        </div>
        <div className="input-icon icons-left">
          <span className="material-icons">search</span>
          <input
            className="input"
            type="text"
            id="search-bar"
            name="search-bar"
            placeholder="search"
          />
        </div>
        <div className="sub-menu">
          <button className="btn btn-cta">Login</button>
          <div className="header-icon">
            <Link className="btn-link" to="/">
              <span className="material-icons">shopping_cart</span>
            </Link>
          </div>
          <div className="header-icon">
            <Link className="btn-link" to="/">
              <span className="material-icons">favorite_border</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
