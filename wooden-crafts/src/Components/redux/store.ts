import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as productReducer } from "./ProductReducer/reducer";
import { cartReducer } from "./cartReducer/cartReducer";
import thunk from "redux-thunk";
import { adminproductReducer, usersReducer } from "./adminReducer/reducer";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  adminproductReducer,
  usersReducer,
  cartReducer,
  productReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
