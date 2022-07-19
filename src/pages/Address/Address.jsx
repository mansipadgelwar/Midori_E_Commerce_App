import "../Address/Address.css";
import { AddressModal, NavBar } from "../../components";
import { useAddressManagement } from "../../context";

const Address = () => {
  const {
    addressState,
    handleDeleteAdddress,
    showAddressForm,
    setShowAddressForm,
  } = useAddressManagement();

  return (
    <>
      <NavBar />
      <div className="main-content-page address-page">
        <AddressModal
          showAddressForm={showAddressForm}
          onClosingAddressForm={() => setShowAddressForm(false)}
        />
        <div className="menu-bar">
          <div className="page-title h3 text-bold">Saved Addresses</div>
          <div>
            <button
              className="btn btn-secondary btn-icon"
              onClick={() => setShowAddressForm(true)}
            >
              <span class="material-icons">add</span>ADD NEW ADDRESS
            </button>
          </div>
        </div>
        {addressState.address &&
          addressState.address.map((element) => {
            return (
              <div className="address-container" key={element._id}>
                <div className="notes-container">
                  <div className="notes-title-container">
                    <div className="h4 text-bold">{element.name}</div>
                    <div>
                      <span
                        className="material-icons"
                        onClick={() => handleDeleteAdddress(element._id)}
                      >
                        delete
                      </span>
                    </div>
                  </div>
                  <div className="notes-body" />
                  <div class="notes-label-container">
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
                      <span className="text-bold">State:</span> {element.state}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export { Address };
