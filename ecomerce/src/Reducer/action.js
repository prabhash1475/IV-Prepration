export const GET_PRODUCTS = "GET_PRODUCTS";
export const FILTER_PRODUCT = "FILTER_PRODUCT";
export const SORT_PRODUCT = "SORT_PRODUCT";
export const ADD_CURRENT_PRODUCT = "ADD_CURRENT_PRODUCT";

// ACTION CREATER
export const getProduct = () => async (dispatch) => {
  let data = await fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=100`
  );
  data = await data.json();
  dispatch({
    type: GET_PRODUCTS,
    payload: data.data,
  });
};

// without thunk
// export const getProduct = (data) => {
//   return {
//     type: GET_PRODUCTS,
//     payload: data,
//   };
// };

export const filterProduct = (data) => {
  return {
    type: FILTER_PRODUCT,
    payload: data,
  };
};

export const sortProduct = (data) => {
  return {
    type: SORT_PRODUCT,
    payload: data,
  };
};

export const addCurrent = (data) => {
  return {
    type: ADD_CURRENT_PRODUCT,
    payload: data,
  };
};
