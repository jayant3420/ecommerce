const initialstate = {
  footer: []
};

export const footerData = (state = initialstate, action) => {
  switch (action.type) {
    case "FOOTDATA":
      return {
        ...state,
        footer: [...action.payload]
      };
    default:
      return state;
  }
};
