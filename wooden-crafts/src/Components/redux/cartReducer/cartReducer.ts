import { cartProps } from "../../constrainsts/Type";
import { ADD_TO_CART, GET_CART_PRODUCT } from "../actionTypes";


type initialStateProp={
    cart:cartProps [];
}

type actionProps ={type:string,payload:any}
 
const initialState={
    cart:[

    {
        "id": 1,
        "image": "https://cdn.pixabay.com/photo/2016/04/21/21/21/pillows-1344552_1280.jpg",
        "category": "Fabric Sofas",
        "material": "Velvet",
        "color": "Cream",
        "brand": "Wooden Street",
        "title": "Albert L - Shape Right Aligned Corner Sofa With Adjustable Headrest",
        "price": "15,999",
        "description": {
            "Monsoon Sale": " Apply Coupon MONSOON & Get Upto 20% Off (price inclusive of discount) T&C",
            "Store Discount": "Get upto 10% off on orders placed at your nearest experience stores T&C",
            "No Cost EMI": "Starting from Rs 5,269 on ICICI, Axis, Kotak, HDFC, SBI & More"
        }
    },
    {
        "id": 2,
        "image": "https://cdn.pixabay.com/photo/2016/09/28/20/36/pillows-1701390_1280.jpg",
        "category": "Fabric Sofas",
        "material": "Velvet",
        "color": "Grey",
        "brand": "Wooden Street",
        "title": "Alfonso Left Aligned Convertible Sofa Cum Bed",
        "price": "10,000",
        "description": {
            "Monsoon Sale": " Apply Coupon MONSOON & Get Upto 20% Off (price inclusive of discount) T&C",
            "Store Discount": "Get upto 10% off on orders placed at your nearest experience stores T&C",
            "No Cost EMI": "Starting from Rs 5,269 on ICICI, Axis, Kotak, HDFC, SBI & More"
        }
    },
    {
        "id": 3,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlAT1HJVUUj9hUP1Tv1zjuW4hqT-TMqTeln4uP2h-Bk5kWN1m0ntKtkXmAQh0KL6z9DZE&usqp=CAU",
        "category": "Fabric Sofas",
        "material": "Velvet",
        "color": "Blue",
        "brand": "Wooden Street",
        "title": "Berlin 3 Seater Sofa",
        "price": "14999",
        "description": {
            "Monsoon Sale": " Apply Coupon MONSOON & Get Upto 20% Off (price inclusive of discount) T&C",
            "Store Discount": "Get upto 10% off on orders placed at your nearest experience stores T&C",
            "No Cost EMI": "Starting from Rs 5,269 on ICICI, Axis, Kotak, HDFC, SBI & More"
        }
    }
    ]
}

export const cartReducer =(state:initialStateProp=initialState,{type,payload}:actionProps)=>(dispatch:any)=>{
    console.log(payload)
    switch(type){
       
        case GET_CART_PRODUCT: return {...state,cart:payload}
        case ADD_TO_CART: return {...state,cart:[...state.cart,payload]}
    }


}