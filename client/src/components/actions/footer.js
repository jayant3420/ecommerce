import axios from "axios";
import url from "../Url/url";

export const footerDataFetch = () => {
  return async (dispatch) => {
    const response = await axios({
      url: `${url}/footer`,
      method: "get"
    });
    dispatch(setFooter(await response.data));
  };
};

export const setFooter = (items = null) => {
  if (items) {
    return {
      type: "FOOTDATA",
      payload: items
    };
  } else {
    return {
      type: "FOOTDATA",
      payload: []
    };
  }
};
