import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import { useToast } from "../../custom-hooks/useToast";

const NavBar = () => {
  const { isAuthorized, authDispatch } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();

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
          <input
            className="input"
            type="text"
            id="search-bar"
            name="search-bar"
            placeholder="search"
          />
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
              <span className="material-icons">shopping_cart</span>
            </NavLink>
          </div>
          <div className="header-icon">
            <NavLink className="btn-link" to="/mywishlist">
              <span className="material-icons">favorite_border</span>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export { NavBar };
