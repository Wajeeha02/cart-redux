import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";
import "./Cart.css";


function Cart() {
  const dispatch=useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove=(productID)=>{
    dispatch(remove(productID));
  }
  return (
    <div>
      <h3>CART</h3>
      <div className="cart-wrapper">
        {products.map((product) => (
          <div className="cartCard" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h5>{product.title}</h5>
            <h5>${product.price}</h5>
            <button className="btn" onClick={()=>handleRemove(product.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
