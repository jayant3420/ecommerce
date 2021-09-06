const initialState = {
  totalProducts: 0
};

export const updateTotalProducts = (state = initialState, action) => {
  switch (action.type) {
    case "TOTALPRODUCTUPDATE":
      return {
        ...state,
        totalProducts: action.payload
      };
    default:
      return state;
  }
};
