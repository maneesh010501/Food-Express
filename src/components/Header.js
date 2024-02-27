import { useContext, useState } from 'react';
import express2 from '../../express2.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    // console.log("header render");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);
    // console.log(loggedInUser);

    //subscribing to our store using a selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <div className="flex justify-between shadow-lg">
            <div className="flex items-center p-2 m-2">
                <Link to="/"><img className="logo w-30 h-[80px] transition-all duration-200 hover:scale-110" src={express2} alt="" /></Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-2 m-2 font-semibold text-gray-700">
                    <li className="px-4">
                        Online Status : {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-4 hover:text-orange-500">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4  hover:text-orange-500">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4  hover:text-orange-500">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4  hover:text-orange-500">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-4  hover:text-orange-500">
                        <Link to="/cart" className="font-bold">Cart ({cartItems.length} items)</Link>
                    </li>
                    <button className="login px-4  hover:text-red-500" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName}</button>
                    <li>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;