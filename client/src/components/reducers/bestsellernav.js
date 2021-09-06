const initialstate = {
  bestsellernav: []
};

export const bestSellerNavData = (state = initialstate, action) => {
  switch (action.type) {
    case "BESTSELLER_NAV_DATA":
      return {
        ...state,
        bestsellernav: [...action.payload]
      };
    default:
      return state;
  }
};
