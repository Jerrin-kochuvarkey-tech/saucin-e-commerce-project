import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Footer from './components/Footer';
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/signup" element={<Registration></Registration>}></Route>
    <Route path="/cart" element={<Cart></Cart>}></Route>
    <Route path="/wishlist" element={<Wishlist></Wishlist>}></Route>
    </Routes>
    <Footer></Footer>
    </>

  )
}

export default App
