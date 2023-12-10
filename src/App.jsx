import React from 'react'
import {Layout,Typography,Space} from "antd"
import Navbar from './components/Navbar';
import Footer from "./components/Footer"
import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <div className='app flex'>
      <div className="navbar"><Navbar></Navbar></div>
      <div className="main"><Outlet></Outlet></div>
      {/* <div className="footer"> <Footer></Footer></div> */}

    </div>
  );
}

export default App
