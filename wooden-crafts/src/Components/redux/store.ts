import {  applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as productReducer } from "./ProductReducer/reducer";
import cartReducer from "./cartReducer/cartReducer";
import { adminproductReducer } from "./adminReducer/reducer";


import thunk from "redux-thunk";



export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  authReducer,
  productReducer,
  cartReducer,
  adminproductReducer,

});


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
