import axios from "axios";
import url from "../../Url/url";

export const cartDataFetch = () => {
  return async (dispatch) => {
    const response = await axios({
      url: `${url}/home/cart`,
      method: "get"
    });
    dispatch(setCart(await response.data));
  };
};

export const setCart = (items = null) => {
  if (items) {
    return {
      type: "CARTDATA",
      payload: items
    };
  } else {
    return {
      type: "CARTDATA"
    };
  }
};

export const deleteCartItem = (id) => {
  return async (dispatch) => {
    const response = await axios({
      url: `${url}/home/delete`,
      method: "delete",
      data: { _id: id }
    });
    if ((await response.status) === 200) {
      dispatch({ type: "CARTDATADELETE", _id: id });
    } else {
      console.log("Item Delete Error");
    }
  };
};

export const updatCartItem = (id, quantity, quantityStatus) => {
  return async (dispatch) => {
    const response = await axios({
      url: `${url}/home/update`,
      method: "put",
      data: { _id: id, qty: quantity }
    });
    if ((await response.status) === 200) {
      dispatch({ type: quantityStatus, _id: id });
    } else {
      console.log("Item update error");
    }
  };
};

export const addItemToCart = (payload) => {
  return async (dispatch) => {
    const response = await axios({
      url: `${url}/home/addtocart`,
      method: "post",
      data: payload
    });
    const data = await response.data;
    if (data.status === "ok") {
      await dispatch({ type: "ADDCART", payload: data.payload });
    } else {
      console.log("Add to cart update error");
    }
  };
};

export const getCoupon = (voucherCode) => {
  return async (dispatch) => {
    const response = await axios({
      url: `${url}/home/voucher`,
      method: "get",
      params: {
        coupon_code: voucherCode
      }
    });
    dispatch({ type: "COUPON", payload: await response.data });
    dispatch({ type: "DISCOUNTGETREQUEST", payload: "yes" });
  };
};
