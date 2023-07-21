import {
  Product,
  ProductAdction,
  AllProductAdction,
  ProductDispatchType,
  ProductsState,
  UserAdction,
  UsersState,
} from "../../constrainsts/Type";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCTS,
} from "../actionTypes";

// Products Reducer;

const initialState: ProductsState = {
  products: [],
};

export const adminproductReducer = (
  state: ProductsState = initialState,
  action: ProductAdction | AllProductAdction
) => {
  let { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS: {
      return { ...state, products: payload };
    }
    case ADD_PRODUCT: {
      return { ...state, products: [...state.products, payload] };
    }
    case EDIT_PRODUCT: {
      const updatedProducts: Product[] = state.products.map((item) => {
        if (item.id == (payload as Product).id) {
          return (item = payload as Product);
        } else {
          return item;
        }
      });

      return { ...state, products: updatedProducts };
    }

    case DELETE_PRODUCT: {
      const updatedProducts: Product[] = state.products.filter(
        (item) => item.id !== (payload as Product).id
      );
      return { ...state, products: updatedProducts };
    }
    default: {
      return state;
    }
  }
};

//User Reducer;

// const userinitialState = {
//   users: [],
// };

// export const usersReducer = (
//   state: UsersState = userinitialState,
//   action: UserAdction
// ) => {
//   let { type, payload } = action;
//   switch (type) {
//     case ADD_PRODUCT: {
//       return { ...state, products: [...state.users, payload] };
//     }
//     case DELETE_PRODUCT: {
//       const updatedUsers: Product[] = state.users.filter(
//         (item) => item.id !== action.payload.id
//       );

//       return { ...state, users: updatedUsers };
//     }
//     default: {
//       return state;
//     }
//   }
// };
