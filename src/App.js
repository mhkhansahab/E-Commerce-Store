import {Component} from "react";
import "./Styles/nav.css"
import Products from "./Components/products";
import Cart from "./Components/cart";
import Home from "./Components/home";
import AddProduct from "./Components/addProduct";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter as Router , Switch, Route, Link } from "react-router-dom";

class App extends Component{
  componentDidMount(){
    const products = [
      {name:"Sneaker",price: 2000,url:"https://thumbs.dreamstime.com/b/sport-shoes-isolated-white-background-41616578.jpg"},
      {name: "Nike" ,price: 3000, url:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"},
      {name: "Black Sports",price: 2500, url: "https://assets.ajio.com/medias/sys_master/root/h0e/h57/14092954894366/-473Wx593H-460455972-black-MODEL.jpg"},
      {name:"Red Nike",price: 4000,url:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"},
      {name: "Legend Lace Up" ,price: 3000, url:"https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg"},
      {name: "Runner",price: 2500, url: "https://image.shutterstock.com/image-photo/pair-pink-sport-shoes-on-260nw-228691018.jpg"},
      {name:"Hoka Runner",price: 3500,url:"https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/01/268453-Best_Running_Shoes_for_Flat_Feet-1296x728-header-1296x728.jpg?w=1155&h=1528"},
      {name: "Versace Fashion" ,price: 8000, url:"https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwbaaee81d/original/90_DSU8094-D15TCG_D4D_20_TrigrecaTrainers-TrigrecaSneakers-versace-online-store_4_3.jpg?sw=450&sh=632&sm=fit&sfrm=jpg"},
      {name: "FF Blast",price: 7500, url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-running-shoes-2021-1609848671.png?crop=0.502xw:1.00xh;0.498xw,0&resize=640:*"},
      {name:"All Birds Black",price: 5000,url:"https://images-na.ssl-images-amazon.com/images/I/41Leu3gBUFL.jpg"},
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
            <Link to="./addproduct" className="mylink"><div className="myaddbtn" onClick={this.addProduct}>+</div></Link>
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
