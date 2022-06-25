import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth, useDataLayer } from "../../context";
import { useToast } from "../../custom-hooks/useToast";
import "./NavBar.css";

const NavBar = () => {
  const { isAuthorized, authDispatch } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { setSearchTerm, searchTerm, state } = useDataLayer();

  const logoutUser = () => {
    showToast("Logout Successful", "success");
    authDispatch({ type: "RESET_AUTH" });
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/logout");
  };

  return (
    <header className="header">
      <div className="header-items">
        <div className="nav-brand">
          <NavLink to="/" className="btn-link">
            Midori
          </NavLink>
        </div>
        <div className="input-icon icons-left">
          <span className="material-icons">search</span>
          <Link to="/productListing">
            <input
              className="input"
              type="text"
              id="search-bar"
              name="search-bar"
              placeholder="search"
              onChange={(event) => setSearchTerm(event.target.value)}
              value={searchTerm}
            />
          </Link>
        </div>
        <div className="sub-menu">
          {isAuthorized ? (
            <button className="btn btn-cta" onClick={logoutUser}>
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="sub-menu">
              <button className="btn btn-cta">Login</button>
            </NavLink>
          )}

          <div className="header-icon">
            <NavLink className="btn-link" to="/mycart">
              <div className="badge">
                <span className="material-icons">shopping_cart</span>
                {state.cartData.length > 0 ? (
                  <span className="badge-icon notification">
                    {state.cartData.length}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </NavLink>
          </div>
          <div className="header-icon">
            <NavLink className="btn-link" to="/mywishlist">
              <div className="badge">
                <span className="material-icons">favorite_border</span>
                {state.wishlistData.length > 0 ? (
                  <span className="badge-icon notification">
                    {state.wishlistData.length}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export { NavBar };
