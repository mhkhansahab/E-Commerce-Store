import {Component} from "react";
import "./Styles/nav.css"
import Products from "./Components/products";
import Cart from "./Components/cart";
import Home from "./Components/home";
import AddProduct from "./Components/addProduct";

import './App.css';
import { BrowserRouter as Router , Switch, Route, Link } from "react-router-dom";

class App extends Component{
  componentDidMount(){
    const products = [
      {name:"Sneaker",price: 2000,url:"https://thumbs.dreamstime.com/b/sport-shoes-isolated-white-background-41616578.jpg"},
      {name: "Nike" ,price: 3000, url:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"},
      {name: "Black Sports",price: 2500, url: "https://assets.ajio.com/medias/sys_master/root/h0e/h57/14092954894366/-473Wx593H-460455972-black-MODEL.jpg"},
      {name:"Sneaker",price: 2000,url:"https://thumbs.dreamstime.com/b/sport-shoes-isolated-white-background-41616578.jpg"},
      {name: "Nike" ,price: 3000, url:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"},
      {name: "Black Sports",price: 2500, url: "https://assets.ajio.com/medias/sys_master/root/h0e/h57/14092954894366/-473Wx593H-460455972-black-MODEL.jpg"},
      {name:"Sneaker",price: 2000,url:"https://thumbs.dreamstime.com/b/sport-shoes-isolated-white-background-41616578.jpg"},
      {name: "Nike" ,price: 3000, url:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"},
      {name: "Black Sports",price: 2500, url: "https://assets.ajio.com/medias/sys_master/root/h0e/h57/14092954894366/-473Wx593H-460455972-black-MODEL.jpg"},
      {name:"Sneaker",price: 2000,url:"https://thumbs.dreamstime.com/b/sport-shoes-isolated-white-background-41616578.jpg"},
      {name: "Nike" ,price: 3000, url:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"},
      {name: "Black Sports",price: 2500, url: "https://assets.ajio.com/medias/sys_master/root/h0e/h57/14092954894366/-473Wx593H-460455972-black-MODEL.jpg"}
    ]
    const order = [];
    window.localStorage.setItem("products",JSON.stringify(products));
    window.localStorage.setItem("order",JSON.stringify(order));
  }

  render(){
    return(
      <div>
        
        <Router>
          <div className="mainNav">
                <span className="navElement"><Link to="/" className="mylink">Home</Link></span>
                <span>/</span>
                <span className="navElement"><Link to="./products" className="mylink">Products</Link></span>
                <span>/</span>
                <span className="navElement"><Link to="./cart" className="mylink">Cart</Link></span>
            </div>
            <Link to="./addproduct" className="mylink"><div className="addbtn" onClick={this.addProduct}>+</div></Link>
          <Switch> 
            <Route path="/products">
              <Products></Products>
            </Route>

            <Route path="/cart">
              <Cart></Cart>
            </Route>
            
            <Route path="/addproduct">
              <AddProduct></AddProduct>
            </Route>

            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
        
      </div>
    );
  }
}
export default App;
