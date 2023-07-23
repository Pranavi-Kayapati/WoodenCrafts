// actions.ts
import axios from "axios";
import { Product } from "../../constrainsts/Type";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const GET_CART = "GET_CART";

export interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: Product;
}

export interface RemoveProductAction {
  type: typeof REMOVE_PRODUCT;
  payload: number; // Product ID
}

export interface IncreaseQuantityAction {
  type: typeof INCREASE_QUANTITY;
  payload: number; // Product ID
}

export interface DecreaseQuantityAction {
  type: typeof DECREASE_QUANTITY;
  payload: number; // Product ID
}

export interface GetCartAction {
  type:typeof GET_CART;
  payload:any;
}

export type CartActionTypes =
  | AddToCartAction
  | RemoveProductAction
  | IncreaseQuantityAction
  | DecreaseQuantityAction;

export const addToCart = (payload: Product):CartActionTypes=> ( 
       
            
                  // Assuming the API returns the updated cart after adding the product
                  //const updatedCart = response.data;
                  ({type:ADD_TO_CART,payload})
                
)

export let getCartProduct=(payload:any)=>{
  return {type:GET_CART,payload}
}
        

export const removeProduct = (productId: number): CartActionTypes => ({
  type: REMOVE_PRODUCT,
  payload: productId,
});

export const increaseQuantity = (productId: number): CartActionTypes => ({
  type: INCREASE_QUANTITY,
  payload: productId,
});

export const decreaseQuantity = (productId: number): CartActionTypes => ({
  type: DECREASE_QUANTITY,
  payload: productId,
});