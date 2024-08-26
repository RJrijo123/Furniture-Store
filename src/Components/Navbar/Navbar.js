import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/MeubelHouseLogos05.png';
import cart_icon from '../Assets/Vector1.png';
import love from '../Assets/love.png';
import search from '../Assets/Vector.png';
import dropDownIcon from '../Assets/drop5.png';
import { ShopContext } from '../../Context/ShopContext';

function Navbar() {
    const [menu, setMenu] = useState("");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();
    const location = useLocation();  // Get the current location

    // Update the menu state based on the current path
    React.useEffect(() => {
        const path = location.pathname;
        if (path === '/') setMenu('home');
        else if (path === '/shop') setMenu('shop');
        else if (path === '/about') setMenu('about');
        else if (path === '/contact') setMenu('contact');
    }, [location]); // Depend on location to update on route changes

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    };

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="Logo" />
                <p>Furniro</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={dropDownIcon} alt="Dropdown" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => setMenu("home")}>
                    <Link to='/'>Home</Link>
                    {menu === "home" ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu("shop")}>
                    <Link to='/shop'>Shop</Link>
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu("about")}>
                    <Link to='/about'>About</Link>
                    {menu === "about" ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu("contact")}>
                    <Link to='/contact'>Contact</Link>
                    {menu === "contact" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                {/* Uncomment for authentication */}
                {/* {localStorage.getItem('auth-token')
                ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/'); }}>Logout</button>
                : <Link to='/login'><button>Login</button></Link>} */}
                <Link className='search'><img src={search} alt="Search" /></Link>
                <Link className='like'><img src={love} alt="Wishlist" /></Link>
                <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
