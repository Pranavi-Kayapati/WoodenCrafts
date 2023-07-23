// reducers.ts
import { CartActionTypes, ADD_TO_CART, REMOVE_PRODUCT, INCREASE_QUANTITY, DECREASE_QUANTITY } from "./action";
import { Product } from "../../constrainsts/Type";
import axios from "axios";

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface RootState {
  cart: CartItem[];
}


const initialState: RootState = {
  cart: [],
};
 


const cartReducer = (state = initialState, action: CartActionTypes): RootState => {
    switch (action.type) {
      case ADD_TO_CART:
        const existingCartItem = state.cart.find((item) => item.product.id === action.payload.id);
        if (existingCartItem) {
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.product.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { product: action.payload, quantity: 1 }],
          };
        }
  
      case REMOVE_PRODUCT:
        return {
          ...state,
          cart: state.cart.filter((item) => item.product.id !== action.payload),
        };
  
      case INCREASE_QUANTITY:
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.product.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
  
      case DECREASE_QUANTITY:
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.product.id === action.payload ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;