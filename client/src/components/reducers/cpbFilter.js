const initialState = {
  color: "all",
  priceRange: [],
  brand: "all",
  sortBy: "name",
  showCount: 6,
  pageNumber: 1
};

export const updateCpbFilter = (state = initialState, action) => {
  switch (action.type) {
    case "COLORUPDATE":
      return {
        ...state,
        color: action.payload
      };
    case "PRICERANGEUPDATE":
      return {
        ...state,
        priceRange: action.payload
      };
    case "BRANDUPDATE":
      return {
        ...state,
        brand: action.payload
      };
    case "SORTBYUPDATE":
      return {
        ...state,
        sortBy: action.payload
      };
    case "SHOWCOUNTUPDATE":
      return {
        ...state,
        showCount: action.payload
      };
    case "PAGENUMBERUPDATE":
      return {
        ...state,
        pageNumber: action.payload
      };
    default:
      return state;
  }
};
