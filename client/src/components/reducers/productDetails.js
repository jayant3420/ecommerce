const initialstate = {
  products: []
};

export const productsDetail = (state = initialstate, action) => {
  switch (action.type) {
    case "SETPRODUCTS":
      return {
        ...state,
        products: [...action.payload]
      };
    case "PRODUCTLIKEUPDATE":
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === action.payload.id) {
            item.liked = action.payload.liked;
          }
          return item;
        })
      };
    default:
      return state;
  }
};
