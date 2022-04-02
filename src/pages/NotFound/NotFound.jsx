import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="page-container">
      <h1 className="page-heading">404</h1>
      <h5 className="page-subheading">This page is missing</h5>
      <button className="btn btn-secondary-outline">Go back to home</button>
    </div>
  );
};

export { NotFound };
