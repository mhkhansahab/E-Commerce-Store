import {Component} from "react";
import './../Styles/cart.css';
import CartTile from "./cartTile.js";

class Cart extends Component{
  state = {
    orders : JSON.parse(window.localStorage.getItem("order"))
}

  increament= (name)=>{
    let orders = JSON.parse(window.localStorage.getItem("order"));
    orders.forEach((element,index) => {
      if(element.name === name){
          orders[index] = {...orders[index], quantity: orders[index].quantity + 1};
          window.localStorage.setItem("order",JSON.stringify(orders));
          this.setState({
            orders: orders
          });
  }
  });
  }

  decreament= (name)=>{
    let orders = JSON.parse(window.localStorage.getItem("order"));
    orders.forEach((element,index) => {
      if(element.name === name){
          orders[index] = {...orders[index], quantity: orders[index].quantity - 1};
          window.localStorage.setItem("order",JSON.stringify(orders));
          this.setState({
            orders: orders
          });
  }
  });
  }

  calQuantity(){
    let count = 0;
    this.state.orders.forEach((element)=>{
      count += element.quantity;
    })
    return count;
  }
  calPrice(){
    let count = 0;
    this.state.orders.forEach((element)=>{
      const value = element.quantity * element.price;
      count += value;
    })
    return count;
  }

  checkout = ()=>{
    alert("Thank You for Shopping with us");
    let orders = [];
    window.localStorage.setItem("order",JSON.stringify(orders));
    this.setState({
      orders : [],
    })
  }

  render(){
    let orders = this.state.orders;
    let totalCount = this.calQuantity();
    let totalPrice = this.calPrice();
    return(
      <div>
        <div className="pageTitle">Cart</div>
        <div className="cartContainer">
         {
           orders.map((element,i)=>{
             return <CartTile key={i} inc = {()=>this.increament(element.name)} dec = {()=>this.decreament(element.name)} url={element.url} name = {element.name} price={element.price} quantity = {element.quantity}></CartTile>
           })
         }
        </div>
        <div className="totalCard">
          <span className="text">Total Quantity: {totalCount}</span>
          <span className="text">Total Price: Rs. {totalPrice}</span>
          <button className="checkout" onClick={this.checkout}>Proceed to Checkout</button>
        </div>
      </div>
    );
  }
}
export default Cart;
