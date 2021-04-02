import {Component} from "react";
import CardContainer from "./cardContainer";
import "./../Styles/products.css";

class Products extends Component{
  render(){
    return(
      <div className="mainProduct">
        <div className="pageTitle">Products</div>
        <CardContainer></CardContainer>
      </div>
    );
  }
}
export default Products;
