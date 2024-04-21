// pages/OrderCartPage.js
import React from 'react';
import OrderCartComponent from '../../components/cart/OrderCartComponent';
import BasicLayout from '../../layouts/BasicLayout';
import CartItemComponent from '../../components/cart/CartItemComponent';


const OrderCartPage = () => {
  return (
    
      <div className=" text-3xl">Order Cart
      {/* <OrderCartComponent/> */}
      <CartItemComponent/>
      {/* <CartComponent/> */}
      </div>
      
  );
};

export default OrderCartPage;

