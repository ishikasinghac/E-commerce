import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
  // to change the red bar to men women shop
  const [menu, setMenu] = useState("shop");

  const {getTotalCartItems}=useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" height="80%"/>
        <p>Shopper</p>
      </div>
      <ul className="nav-menu">
        {/* link the navigation bar to router */}
        <li onClick={()=>setMenu("shop")}><Link style={{textDecoration: 'none'}} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("mens")}><Link style={{textDecoration: 'none'}} to="/mens">Men</Link> {menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("womens")}><Link style={{textDecoration: 'none'}} to="/womens">Women</Link> {menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("kids")}><Link style={{textDecoration: 'none'}} to="/kids">Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" height="80%"/></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
