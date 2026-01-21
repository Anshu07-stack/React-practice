const initialState = {
  products: [],
  count: [],
};

export const productReducer = (state = initialState, action) => {
  if (action.type === "ADD_TO_PRODUCT") {
    return {
      ...state,
      products: [...state.products, action.payload],
    };
  } else if (action.type === "INCREMENT") {
    return {
      ...state,
      count: state.count + 1,
    };
  } else { 
    return state;
  }
};
