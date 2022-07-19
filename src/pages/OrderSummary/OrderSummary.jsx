import { CartPrice, AddressModal, Footer, NavBar } from "../../components";
import { useAddressManagement } from "../../context";
import { Link } from "react-router-dom";
import { EmptyBasket } from "../../asset";
import { useState } from "react";

const OrderSummary = () => {
  const { addressState, showAddressForm, setShowAddressForm } =
    useAddressManagement();
  const [checked, setChecked] = useState(true);

  return (
    <>
      <NavBar />
      <AddressModal
        showAddressForm={showAddressForm}
        onClosingAddressForm={() => setShowAddressForm(false)}
      />
      <h3 className="h3 center-text wishlist-page-heading">Order Summary</h3>
      <div className="mycart-container">
        {addressState.address ? (
          <>
            <div className="horizontal-card-container">
              {addressState.address.map((element) => {
                return (
                  <div key={element._id}>
                    <input
                      type="radio"
                      value={element.address}
                      name="address"
                      defaultChecked={checked}
                      onChange={() => setChecked(!checked)}
                    />
                    <label htmlFor={element.address}>
                      <div className="address-container" key={element._id}>
                        <div className="notes-container">
                          <div className="notes-title-container">
                            <div className="h4 text-bold">{element.name}</div>
                          </div>
                          <div className="notes-body" />
                          <div className="notes-label-container">
                            {element.address}, {element.pincode}
                            {element.tag && (
                              <div className="notes-label-type text-bold h5">
                                {element.tag}
                              </div>
                            )}
                          </div>
                          <div className="notes-menu">
                            <div className="notes-creation-date">
                              <span className="text-bold"> City: </span>
                              {element.locality}
                            </div>
                            <div className="priority-tab">
                              <span className="text-bold">State:</span>{" "}
                              {element.state}
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                );
              })}
              <div>
                <button
                  className="btn btn-primary-outline btn-icon"
                  onClick={() => setShowAddressForm(true)}
                >
                  <span class="material-icons">add</span>ADD NEW ADDRESS
                </button>
              </div>
            </div>
            <CartPrice />
          </>
        ) : (
          <div className="authentication-page">
            <div className="logout-content">
              <h3 className="h3 ">Hey, it feels so light!</h3>
              <h4 className="gray-text content-heading">
                There is nothing in your cart. Let's add some items.
              </h4>
              <div className="ecom-image-container">
                <img
                  src={EmptyBasket}
                  alt="empty-basket"
                  className="img-responsive"
                />
              </div>
              <Link to="/mywishlist" className="btn btn-cta btn-link">
                Add from wishlist
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export { OrderSummary };
