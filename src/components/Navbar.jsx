import React, { useState} from 'react';
import {assets} from '../assets/assets';
import { useEffect } from 'react';


const Navbar = () => {

  const [ShowMobileMenu,setShowMobileMenu] = useState(false);

  useEffect(()=>{

    if(ShowMobileMenu){
      document.body.style.overflow ="hidden"

    }
    else {
      document.body.style.overflow = 'auto'
    }
    return ()=>{
      document.body.style.overflow = 'auto'
    };

  },[ShowMobileMenu])

  return (

    <div className="absolute top-0 left-0 w-full z-10 bg-transparent">
      <div className="flex items-center justify-between p-4">
        {/* Logo Section */}
        <img src={assets.logo} alt="Logo" className="h-10" />

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-7 text-white">
          <li>
            <a href="#Header" className="cursor-pointer hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="cursor-pointer hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#Projects" className="cursor-pointer hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">
              Testimonials
            </a>
          </li>
        </ul>

        {/* Sign-Up Button */}
        <button className="hidden md:block bg-white border border-white px-8 py-2 rounded-full text-black">
          Sign Up
        </button>
        <img onClick={()=> setShowMobileMenu(true)} src={assets.menu_icon} className =" md:hidden  w-7 cursor-pointer"alt="menu_btn" />
        </div>
      {/*-----------------Mobile Menu-------------*/}
      <div  className  = {`md:hidden ${ShowMobileMenu ? 'fixed  w-full':'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden font-medium bg-white transition-all`} >
          <div className = "flex justify-end p-6 cursor-pointer">
            <img  onClick={()=>setShowMobileMenu(false) }src={assets.cross_icon}className='w-6' alt="cross_icon"/>
          </div>
           <ul className='flex flex-col items-center gap-2 mt-2 px-5 text-lg'>
            <a  onClick={()=>setShowMobileMenu(false) } href ="#Header">Header</a>
            <a  onClick={()=>setShowMobileMenu(false) }href ="#About">About</a>
            <a  onClick={()=>setShowMobileMenu(false) } href ="#Projects">Projects</a>
            <a  onClick={()=>setShowMobileMenu(false) } href ="#Testimonials">Testimonials</a>
           </ul>

           </div>
      
    </div>
  );
};

export default Navbar;
