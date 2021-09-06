const initialState = {
  categoriesProducts: [],
  subcategoriesProducts: []
};

export const filterProduct = (state = initialState, action) => {
  switch (action.type) {
    case "CATEGORY":
      return {
        ...state,
        categoriesProducts: action.payload
      };
    case "SUBCATEGORY":
      return {
        ...state,
        subcategoriesProducts: action.payload
      };
    default:
      return state;
  }
};
