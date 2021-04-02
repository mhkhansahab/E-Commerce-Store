import {Component} from "react";
import './../Styles/cart.css';

class CartTile extends Component{

  state = {
    orders : JSON.parse(window.localStorage.getItem("order"))
}

  increament = (name)=>{
    this.state.orders.forEach(element => {
      console.log(element);
    });
  }

  decreament = (name)=>{
    this.state.orders.forEach(element => {
      console.log(element);
    });
  }
  
  render(){
    return(
        <div className="cartTile">
            <img src={this.props.url} className="cartImg" alt="cart-tile"></img>
            <span className="cartName">{this.props.name}</span>
            <span className = "countContainer">
            <span className="dec" onClick={()=>this.decreament(this.props.name)}>-</span>
            <span className="quantity">{this.props.quantity}</span>
            <span className="inc" onClick={()=>this.increament(this.props.name)}>+</span>
            </span>
            <span className="cartPrice">Rs. {this.props.price}</span>
        </div>
    );
  }
}
export default CartTile;
