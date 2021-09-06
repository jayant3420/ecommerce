import axios from "axios";
import url from "../../Url/url";

export const bestSellerNavFetch = () => {
  return async (dispatch) => {
    const response = await axios({
      method: "get",
      url: `${url}/store/nav`
    });
    dispatch(setBestSellerNav(await response.data));
  };
};

export const setBestSellerNav = (item = null) => {
  if (item) {
    return {
      type: "BESTSELLER_NAV_DATA",
      payload: item
    };
  } else {
    return {
      type: "BESTSELLER_NAV_DATA",
      payload: []
    };
  }
};
