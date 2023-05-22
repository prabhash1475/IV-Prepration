import { GET_PRODUCTS } from "./action";

export const Reducer = (state, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, product: payload };
    default:
      return state;
  }
};
