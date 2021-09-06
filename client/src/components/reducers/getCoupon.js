const initialState = {
  coupon: [],
  discountAmount: 0,
  discountGetRequest: "no"
};

export const getDiscountCoupon = (state = initialState, action) => {
  switch (action.type) {
    case "COUPON":
      return {
        ...state,
        coupon: action.payload
      };
    case "COUPONAMOUNT":
      return {
        ...state,
        discountAmount: action.payload
      };
    case "DISCOUNTGETREQUEST":
      return {
        ...state,
        discountGetRequest: action.payload
      };
    default:
      return state;
  }
};
