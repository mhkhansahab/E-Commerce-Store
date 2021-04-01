import {Component} from "react";
import CardContainer from "./cardContainer";
import "./../Styles/products.css";

class Products extends Component{
  render(){
    return(
      <div className="mainProduct">
        <div className="productTitle">Products</div>
        <CardContainer></CardContainer>
        <div className="addbtn">+</div>
      </div>
    );
  }
}
export default Products;
