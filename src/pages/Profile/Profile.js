import { useAuth } from "../../context";
import "./Profile.css";

const Profile = () => {
  const { authUser } = useAuth();

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
      </div>
    </div>
  );
};

export { Profile };
