import {
  Product,
  ProductAdction,
  AllProductAdction,
  ProductDispatchType,
  ProductsState,
  UserAdction,
  UsersState,
  AllUserAdction,
  User,
} from "../../constrainsts/Type";
import {
  ADD_PRODUCT,
  ADD_USER,
  DELETE_PRODUCT,
  DELETE_USER,
  EDIT_PRODUCT,
  EDIT_USER,
  GET_PRODUCTS,
  GET_USERS,
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

const userinitialState = {
  users: [],
};

export const usersReducer = (
  state: UsersState = userinitialState,
  action: UserAdction | AllUserAdction
) => {
  let { type, payload } = action;
  switch (type) {
    case GET_USERS: {
      return { ...state, users: payload };
    }
    case ADD_USER: {
      return { ...state, products: [...state.users, payload] };
    }
    case EDIT_USER: {
      const updatedProducts: User[] = state.users.map((item) => {
        if (item.id == (payload as User).id) {
          return (item = payload as User);
        } else {
          return item;
        }
      });

      return { ...state, products: updatedProducts };
    }

    case DELETE_USER: {
      const updatedUsers: User[] = state.users.filter(
        (item) => item.id !== (payload as User).id
      );

      return { ...state, users: updatedUsers };
    }
    default: {
      return state;
    }
  }
};
