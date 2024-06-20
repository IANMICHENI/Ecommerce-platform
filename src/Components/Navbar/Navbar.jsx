import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {
    const [menu, setMenu] = useState(""); // State for active menu item

    return (
        <div className="Navbar">
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => setMenu("shop")}>
                    <Link  style = {{textDecoration:'none'}}to='/'>Shop</Link>
                    {menu === "shop" && <hr />}
                </li>
                <li onClick={() => setMenu("mens")}>
                    <Link style = {{textDecoration:'none'}} to='/mens'>Men</Link>
                    {menu === "mens" && <hr />}
                </li>
                <li onClick={() => setMenu("women")}>
                    <Link style = {{textDecoration:'none'}} to='/womens'>Women</Link>
                    {menu === "women" && <hr />}
                </li>
                <li onClick={() => setMenu("kids")}>
                    <Link  style = {{textDecoration:'none'}} to='/kids'>Kids</Link>
                    {menu === "kids" && <hr />}
                </li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_icon} alt="Cart" />
                <div className="nav-cart-count"></div>
            </div>
        </div>
    );
}

export default Navbar;
