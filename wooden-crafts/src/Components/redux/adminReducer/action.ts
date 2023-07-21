import axios from "axios";
import {
  Product,
  ProductAdction,
  ProductsState,
} from "../../constrainsts/Type";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCTS,
} from "../actionTypes";
import { Dispatch } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "../store";

interface GetProductsSuccessAction {
  type: typeof GET_PRODUCTS;
  payload: Product[];
}
export type ProductActionType = GetProductsSuccessAction;

export const getProductsSuccess = (products: Product[]): ProductActionType => ({
  type: GET_PRODUCTS,
  payload: products,
});

// export const postProduct =
//   (newProduct: Product) => (dispatch: Dispatch<ProductAdction>) => {
//     axios
//       .post("https://all-products-wjqd.onrender.com/products", newProduct)
//       .then((res) => {
//         console.log(res.data);
//         alert("Product Added!");
//         dispatch({ type: ADD_PRODUCT, payload: res.data });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

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

// export const postProduct =
//   (newProduct: Product) => (dispatch: Dispatch<ProductAdction>) => {
//     if (newProduct.id) {
//       // If 'id' exists in the newProduct, it means we are editing an existing product
//       return axios
//         .patch<Product>(
//           `https://all-products-wjqd.onrender.com/products/${newProduct.id}`,
//           newProduct
//         )
//         .then((res) => {
//           dispatch({ type: EDIT_PRODUCT, payload: res.data });
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } else {
//       // If 'id' does not exist in the newProduct, it means we are adding a new product
//       return axios
//         .post<Product>(
//           "https://all-products-wjqd.onrender.com/products",
//           newProduct
//         )
//         .then((res) => {
//           dispatch({ type: ADD_PRODUCT, payload: res.data });
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   };

// export const postProduct = (newProduct: Product) => {
//   if (newProduct.id) {
//     // If 'id' exists in the newProduct, it means we are editing an existing product
//     return axios
//       .patch<Product>(
//         `https://all-products-wjqd.onrender.com/products/${newProduct.id}`,
//         newProduct
//       )
//       .then((res) => {
//         return { type: EDIT_PRODUCT, payload: res.data } as const;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } else {
//     // If 'id' does not exist in the newProduct, it means we are adding a new product
//     return axios
//       .post<Product>(
//         "https://all-products-wjqd.onrender.com/products",
//         newProduct
//       )
//       .then((res) => {
//         return { type: ADD_PRODUCT, payload: res.data } as const;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// };

// Assuming this is your action creator for postProduct
// export const postProduct =
//   (newProduct: Product) => (dispatch: Dispatch<ProductActionType>) => {
//     if (newProduct.id) {
//       return axios
//         .patch<Product>(
//           `https://all-products-wjqd.onrender.com/products/${newProduct.id}`,
//           newProduct
//         )
//         .then((res) => {
//           dispatch({ type: EDIT_PRODUCT, payload: res.data });
//           return res.data; // Return the resolved data from the Promise
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } else {
//       return axios
//         .post<Product>(
//           "https://all-products-wjqd.onrender.com/products",
//           newProduct
//         )
//         .then((res) => {
//           dispatch({ type: ADD_PRODUCT, payload: res.data });
//           return res.data; // Return the resolved data from the Promise
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   };

// export const postProduct =
//   (newProduct: Product) => (dispatch: Dispatch<ProductAdction>) => {
//     if (newProduct.id) {
//       // If 'id' exists in the newProduct, it means we are editing an existing product
//       return axios
//         .patch<Product>(
//           `https://all-products-wjqd.onrender.com/products/${newProduct.id}`,
//           newProduct
//         )
//         .then((res) => {
//           dispatch({ type: EDIT_PRODUCT, payload: res.data });
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } else {
//       // If 'id' does not exist in the newProduct, it means we are adding a new product
//       return axios
//         .post<Product>(
//           "https://all-products-wjqd.onrender.com/products",
//           newProduct
//         )
//         .then((res) => {
//           dispatch({ type: ADD_PRODUCT, payload: res.data });
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   };
// // This code will work correctly and dispatch the appropriate actions based on whether you are adding a new product or editing an existing one.

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
// By setting up the store with the redux-thunk middleware and using the async function in the postProduct action creator, you can now use dispatch and perform asynchronous operations like API calls. Remember that you need to adjust the imports and typings based on your project's file structure and types.
