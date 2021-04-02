import {Component} from "react";
import './../Styles/cart.css';
import CartTile from "./cartTile.js";

class Cart extends Component{
  state = {
    orders : JSON.parse(window.localStorage.getItem("order"))
}

  render(){
    let orders = this.state.orders;
    return(
      <div>
        <div className="pageTitle">Cart</div>
        <div className="cartContainer">
         {
           orders.map((element,i)=>{
             return <CartTile key={i} url={element.url} name = {element.name} price={element.price} quantity = {element.quantity}></CartTile>
           })
         }
        </div>
      </div>
    );
  }
}
export default Cart;
