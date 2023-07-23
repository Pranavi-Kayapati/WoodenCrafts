


export type cartProps={
    id: number;
    image: string;
    category: string;
    material: string;
    color: string;
    brand: string;
    title: string;
    price: string;
    description: {
        "Monsoon Sale": string;
        "Store Discount": string;
        "No Cost EMI": string;
    }
};

// Products type

export interface Product {
  id?: number;
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

export type AllProductAdction = {
  type: string;
  payload: Product[];
};

export type ProductAdction = {
  type: string;
  payload: Product;
};

export type AllProductsDispatchType = (
  args: AllProductAdction
) => AllProductAdction;

export type ProductDispatchType = (args: ProductAdction) => ProductAdction;

// User Type

export interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
}

export type UsersState = {
  users: User[];
};

export type AllUserAdction = {
  type: string;
  payload: User[];
};

export type UserAdction = {
  type: string;
  payload: User;
};

export type AllUsersDispatchType = (args: AllUserAdction) => AllUserAdction;

export type userDispatchType = (args: UserAdction) => UserAdction;

