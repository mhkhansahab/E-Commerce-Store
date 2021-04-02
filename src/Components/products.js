import {Component} from "react";
import CardContainer from "./cardContainer";
import "./../Styles/products.css";

class Products extends Component{
  addProduct=()=>{
    window.location.href = "/addproduct";
  }
  render(){
    return(
      <div className="mainProduct">
        <div className="pageTitle">Products</div>
        <CardContainer></CardContainer>
        <div className="addbtn" onClick={this.addProduct}>+</div>
      </div>
    );
  }
}
export default Products;
