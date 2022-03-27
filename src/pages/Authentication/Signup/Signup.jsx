import { Header } from "../../components/header/Header";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div class="authentication-page">
      <Header />
      <article class="form-container">
        <div class="authentication-form-container">
          <form class="form" action="">
            <h3 class="h3">SIGN UP</h3>
            <label htmlFor="email" class="input-label">
              Email:{" "}
            </label>
            <input
              class="input"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email ID"
              required
            />

            <label htmlFor="fname" class="input-label">
              First Name:{" "}
            </label>
            <input
              class="input"
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter your first name"
              required
            />

            <label htmlFor="lname" class="input-label">
              Last Name:{" "}
            </label>
            <input
              class="input"
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter your last name"
              required
            />

            <div class="input-with-icon">
              <label htmlFor="password" class="input-label">
                Password:{" "}
              </label>
              <input
                class="input"
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                required
              />
              <button class="btn-link material-icons icons-right">
                visibility
              </button>
            </div>

            <div class="input-with-icon">
              <label htmlFor="confirm-password" class="input-label">
                Confirm Password:{" "}
              </label>
              <input
                class="input"
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm your password"
                required
              />
              <button class="btn-link material-icons icons-right">
                visibility
              </button>
            </div>

            <div class="checkbox-container">
              <input class="checkbox" type="checkbox" />
              <div class="checkbox-detail">
                I accept all terms and conditions
              </div>
            </div>

            <button class="btn btn-cta">Create New Account</button>
            <Link class="btn-link" href="./login.html">
              Already have an account &gt
            </Link>
          </form>
        </div>
      </article>
    </div>
  );
};

export { Signup };
