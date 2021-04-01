import {Component} from 'react';
import "./../Styles/cardcontainer.css";
import Card from "./card.js";

class CardContainer extends Component{

    state = {
        products : JSON.parse(window.localStorage.getItem("products"))
    }
    
    render(){
        const data = this.state.products;
        return(
            <div className="mainContainer">
                {data.map((element,i)=>{
                    return <Card key = {i} name={element.name} url={element.url}></Card>
                })
                }
            </div>
        );
    }
}

export default CardContainer;