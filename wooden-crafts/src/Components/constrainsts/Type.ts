


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

const product: Product = {
  id: 1,
  image: "https://cdn.pixabay.com/photo/2016/04/21/21/21/pillows-1344552_1280.jpg",
  category: "Fabric Sofas",
  material: "Velvet",
  color: "Cream",
  brand: "Wooden Street",
  title: "Albert L - Shape Right Aligned Corner Sofa With Adjustable Headrest",
  price: "15,999",
  description: {
    "Monsoon Sale": "Apply Coupon MONSOON & Get Upto 20% Off (price inclusive of discount) T&C",
    "Store Discount": "Get upto 10% off on orders placed at your nearest experience stores T&C",
    "No Cost EMI": "Starting from Rs 5,269 on ICICI, Axis, Kotak, HDFC, SBI & More",
  },
};

export default product;

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

// cart



