import {PRODUCT_LIST} from "./constant"

export const productList =  () =>{
    return {
        type:PRODUCT_LIST,
    }
}

// export const setProductList =  (data) =>{
//     console.warn("set action");
//     return {
//         type:SET_PRODUCT_LIST,
//         data  // javascript part 
//     }
// }