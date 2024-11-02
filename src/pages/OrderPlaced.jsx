import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/orderplaced.css';

const OrderPlaced = () => {
  const location = useLocation();
  
  // Destructuring the state passed from the Payment component
  const { billAmount, orderedItems } = location.state;

  return (
    <div className="orderplaced">
      <h1>Order Placed</h1>
      <p className="success-message">Payment Successful!</p>

      <div className="order-details">
        <h2>Order Summary</h2>
        <ul className="item-list">
          {orderedItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>

        <div className="total-bill">
          <h3>Total Bill: ${billAmount.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
};

export default OrderPlaced;
