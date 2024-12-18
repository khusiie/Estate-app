import React from 'react';
import About from './components/About'
import Header from'./components/header'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/contact';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

import './App.css'

function App() {
 

  return (
    <div className='w-full' overflow-hidden>
  < ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
   

  

    </div>
  )
}

export default App
