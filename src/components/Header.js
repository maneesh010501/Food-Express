import { useState } from 'react';
import express2 from '../../express2.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    // console.log("header render");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between shadow-lg">
            <div className="flex items-center p-2 m-2">
                <Link to="/"><img className="logo w-30 h-[80px] transition-all duration-200 hover:scale-110" src={express2} alt="" /></Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-2 m-2">
                    <li className="px-4">
                        Online Status : {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-4 hover:text-orange-500">
                        <Link to="/grocery" className='nav-link'>Grocery</Link>
                    </li>
                    <li className="px-4  hover:text-orange-500">
                        <Link to="/" className='nav-link'>Home</Link>
                    </li>
                    <li className="px-4  hover:text-orange-500">
                        <Link to="/about" className='nav-link'>About Us</Link>
                    </li>
                    <li className="px-4  hover:text-orange-500">
                        <Link to="/contact" className='nav-link'>Contact</Link>
                    </li>
                    <li className="px-4  hover:text-orange-500">
                        <Link to="/cart" className='nav-link'>Cart</Link>
                    </li>
                    <button className="login px-4  hover:text-red-500" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;