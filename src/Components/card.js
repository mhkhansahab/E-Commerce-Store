import {Component} from 'react';
import "./../Styles/card.css";

class Card extends Component{
    addtoCart = ()=>{
        let orders = JSON.parse(window.localStorage.getItem("order"));
        let order = this.props;

        if(orders.length !== 0){
            let flag = false;
            orders.forEach((element,index) => {
                if(element.name === order.name){
                    orders[index] = {...orders[index], quantity: orders[index].quantity + 1};
                    window.localStorage.setItem("order",JSON.stringify(orders));
                    flag = true;
            }
            });

            if(flag === false){
                order = {...order, quantity:1};
                orders.push(order);
                window.localStorage.setItem("order",JSON.stringify(orders));
            }
        }else{
            order = {...order, quantity:1};
            orders.push(order);
            window.localStorage.setItem("order",JSON.stringify(orders));
        }
        alert("Product Added to Cart");
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