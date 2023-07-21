// Products type

export interface Product {
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
  products: Product[];
};

export type ProductAdction = {
  type: string;
  payload: Product;
};

export type ProductDispatchType = (args: ProductAdction) => ProductAdction;

// User Type

export interface User {
  username: string;
  email: string;
  password: string;
}

export type UsersState = {
  users: Product[];
};

export type UserAdction = {
  type: string;
  payload: User;
};

export type userDispatchType = (args: UserAdction) => UserAdction;
