import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./authReducer/action";
import { reducer as productReducer } from "./ProductReducer/action";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ authReducer, productReducer });

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
