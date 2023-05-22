export const GET_PRODUCTS = "GET_PRODUCTS";

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
