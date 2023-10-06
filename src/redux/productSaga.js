import {takeEvery, put} from 'redux-saga/effects'
import {  PRODUCT_LIST, SET_PRODUCT_LIST } from './constant'
import { type } from '@testing-library/user-event/dist/type';

function* getProducts (){
    let data = yield fetch('http://localhost:3500/product');
    data = yield data.json()
    yield put({type:SET_PRODUCT_LIST,data})
}

// function* testCart(){
//     // let data
//     console.warn("call api here");
// }

function* productSaga(){
    yield takeEvery(PRODUCT_LIST, getProducts)
    // yield takeEvery(ADD_TO_CART, testCart)
}
export default productSaga