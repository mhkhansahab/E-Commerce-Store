import {Component} from "react";
import './../Styles/home.css';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "./../Assets/banner1.jpg";
import banner2 from "./../Assets/banner2.jpg";
import banner3 from "./../Assets/banner3.jpg";
import sale from "./../Assets/sale.png";
import DeliveryIcon from "./../Assets/delivery.png";
import CareIcon from "./../Assets/care.png";
import ArrivalIcon from "./../Assets/arrival.png";

class Home extends Component{
  render(){
    return(
      <div className="mainHome">
      <Carousel fade>
        <Carousel.Item>
          <img
          className="d-block w-100 carouselImg"
          src={banner1}
          alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
          className="d-block w-100 carouselImg"
          src={banner2}
          alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
          className="d-block w-100 carouselImg"
          src={banner3}
          alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
       <div className="block">
         <span className="divider"></span>
         <span className="myTitles">Everything Under</span>
         <span className="divider"></span>
       </div>
       <div className="block homeCards">
        <span className="homeCard">Rs. 999</span>
        <span className="homeCard">Rs. 1499</span>
        <span className="homeCard">Rs. 1999</span>
       </div>
       <div className="block">
         <span className="divider"></span>
         <span className="myTitles">Why Shop With Us</span>
         <span className="divider"></span>
       </div>
       <div className="homeCards mainIconContainer">
         <span className="iconContainer">
           <img src={DeliveryIcon} className="icon" alt="Home Icon"></img>
           <span>Speedy Delivery</span>
         </span>
         <span className="iconContainer">
           <img  src={CareIcon} className="icon" alt="Home Icon"></img>
           <span>Best Customer Service</span>
         </span>
         <span className="iconContainer">
           <img src={ArrivalIcon} className="icon" alt="Home Icon"></img>
           <span>New Deals Every Friday</span>
         </span>
       </div>
       <div className="block">
         <span className="divider"></span>
         <span className="myTitles">Red Hot Deals</span>
         <span className="divider"></span>
       </div>
       <div><img src = {sale} alt="Deal/Sale" className="saleImg"></img></div>
       <footer></footer>
      </div>
    );
  }
}
export default Home;
