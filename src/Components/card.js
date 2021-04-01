import {Component} from 'react';
import "./../Styles/card.css";

class Card extends Component{

    addtoCart = ()=>{
        console.log("hello")
    }
    render(){
        return(
            <div className="mainCard">
            <img src={this.props.url} className = "cardimg" alt="card-img"></img>
            <div className="btnContainer">
            <div className="cardTitle">{this.props.name}</div>
            <button className="cardbtn" onClick={this.addtoCart}>Add to Cart</button>
            </div>
            </div>
        );
    }
}

export default Card;