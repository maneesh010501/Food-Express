import { useState } from 'react';
import logo from '../../logo.png';

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    console.log("header render");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;