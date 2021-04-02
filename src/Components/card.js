import {Component} from 'react';
import "./../Styles/card.css";

class Card extends Component{
    addtoCart = ()=>{
        let orders = JSON.parse(window.localStorage.getItem("order"));
        let order = this.props;
        order = {...order, quantity:1};
        orders.push(order);
        console.log(orders);
        window.localStorage.setItem("order",JSON.stringify(orders));
    }
    render(){
        return(
            <div className="mainCard">
            <img src={this.props.url} className = "cardimg" alt="card-img"></img>
            <div className="btnContainer">
            <div className="cardTitle">{this.props.name}</div>
            <div className="cardTitle">Rs. {this.props.price}</div>
            <button className="cardbtn" onClick={this.addtoCart}>Add to Cart</button>
            </div>
            </div>
        );
    }
}

export default Card;