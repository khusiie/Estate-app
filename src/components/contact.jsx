import React, { useState } from "react";
import { toast } from "react-toastify";

import { motion } from "motion/react";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "b51986f5-8db7-4d17-a8b6-bd5842bbd7cf");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        toast.success( "Form Submitted Successfully")
        event.target.reset();
      } else {
        console.error("Error:", data);
        toast.error(data.message);
        setResult();
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <motion.div
    initial={{ opacity: 0, x: -200 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
     className="container text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="Contact">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        Contact
        <span className="underline underline-offset-4 decoration-1 font-light">
          With Us
        </span>
      </h1>

      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to make a move? Let's build your future together.
      </p>

      <form className="max-w-2xl mx-auto text-gray-600 pt-8" onSubmit={onSubmit}>
        <div className="flex flex-wrap -mx-4">
          {/* Your Name Field */}
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label className="block text-left font-medium mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded py-3 px-4"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Your Email Field */}
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label className="block text-left font-medium mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded py-3 px-4"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label className="block text-left font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full border border-gray-300 rounded py-3 px-4 h-48 resize-none"
            placeholder="Message"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-12 mb-10 rounded hover:bg-blue-700"
        >
         { result ? result: "send Message "}
        </button>
      </form>

      {/* Form Result */}
      {result && <p className="text-center text-gray-700 mt-4">{result}</p>}
    </motion.div>
  );
};

export default Contact;
