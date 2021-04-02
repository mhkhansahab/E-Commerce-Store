import {Component} from "react";
import "./../Styles/addproduct.css";

class AddProduct extends Component{
  state={
    name:"",
    price:"",
    url:""
  }

  handleName=(event)=>{
    this.setState({
      name : event.target.value,
    });
  }
  handlePrice=(event)=>{
    this.setState({
      price : event.target.value,
    });
  }
  handleURL=(event)=>{
    this.setState({
      url : event.target.value,
    });
  }
  submit = ()=>{
    let products = JSON.parse(window.localStorage.getItem("products"));
    if(this.state.name !== "" && this.state.price !== "" && this.state.url !== ""){
      let obj = {
      name : this.state.name,
      price : this.state.price,
      url : this.state.url
    }
    products.push(obj);
    window.localStorage.setItem("products",JSON.stringify(products));
    this.setState({
      name : "",
      price : "",
      url : ""
    });
    alert("New Product Added");
    
  }else{
    alert("Enter All Fields");
  }
  }


  render(){
    return(
      <div className="addProduct">
        <div className="pageTitle">Add a Product</div>
        <div className="myForm">
          <input type="text" val = {this.state.name} placeholder="Enter Product Name" onChange={this.handleName}></input>
          <input type="text" val = {this.state.price} placeholder="Enter Product Price" onChange={this.handlePrice}></input>
          <input type="text" val = {this.state.url} placeholder="Enter Product Image URL" onChange={this.handleURL}></input>
          <button className="add" onClick={this.submit}>Add</button>
        </div>
      </div>
    );
  }
}
export default AddProduct;
