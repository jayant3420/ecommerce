import axios from "axios";
import url from "../Url/url";

export const fetchNavigationData = () => {
  return async (dispatch) => {
    const response = await axios({
      url: `${url}/header`,
      method: "get"
    });
    dispatch(setItems(await response.data));
  };
};

export const setItems = (items = null) => {
  if (items) {
    return {
      type: "NAVDATA",
      payload: items
    };
  } else {
    return {
      type: "NAVDATA",
      payload: []
    };
  }
};
