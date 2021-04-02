import {Component} from 'react';
import "./../Styles/card.css";

class Card extends Component{
    state = {
        data: JSON.parse(window.localStorage.getItem("order")),
    }

    addtoCart = ()=>{
        let orders = this.state.data;
        let order = this.props;

        if (orders.length !== 0 ){
            let flag = true;
            orders.forEach((element,index)=>{
                if(element.name === order.name){
                    console.log(index ,"=>",element.name ,"-", order.name);
                    orders[index] = {...element, quantity: element.quantity + 1}
                    orders.push(order);
                    flag = false;
                }
            });

        if(flag === true){
            order = {...order, quantity:0};
            orders.push(order);
        }
    }
    else{
        order = {...order, quantity:0};
        orders.push(order);
    }
    
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