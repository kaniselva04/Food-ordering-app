import React from 'react';
import { useLocation } from 'react-router-dom';


const Last = () => {
    const location = useLocation();
  
  // Destructuring the state passed from the Payment component
  const { billAmount, orderedItems } = location.state;

  
  return (
    <div className="last">
        <h1>THE END</h1>
    </div>
  );
};

export default Last;
