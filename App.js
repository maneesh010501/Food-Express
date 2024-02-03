import React from "react";
import ReactDOM from "react-dom/client";

/*
Header
- Logo
- Nav Items
Body 
- Search
- RestaurantContainer
  - RestaurantCard
Footer
- Copyright
- Links
- Address 
- Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://dcassetcdn.com/design_img/1889677/444768/444768_10393234_1889677_85203911_image.png" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cvbjhlksmv6lybzttb6z" alt="res-logo" />
      <h3>Maneesh Foods</h3>
      <h5>South Indian, North Indian, Asian</h5>
      <h5>4.4 stars</h5>
      <h5>30</h5>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);