import {addToCart, removeFromCart, emptyCart} from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../redux/productAction';
import { useEffect } from 'react';


function Main() {
  const dispatch = useDispatch()
  const data = useSelector((state)=>state.productData);
  console.warn("data in main component from saga", data);
  
  useEffect(()=>{
   dispatch(productList())
  },[])
  return (
    <div>
      <div style={{padding:20}}>
      <button  type="button" class="btn btn-warning"  onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div className='product-container'>
        {
          data.map((item)=><div key={item.id}  className='product-item'>
            {/* <img src={item.photo} alt=''/> */}
            <div>Item : {item.item}</div>
            <div>Price : {item.price}</div>
            <div>
              <button type="button" class="btn btn-success" onClick={()=>dispatch(addToCart(item))}>Add to cart</button>
              <button type="button" class="btn btn-danger" onClick={()=>dispatch(removeFromCart(item.id))}>Remove to cart</button>
            </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default Main;
