import React,{ useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

import { assets } from '../../assets/frontend_assets/assets'


const Navbar = ({setShowLogin}) => {

  const[menu,setMenu]=useState("home");
  return (
    <div className='navbar'>
      <Link to='/?'><img src={assets.logo} className='logo'/></Link>
      <ul className='navbar-menu'>
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("menu")}className={menu==="menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""}>Contact-us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon}/>
        <div className='navbar-serch-icon'>
            <Link to='/cart'><img src={assets.basket_icon}/></Link>
            <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>

    </div>
  )
}

export default Navbar
