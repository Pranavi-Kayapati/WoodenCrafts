import axios from "axios";
import {
  Product,
  ProductAdction,
  ProductsState,
  User,
  UserAdction,
} from "../../constrainsts/Type";
import {
  ADD_PRODUCT,
  ADD_USER,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  EDIT_USER,
  GET_PRODUCTS,
  GET_USERS,
} from "../actionTypes";
import { Dispatch } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "../store";

//Products Actions

interface GetProductsSuccessAction {
  type: typeof GET_PRODUCTS;
  payload: Product[];
}
export type ProductActionType = GetProductsSuccessAction;

export const getProductsSuccess = (products: Product[]): ProductActionType => ({
  type: GET_PRODUCTS,
  payload: products,
});

export const deleteProduct =
  (id: number) => (dispatch: Dispatch<ProductAdction>) => {
    axios
      .delete(`https://all-products-wjqd.onrender.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        alert("Product deleted successfully!");
        dispatch({ type: DELETE_PRODUCT, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const getProducts =
  (paramsObj: any) => (dispatch: Dispatch<ProductActionType>) => {
    axios
      .get<Product[]>(
        "https://all-products-wjqd.onrender.com/products",
        paramsObj
      )
      .then((res) => {
        dispatch(getProductsSuccess(res.data));
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const updateProduct =
  (newData: Product, id: number) => (dispatch: Dispatch<ProductAdction>) => {
    return axios
      .patch(`https://all-products-wjqd.onrender.com/products/${id}`, newData)
      .then((res) => {
        console.log(res);
        dispatch({ type: EDIT_PRODUCT, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const postProduct =
  (newProduct: Product) =>
  async (dispatch: ThunkDispatch<RootState, undefined, ProductAdction>) => {
    try {
      if (newProduct.id) {
        // If 'id' exists in the newProduct, it means we are editing an existing product
        const response = await axios.patch<Product>(
          `https://all-products-wjqd.onrender.com/products/${newProduct.id}`,
          newProduct
        );
        dispatch({ type: EDIT_PRODUCT, payload: response.data });
        alert("Product Updated");
      } else {
        // If 'id' does not exist in the newProduct, it means we are adding a new product
        const response = await axios.post<Product>(
          "https://all-products-wjqd.onrender.com/products",
          newProduct
        );
        dispatch({ type: ADD_PRODUCT, payload: response.data });
        alert("Product added successfully!");
      }
    } catch (error) {
      console.error(error);
    }
  };

// Users Actions

interface GetUsersSuccessAction {
  type: typeof GET_USERS;
  payload: User[];
}
export type UserActionType = GetUsersSuccessAction;

export const getUsersSuccess = (users: User[]): UserActionType => ({
  type: GET_USERS,
  payload: users,
});

export const getUsers = () => (dispatch: Dispatch<UserActionType>) => {
  axios
    .get<User[]>("https://all-products-wjqd.onrender.com/users")
    .then((res) => {
      dispatch(getUsersSuccess(res.data));
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteUser =
  (id: number) => (dispatch: Dispatch<ProductAdction>) => {
    axios
      .delete(`https://all-products-wjqd.onrender.com/users/${id}`)
      .then((res) => {
        console.log(res.data);
        alert("Product deleted successfully!");
        dispatch({ type: DELETE_PRODUCT, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const postUser =
  (newUser: User) =>
  async (dispatch: ThunkDispatch<RootState, undefined, UserAdction>) => {
    try {
      if (newUser.id) {
        const response = await axios.patch<User>(
          `https://all-products-wjqd.onrender.com/users/${newUser.id}`,
          newUser
        );
        dispatch({ type: EDIT_USER, payload: response.data });
        alert("User Updated");
      } else {
        const response = await axios.post<User>(
          "https://all-products-wjqd.onrender.com/users",
          newUser
        );
        dispatch({ type: ADD_USER, payload: response.data });
        alert("User added successfully!");
      }
    } catch (error) {
      console.error(error);
    }
  };
