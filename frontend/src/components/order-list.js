import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../style/order-list.css';  // Add this line to import the CSS

const PackingList = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/orders/getOrderList')
      .then(response => setOrderList(response.data.data))
      .catch(error => console.error('Error fetching packing list:', error));
  }, []);

  return (
    <div className="container">
      <h1>Packing List</h1>
      <div className="packing-list">
        {orderList.map(order => (
          <div key={order.orderId} className="order">
            <h2>Order #{order.orderId}</h2>
            <p><strong>Date: </strong>{order.orderDate}</p>
            <p><strong>Customer: </strong>{order.shipTo.customerName}</p>
            <p><strong>Address: </strong>{order.shipTo.shippingAddress}</p>
            <ul>
              {order.lineItems.map(item => (
                <li key={item.lineItemId}>
                  <strong>{item.productName}</strong>
                  <ul>
                    {item.products.map(product => (
                      <li key={product.productId}>{product.productName}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackingList;
