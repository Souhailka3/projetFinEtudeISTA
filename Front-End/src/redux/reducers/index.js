import { combineReducers } from "redux";
import {
  ProductReducer,
  selectedProductReducer,
  cartReducer,
  CategoryReducer,
} from "./ProductReducer";

const reducers = combineReducers({
  allProducts: ProductReducer,
  product: selectedProductReducer,
  cart: cartReducer,
  allCategories: CategoryReducer,
});
export default reducers;
