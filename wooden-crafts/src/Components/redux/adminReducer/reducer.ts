import {
  Product,
  ProductAdction,
  ProductDispatchType,
  ProductsState,
} from "../../constrainsts/Type";
import { ADD_PRODUCT, DELETE_PRODUCT } from "../actionTypes";

const initialState = {
  products: [],
};

export const productReducer = (
  state: ProductsState = initialState,
  action: ProductAdction
) => {
  let { type, payload } = action;
  switch (type) {
    case ADD_PRODUCT: {
      return { ...state, products: [...state.products, payload] };
    }
    case DELETE_PRODUCT: {
      const updatedProducts: Product[] = state.products.filter(
        (item) => item.id !== action.payload.id
      );

      return { ...state, articles: updatedProducts };
    }
    default: {
      return state;
    }
  }
};
