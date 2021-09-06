const initialstate = {
  cart: []
};

export const cartData = (state = initialstate, action) => {
  switch (action.type) {
    case "CARTDATA":
      return {
        ...state,
        cart: [...action.payload]
      };
    case "CARTDATADELETE":
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item._id !== action._id;
        })
      };
    case "QTYINCREMENT":
      // console.log(state.cart);
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item._id === action._id) {
            item.quantity = item.quantity + 1;
          }
          return item;
        })
      };
    case "QTYDECREMENT":
      // console.log(state.cart);
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item._id === action._id) {
            item.quantity = item.quantity - 1;
          }
          return item;
        })
      };
    case "ADDCART":
      state.cart.push(action.payload);
      return {
        ...state,
        cart: [...state.cart]
      };
    default:
      return state;
  }
};
