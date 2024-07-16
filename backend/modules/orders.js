'use strict'
var serverHelper = require('./../server/utility/server-helper');
var async = serverHelper.async;
var customCatchError = serverHelper.customCatchError;
var _ = serverHelper._;
const products = require('./../data/products.json');
const orders = require('./../data/orders.json');

class Order {
  constructor() {}

  getPickingList = (data, cb) => {
    console.log("data ==>", data)
    async.auto({
      validate: (callback) => {
        //Write validations here
        return callback(null, {})
      },
      getItemsList: ['validate', (results, callback) => {
        const pickingList = {};
        orders.forEach(order => {
          order.lineItems.forEach(item => {
            const productList = products[item.productId];
            productList.forEach(product => {
              if (!pickingList[product.productName]) {
                pickingList[product.productName] = 0;
              }
              pickingList[product.productName]++;
            });
          });
        });
        return callback(null, pickingList);
      }]
    }, (error, asyncAutoResult) => {
      if(error) {
        console.log("Error occured", error)
        return cb(null, customCatchError(error));
      } else {
        return cb(null, {success: true, data: asyncAutoResult.getItemsList});
      }
    })
  }

  getOrderList = (data, cb) => {
    console.log("data ==>", data)
    async.auto({
      validate: (callback) => {
        //Write validations here
        return callback(null, {})
      },
      getOrderList: ['validate', (results, callback) => {
        const packingList = orders.map(order => {
          return {
            orderId: order.orderId,
            orderDate: new Date(order.orderDate).toDateString(),
            shipTo: {
                customerName: order.customerName,
                shippingAddress: order.shippingAddress,
            },
            lineItems: order.lineItems.map(item => {
              return {
                ...item,
                products: products[item.productId]
              };
            })
          };
        });
        
        return callback(null, packingList);
      }]
    }, (error, asyncAutoResult) => {
      if(error) {
        console.log("Error occured", error)
        return cb(null, customCatchError(error));
      } else {
        return cb(null, {success: true, data: asyncAutoResult.getOrderList});
      }
    })
  }
}

module.exports = Order