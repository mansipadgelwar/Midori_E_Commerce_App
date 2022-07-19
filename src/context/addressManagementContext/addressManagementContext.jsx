import {
  useReducer,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useToast } from "../../custom-hooks/useToast";
import {
  deleteAddressService,
  getAddressService,
  postAddressService,
} from "../../services";
import { useAuth } from "../../context";

const AddressManagementContext = createContext(null);

const AddressManagementProvider = ({ children }) => {
  const { showToast } = useToast();
  const { authToken, isAuthorized } = useAuth();
  const [showAddressForm, setShowAddressForm] = useState(false);

  const addressReducer = (addressState, action) => {
    switch (action.type) {
      case "SET_ADDRESS":
        return {
          ...addressState,
          address: action.payload.address,
        };
      default:
        return addressState;
    }
  };

  const [addressState, addressDispatch] = useReducer(addressReducer, {
    address: [],
  });

  const getAddress = async () => {
    if (isAuthorized) {
      try {
        const {
          data: { address },
        } = await getAddressService(authToken);
        addressDispatch({
          type: "SET_ADDRESS",
          payload: { address: address },
        });
      } catch (err) {
        console.error("error in getting new address", err);
      }
    }
  };

  const addNewAddress = async (addressDetails) => {
    try {
      const {
        data: { address },
      } = await postAddressService(authToken, addressDetails);
      addressDispatch({
        type: "SET_ADDRESS",
        payload: { address: address },
      });
      showToast("New address added", "success");
    } catch (err) {
      showToast("Error in adding new address", "error");
      console.error("error in adding new address", err);
    }
  };

  const handleDeleteAdddress = async (_id) => {
    try {
      const {
        data: { address },
      } = await deleteAddressService(authToken, _id);
      addressDispatch({
        type: "SET_ADDRESS",
        payload: { address: address },
      });
      showToast("Address deleted", "success");
    } catch (err) {
      showToast("Error in deleting address", "error");
      console.error("error in deleting address", err);
    }
  };

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <AddressManagementContext.Provider
      value={{
        addNewAddress,
        addressState,
        addressReducer,
        handleDeleteAdddress,
        showAddressForm,
        setShowAddressForm,
      }}
    >
      {children}
    </AddressManagementContext.Provider>
  );
};

const useAddressManagement = () => useContext(AddressManagementContext);

export { useAddressManagement, AddressManagementProvider };
