import React from "react";
import Navbar from "./Navbar";
import { motion } from "motion/react";

const Header = () => {
  return (
    <header
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      {/* Navbar */}
      <Navbar />

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
      >
        <h2 className="text-4xl font-bold mb-6">
          Explore homes that fit your dreams
        </h2>
        <div className="flex justify-center space-x-6 mt-16">
          <a
            href="#Projects"
            className="border border-white px-8 py-3 rounded hover:bg-white hover:text-black transition-colors"
            aria-label="View Projects"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="bg-blue-500 border border-blue-500 px-8 py-3 rounded hover:bg-blue-600 transition-colors"
            aria-label="Contact Us"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
