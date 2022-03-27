import { Header } from "../../components/header/Header";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div className="authentication-page">
      <Header />

      <div className="logout-content">
        <h2 className="h2">Logged Out</h2>
        <Link to="/" className="btn btn-cta btn-link">
          Sign in Again
        </Link>
      </div>
    </div>
  );
};

export { Logout };
