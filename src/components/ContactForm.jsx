import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+998",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Full Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.phone) {
      tempErrors.phone = "Phone Number is required";
    } else if (!/^\+998\d{9}$/.test(formData.phone)) {
      tempErrors.phone = "Phone Number must be a valid Uzbekistan number";
    }
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "+998",
        message: "",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-fit w-full max-w-96 flex-col gap-4 rounded-lg bg-gray-50 p-6 shadow-md xl:gap-6"
    >
      <div className="">
        <label className="block text-sm text-gray-700" htmlFor="name">
          Full Name
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-3 text-sm leading-tight text-gray-700 placeholder:font-light focus:outline-none"
          id="name"
          type="text"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
      </div>
      <div className="">
        <label className="block text-sm text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-3 text-sm leading-tight text-gray-700 placeholder:font-light focus:outline-none"
          id="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
      </div>
      <div className="">
        <label className="block text-sm text-gray-700" htmlFor="phone">
          Phone Number
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-3 text-sm leading-tight text-gray-700 placeholder:font-light focus:outline-none"
          id="phone"
          type="tel"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
      </div>
      <div className="">
        <label className="block text-sm text-gray-700" htmlFor="message">
          Message
        </label>
        <textarea
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-3 text-sm leading-tight text-gray-700 placeholder:font-light focus:outline-none"
          id="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && (
          <p className="text-xs text-red-500">{errors.message}</p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <AnimatePresence>
          {submitted ? (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="w-full text-center text-lg font-semibold text-green-600"
            >
              Thank you for contacting us!
            </motion.div>
          ) : (
            <motion.button
              exit={{ opacity: 0 }}
              className="focus:shadow-outline rounded-full bg-red-500 px-6 py-2 font-normal text-white hover:bg-blue-700 focus:outline-none md:px-8"
              type="submit"
            >
              Submit
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
};

export default ContactForm;
