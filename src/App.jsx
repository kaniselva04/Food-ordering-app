import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import LoginPopup from './components/LoginPopup/LoginPopup'
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Payment from './pages/payment'; 
import OrderPlaced from './pages/OrderPlaced';
import Last from './pages/last';
const App = () => {
  const[showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
       <Navbar setShowLogin={setShowLogin}/>   
       <Routes>
       <Route path='/' element={<MainPage/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/SignUp' element={<SignUp/>}/>
        < Route path='/display' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/last" element={<Last/>} />
        <Route path='/cart/order' element={<PlaceOrder/>}/>
        <Route path="/" element={<Home />} /> {/* Your Home component */}
        <Route path="/payment" element={<Payment />} />
        <Route path="/OrderPlaced" element={<OrderPlaced />} />
        </Routes>   
    </div>
    </>
  )
}

export default App
