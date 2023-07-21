// Products type

export interface ProductState {
  id: number;
  image: string;
  category: string;
  material: string;
  color: string;
  brand: string;
  title: string;
  price: string;
  description: {
    [key: string]: string;
  };
}

export type ProductsState = {
  products: ProductState[];
};

export type ProductAdction = {
  type: string;
  payload: ProductState;
};

export type ProductDispatchType = (args: ProductAdction) => ProductAdction;

// User Type

export interface UserState {
  username: string;
  email: string;
  password: string;
}

export type UsersState = {
  users: ProductState[];
};

export type UserAdction = {
  type: string;
  payload: UserState;
};

export type userDispatchType = (args: UserAdction) => UserAdction;
