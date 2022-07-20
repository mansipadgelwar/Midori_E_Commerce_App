import { useState } from "react";
import "./AddressModal.css";
import { useAddressManagement } from "../../../context";
import { v4 as uuidv4 } from "uuid";

const initialAddressFormDetails = {
  _id: uuidv4(),
  name: "",
  mobile: "",
  pincode: "",
  state: "",
  address: "",
  locality: "",
};

const AddressModal = ({ showAddressForm, onClosingAddressForm }) => {
  const [addressFormDetails, setAddressFormDetails] = useState(
    initialAddressFormDetails
  );

  const { addNewAddress } = useAddressManagement();

  if (!showAddressForm) {
    return null;
  }

  const handleAddressFormDetails = () => {
    addNewAddress(addressFormDetails);
    onClosingAddressForm();
  };

  return (
    <div className="address-modal-wrapper">
      <div className="address-modal">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="modal-heading">
            <div className="h4 text-bold">ADD NEW ADDRESS</div>
          </div>
          <div className="modal-contents">
            <ul className="modal-content-list">
              <li className="unordered-list">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  name="name"
                  onChange={(e) =>
                    setAddressFormDetails((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  value={addressFormDetails.name}
                  required
                />
              </li>
              <li className="unordered-list">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="text"
                  placeholder="Mobile"
                  id="mobile"
                  name="mobile"
                  onChange={(e) =>
                    setAddressFormDetails((prev) => ({
                      ...prev,
                      mobile: e.target.value,
                    }))
                  }
                  value={addressFormDetails.mobile}
                  required
                />
              </li>
              <div className="address-unique">
                <li className="unordered-list">
                  <label htmlFor="pincode">Pincode</label>
                  <input
                    type="text"
                    placeholder="Pinode"
                    id="pincode"
                    name="pincode"
                    onChange={(e) =>
                      setAddressFormDetails((prev) => ({
                        ...prev,
                        pincode: e.target.value,
                      }))
                    }
                    value={addressFormDetails.pincode}
                    required
                  />
                </li>
                <li className="unordered-list">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    placeholder="State"
                    id="state"
                    name="state"
                    onChange={(e) =>
                      setAddressFormDetails((prev) => ({
                        ...prev,
                        state: e.target.value,
                      }))
                    }
                    value={addressFormDetails.state}
                    required
                  />
                </li>
              </div>
              <li className="unordered-list">
                <label htmlFor="address">
                  Address(House No,Building,Street,Area)
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  id="address"
                  name="address"
                  onChange={(e) =>
                    setAddressFormDetails((prev) => ({
                      ...prev,
                      address: e.target.value,
                    }))
                  }
                  value={addressFormDetails.address}
                  required
                />
              </li>
              <li className="unordered-list">
                <label htmlFor="locality">Locality/Town</label>
                <input
                  type="text"
                  placeholder="Locality"
                  id="locality"
                  name="locality"
                  onChange={(e) =>
                    setAddressFormDetails((prev) => ({
                      ...prev,
                      locality: e.target.value,
                    }))
                  }
                  value={addressFormDetails.locality}
                  required
                />
              </li>
            </ul>
          </div>
          <div className="filter-modal-cta">
            <button className="btn" onClick={onClosingAddressForm}>
              CANCEL
            </button>
            <button className="btn btn-cta" onClick={handleAddressFormDetails}>
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { AddressModal };
