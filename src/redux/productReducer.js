import {PRODUCT_LIST, SET_PRODUCT_LIST} from "./constant"

export const productData = (data = [], action)=>{
    switch(action.type){
        // case PRODUCT_LIST:
        //     //add to cart logic
        //     console.warn("PRODUCT LIST condition", action);
        //     return [action.data]
        case  SET_PRODUCT_LIST:
            console.warn("SET_PRODUCT_LIST", action);
            return [...action.data]

        default:
            return data
    }
}