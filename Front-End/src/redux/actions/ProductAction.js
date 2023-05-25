import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: productId,
  };
};

export const increaseQuantity = (productId) => ({
  type: ActionTypes.INCREASE_QUANTITY,
  payload: productId,
});

export const decreaseQuantity = (productId) => ({
  type: ActionTypes.DECREASE_QUANTITY,
  payload: productId,
});

export const setCategories = (categories) => {
  return {
    type: ActionTypes.SET_CATEGORIES,
    payload: categories,
  };
};
