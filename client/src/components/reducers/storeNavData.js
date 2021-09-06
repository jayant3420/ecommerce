const initialState = {
  items: []
};

export const navdata = (state = initialState, action) => {
  switch (action.type) {
    case "NAVDATA":
      return {
        ...state,
        items: [...action.payload]
      };
    default:
      return state;
  }
};
