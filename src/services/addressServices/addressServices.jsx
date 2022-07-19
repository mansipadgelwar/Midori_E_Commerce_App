import axios from "axios";

const postAddressService = (authToken, address) => {
  return axios.post(
    "/api/user/address",
    { address },
    { headers: { authorization: authToken } }
  );
};

const getAddressService = (authToken) => {
  return axios.get("/api/user/addresses", {
    headers: { authorization: authToken },
  });
};

const deleteAddressService = (authToken, addressId) => {
  return axios.delete(`/api/user/address/${addressId}`, {
    headers: { authorization: authToken },
  });
};

export { postAddressService, getAddressService, deleteAddressService };
