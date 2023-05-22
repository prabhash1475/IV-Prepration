import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import { Reducer } from "./reducer";
import thunk from "redux-thunk";

const initState = {
  product: [],
  order: [],
  cart: [],
  SingleProduct: {},
};
export const store = createStore(
  Reducer,
  initState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => console.log(store.getState()));
