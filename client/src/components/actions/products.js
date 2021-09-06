import axios from "axios";
import url from "../Url/url";

export const productsDetailsFetch = () => {
  return async (dispatch) => {
    const response = await axios({
      url: `${url}/products`,
      method: "get"
    });
    dispatch(setProductDetails(await response.data));
  };
};

export const setProductDetails = (items = null) => {
  if (items) {
    return {
      type: "SETPRODUCTS",
      payload: items
    };
  } else {
    return {
      type: "SETPRODUCTS",
      payload: []
    };
  }
};
