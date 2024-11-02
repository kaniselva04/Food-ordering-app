import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  // Calculate total price
  const totalPrice = Object.keys(cartItems).reduce((total, itemId) => {
    const item = food_list.find(food => food._id === itemId);
    if (item) {
      return total + item.price * cartItems[itemId]; // Assuming item.price contains the price of the item
    }
    return total;
  }, 0);
  const navigate=useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {
          food_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div className='cart-items-item' key={item._id}>
                  <img src={item.image} alt={item.name} /> {/* Assuming each item has an image property */}
                  <p>{item.name}</p>
                  <p>{item.price.toFixed(2)}$</p> {/* Display item price */}
                  <p>{cartItems[item._id]}</p> {/* Display quantity */}
                  <p>{(item.price * cartItems[item._id]).toFixed(2)}$</p> {/* Display total for this item */}
                  <button onClick={() => removeFromCart(item._id)}>Remove</button>
                </div>
              )
            }
            return null; // To avoid rendering anything if the item is not in cart
          })
        }

        <hr />
        <div className="cart-total">
          <p>Total Price: {totalPrice.toFixed(2)}$</p> {/* Display total price */}
        </div>
      </div>
      <button onClick={()=>navigate('./order')}>PROCEED TO CHECKOUT</button>
    </div>
  );
};

export default Cart;

