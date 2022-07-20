import { useAuth, useDataLayer } from "../../context";
import "./Profile.css";
import { useToast } from "../../custom-hooks/useToast";
import { NavLink, useNavigate } from "react-router-dom";
import { NavBar } from "../../components";

const Profile = () => {
  const { authUser, authDispatch } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { dispatch } = useDataLayer();

  const logoutUser = () => {
    showToast("Logout Successful", "success");
    authDispatch({ type: "RESET_AUTH" });
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch({ type: "RESET_DATA" });
    navigate("/logout");
  };

  return (
    <>
      <NavBar />
      <div className="profile-page-wrapper">
        <div className="profile-page-container">
          <div className="notes-hero-heading h1 text-bold">
            <span className="inverted-text">Profile</span>
          </div>
          <div className="notes-hero-sub-heading ">
            <img
              src="https://picsum.photos/300"
              alt="avatar"
              className="avatar avatar-xl"
            />
          </div>
          <div className="profile-page-content">
            <div className="h4">
              <div>
                <span className="inverted-text text-bold">Name: </span>
                {`${authUser.firstName} ${authUser.lastName}`}
              </div>
              <div>
                <span className="inverted-text text-bold">Email Id: </span>
                {`${authUser.email}`}
              </div>
            </div>
          </div>
          <div>
            <button className="btn btn-cta" onClick={logoutUser}>
              Logout
            </button>
            <NavLink
              to="/address"
              className="btn btn-primary-outline btn-nav-link"
            >
              Saved Addresses
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export { Profile };
