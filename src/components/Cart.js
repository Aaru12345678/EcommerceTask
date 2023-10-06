import { useSelector } from 'react-redux';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import './App.css';

function Cart() {
  const cartData = useSelector((state) => state.cartData)

  const [totalPrice, setTotalPrice] = useState();
  const [totalDiscount, setTotalDiscount] = useState();

  const [newAmount, setNewAmount] = useState()
  const card = useSelector((state) => state.cartData);
  console.warn("here is the card data ", card)
  let amount = card.length && card.map(item => parseInt(item.price.replace(/,/g, ''), 10)).reduce((prev, next) => prev + next);
 
  const calculateTotal = () => {
    let cartTotal = 0;
    let cartDiscount = 0;

    // Calculate item prices and discounts
    const itemCounts = card.reduce((count, item) => {
      count[item.id] = (count[item.id] || 0) + 1;
      return count;
    }, {});
    console.warn(itemCounts, "itemmmmmmmmmmmmmm")
    Object.keys(itemCounts).forEach((productId) => {
      const product = cartData.find((item) => item.id === productId);
      console.log(product,"product")
      const quantity = itemCounts[productId];

// console.log(quantity,"quantity")

      if (productId === '1' && quantity >= 3) {
        const discountedSets = Math.floor(quantity / 3);
        // console.log(discountedSets,"discountedSets")
        cartTotal += discountedSets * 75;
        
        cartDiscount += (quantity - discountedSets * 3) * product.price;
      } else if (productId === '2' && quantity >= 2) {
        const discountedSets = Math.floor(quantity / 2);
        cartTotal += discountedSets * 35;
        cartDiscount += (quantity - discountedSets * 2) * product.price;
      } else {
        cartTotal += quantity * product.price;
        
      }
    });
    console.warn("cartTotallllllllllllllllll ", cartTotal)

    
    if (cartTotal > 150) {
      cartDiscount += 20;
    }

    setTotalPrice(cartTotal);
    setTotalDiscount(cartDiscount);
    console.log(cartDiscount,"cartDiscount")
    console.warn(cartTotal, "totalprice")
  };

  return (
    <div >
      <Link to="/ ">Product List</Link>
      <h1>Cart Page</h1>
      <div className='cart-page-container'>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>

            </tr>
          </thead>
          <tbody>

            {

              cartData.map((item) => <tr key={item.key}>
                <td>{item.item}</td>

                <td>{item.price}</td>

              </tr>)
            }
          </tbody>
        </table>
        <div className="vertical-table">
          <div className="table-row">

            <div className="table-cell">Item:</div>
            <div className="table-cell">{amount}</div>
          </div>
          <div className="table-row">
            <div className="table-cell">Offer:</div>
            <div className="table-cell">{totalPrice}</div>
          </div>
          <div className="table-row">
            <div className="table-cell">Discount:</div>
            <div className="table-cell">{totalDiscount}</div>
          </div>
          <div className="table-row">
            <div className="table-cell">Total:</div>
            <div className="table-cell">{totalPrice - totalDiscount}</div>
          </div>
        </div>
        
      </div>
      <div>
      
            <button type="button" class="btn btn-success" onClick={calculateTotal}>Grand Total</button>
              <Link to='/checkout'><button type="button" class="btn btn-danger">CHECK OUT</button></Link>
            </div>
    </div>
  );
}

export default Cart;
