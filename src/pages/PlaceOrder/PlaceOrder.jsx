import React, { useState, useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const { cartItems, food_list } = useContext(StoreContext);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    address: '',
    paymentMethod: 'Credit Card'
  });

  const handleChange = (e) => {
    setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the order submission
    console.log('Order placed:', customerDetails);
  };

  const calculateTotalPrice = () => {
    return Object.keys(cartItems).reduce((total, itemId) => {
      const item = food_list.find(item => item._id === itemId);
      return total + (item.price * cartItems[itemId]);
    }, 0);
  };

  return (
    <div className="place-order">
      <h2>Place Your Order</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="text" name="address" placeholder="Your Address" onChange={handleChange} required />
        <select name="paymentMethod" onChange={handleChange}>
          <option value="Credit Card">Credit Card</option>
          <option value="PayPal">PayPal</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
        </select>
        <h3>Total Price: ${calculateTotalPrice().toFixed(2)}</h3>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default PlaceOrder;

