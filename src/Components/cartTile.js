import {Component} from "react";
import './../Styles/cart.css';

class CartTile extends Component{
  
  render(){
    return(
        <div className="cartTile">
            <img src={this.props.url} className="cartImg" alt="cart-tile"></img>
            <span className="cartName">{this.props.name}</span>
            <span className = "countContainer">
            <span className="dec" onClick={this.props.dec}>-</span>
            <span className="quantity">{this.props.quantity}</span>
            <span className="inc" onClick={this.props.inc}>+</span>
            </span>
            <span className="cartPrice">Rs. {this.props.price}</span>
        </div>
    );
  }
}
export default CartTile;
