import {ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART} from "./constant"

export const addToCart = (data) =>{
    console.warn("action called",data);
    return {
        type:ADD_TO_CART,
        data  // javascript part 
    }
}

export const removeFromCart = (data) =>{
    console.warn("action removeFromCart",data);
    return {
        type:REMOVE_FROM_CART,
        data  // javascript part 
    }
}

export const emptyCart = () =>{
    console.warn("action emptyCart");
    return {
        type:EMPTY_CART,
    }
}