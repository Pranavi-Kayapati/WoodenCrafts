import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./authReducer/action";
import { reducer as productReducer } from "./ProductReducer/reducer";
import thunk from "redux-thunk";
import { adminproductReducer } from "./adminReducer/reducer";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  adminproductReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
