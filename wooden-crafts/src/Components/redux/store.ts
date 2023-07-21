import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as productReducer } from "./ProductReducer/reducer";
import { cartReducer } from "./cartReducer/cartReducer";
import thunk from "redux-thunk";
import { adminproductReducer } from "./adminReducer/reducer";




const rootReducer = combineReducers({ cartReducer });

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  adminproductReducer,
});


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
