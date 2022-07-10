import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-handles">
        <h4 className="h4">Follow us</h4>
        <ul className="social-links list-non-bullet">
          <li className="list-item-inline">
            <a
              href="/"
              className="btn btn-secondary btn-floating"
              target="_blank"
            >
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li className="list-item-inline">
            <a
              href="/"
              className="btn btn-secondary btn-floating"
              target="_blank"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li className="list-item-inline">
            <a
              href="/"
              className="btn btn-secondary btn-floating"
              target="_blank"
            >
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li className="list-item-inline">
            <a
              href="/"
              className="btn btn-secondary btn-floating"
              target="_blank"
            >
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-details">
        <h4 className="h4">Contact us</h4>
        <p>
          If you'd like to get in touch please send us a message during regular
          business hours.
        </p>
        <p className="email-details h4 text-bold"> midori@gmail.com</p>
      </div>
    </footer>
  );
};

export { Footer };
