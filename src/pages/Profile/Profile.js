import { useAuth } from "../../context";
import "./Profile.css";
import { useToast } from "../../custom-hooks/useToast";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { authUser } = useAuth();
  const { authDispatch } = useAuth();
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
        </div>
      </div>
    </div>
  );
};

export { Profile };
