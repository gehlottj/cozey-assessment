import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../style/picking-list.css';

const PickingList = () => {
  const [pickingList, setPickingList] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3000/api/orders/getPickingList')
      .then(response => setPickingList(response.data.data))
      .catch(error => console.error('Error fetching picking list:', error));
  }, []);

  return (
    <div className="picking-container">
      <h1>Picking List</h1>
      <ul>
        {Object.entries(pickingList).map(([product, quantity]) => (
          <li key={product}>
            <span className="product-name">{product}</span>
            <span className="quantity">x {quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PickingList;
