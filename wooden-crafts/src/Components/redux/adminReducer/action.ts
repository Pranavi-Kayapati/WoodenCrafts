import axios from "axios";
import { Product, ProductsState } from "../../constrainsts/Type";
import { GET_PRODUCTS } from "../actionTypes";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";

interface GetProductsSuccessAction {
  type: typeof GET_PRODUCTS;
  payload: Product[];
}
export type ProductActionType = GetProductsSuccessAction;

// const productSucess = (payload) => {
//   return { type: POST_PRODUCT_SUCCESS, payload };
// };

export const getProductsSuccess = (products: Product[]): ProductActionType => ({
  type: GET_PRODUCTS,
  payload: products,
});

// export const postProduct = (newProduct:Product) => (dispatch) => {
//   axios
//     .post("http://localhost:8080/products", newProduct)
//     .then((res) => {
//       dispatch(productSucess(res.data));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

export const getProducts =
  (paramsObj: any) => (dispatch: Dispatch<ProductActionType>) => {
    axios
      .get<Product[]>(
        "https://all-products-wjqd.onrender.com/products",
        paramsObj
      )
      .then((res) => {
        dispatch(getProductsSuccess(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

// export const fetchProducts = (): ThunkAction<
//   void,
//   RootState,
//   unknown,
//   ProductActionType
// > => {
//   return async (dispatch: Dispatch<ProductActionType>, getState) => {
//     const paramsObj = {
//       // Provide any necessary parameters for your API request
//     };

//     try {
//       const response = await axios.get<Product[]>(
//         "https://all-products-wjqd.onrender.com/products",
//         { params: paramsObj }
//       );
//       const products = response.data;
//       console.log(products);
//       dispatch(getProductsSuccess(products));
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

// export const updateProduct = (newData, id) => (dispatch) => {

//   return axios
//     .patch(`http://localhost:8080/products/${id}`, newData)
//     .then((res) => {
//       console.log(res);
//       dispatch({ type: PATCH_PRODUCT_SUCCESS });
//     })
//     .catch((err) => {
//       dispatch(productFailure(err.message));
//     });
// };

// export const deleteProduct = (id) => (dispatch) => {
//   axios
//     .delete(`http://localhost:8080/products/${id}`)
//     .then((res) => {
//       console.log(res);
//       dispatch({ type: DELETE_PRODUCT_SUCCESS });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
