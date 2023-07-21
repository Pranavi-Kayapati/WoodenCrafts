import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./authReducer/action";
import { reducer as productReducer } from "./ProductReducer/reducer";
import { cartReducer } from "./cartReducer/cartReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ cartReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
