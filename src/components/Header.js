import { useState } from 'react';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    console.log("header render");

    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/"><img className="logo" src={logo} alt="" /></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/" className='nav-link'>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className='nav-link'>About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" className='nav-link'>Contact</Link>
                    </li>
                    <li>
                        <Link to="/cart" className='nav-link'>Cart</Link>
                    </li>
                    <button className="login" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;