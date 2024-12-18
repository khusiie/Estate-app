import React from 'react';
import { assets } from '../assets/assets';
import { motion } from "motion/react";
const about = () => {
  return (
    <motion.div  
    initial={{ opacity: 0, x: 200 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}className='flex  flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 
    w-full overflow-hidden' id = 'About'>
      <h1 className='2xl sm:text-4xl font-bold mb-2'k> About<span className='underline underline-offset-4 decoration-1 under font-light'>Our brand</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'> Passoinate about Properties , Dedicated to our vision</p>
      <div className ='flex  flex-col  md:flex-row  items-center md:items-start md-gap-20'>
     <img src= { assets.brand_img} alt="" className='w-full  sm:w-1/2  max-w-lg'/> 

     <div className = 'flex flex-col items-center md:items-start  mt-10 text-grey-600'>
        <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28  pl-28' >
            <div className  ="text-2xl  font-medium  text-grey-800">
                <p>10+</p>
                <p>years of Excellence </p>
            </div> 
       
            <div className  ="text-2xl  font-medium  text-grey-800">
                <p>12+</p>
                <p>Project completed</p>
            </div>
            <div className  ="text-2xl  font-medium  text-grey-800">
                <p>20+</p>
                <p>Mn sq. Ft . Delivered</p>
            </div>
            <div className  ="text-2xl  font-medium  text-grey-800">
                <p>25+</p>
                <p>Ongoing Projects </p>
            </div>
        
        </div>

        <p className = " my-10 mx-w-lg  pl-28"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eligendi, ipsum soluta autem excepturi nostrum perferendis molestiae repellat consectetur alias  doloremque praesentium voluptates odio, voluptas esse sit quam harum aperiam?

        </p>
        <button  className='bg-blue-600 text-white px-8 py-2 ml-28'>learn more </button>
         </div>
      </div> 
    </motion.div>

  );
}

export default about;
