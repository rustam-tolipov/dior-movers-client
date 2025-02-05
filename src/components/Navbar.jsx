import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  FaAngleDown,
  FaBars,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaXmark,
} from "react-icons/fa6";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  const handleToggleMenu = () => setOpenMenu(!openMenu);
  const handleToggleServices = () => setOpenServices(!openServices);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
  ];

  const services = [
    {
      img: "/assets/cargo-mover.png",
      title: "Moving Services",
      desc: "Experience a seamless relocation with our expert movers. We handle everything from packing to transportation, ensuring your move is stress-free and efficient.",
      to: "/services/moving",
    },
    {
      img: "/assets/broom.png",
      title: "Cleaning Services",
      desc: "Enjoy a pristine environment with our comprehensive cleaning services. Our team provides thorough and efficient cleaning for both residential and commercial spaces.",
      to: "/services/cleaning",
    },
    {
      img: "/assets/technician.png",
      title: "Handyman Services",
      desc: "Keep your property in top condition with our reliable handyman services. From minor repairs to furniture assembly, our skilled professionals are here to help.",
      to: "/services/handyman",
    },
  ];

  const socialLinks = [
    { href: "https://www.instagram.com", icon: <FaInstagram /> },
    { href: "https://www.telegram.com", icon: <FaTelegram /> },
    { href: "https://www.facebook.com", icon: <FaFacebook /> },
  ];

  return (
    <div className="flex h-fit w-full items-center justify-center bg-red-600">
      <div className="container flex h-fit w-full flex-row items-center justify-between p-4 md:px-0 md:py-6">
        <Link to="/" className="cursor-pointer">
          <img
            src="/logo.svg"
            alt="Logo"
            className="aspect-auto h-12 w-fit max-w-[6rem]"
          />
        </Link>
        <ul className="flex items-center gap-2 md:gap-3">
          {["uzb-flag.png", "rus-flag.png", "usa-flag.png"].map(
            (flag, index) => (
              <li
                key={index}
                className="flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 transition-all duration-200 hover:scale-110 md:h-10 md:w-10"
              >
                <img
                  src={`/assets/${flag}`}
                  alt="Language image"
                  className="aspect-square size-auto"
                />
              </li>
            ),
          )}
        </ul>
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="text-lg tracking-wide text-red-50 underline-offset-8 transition-all duration-200 hover:text-white hover:underline active:scale-110"
            >
              {link.label}
            </Link>
          ))}
          <button
            onMouseEnter={handleToggleServices}
            onClick={handleToggleServices}
            className="flex items-center gap-1 text-lg tracking-wide text-red-50 underline-offset-8 transition-all duration-200 hover:text-white hover:underline active:scale-110"
          >
            Services <FaAngleDown className="text-xl" />
          </button>
          <motion.div
            initial={{
              opacity: 0.5,
              y: 30,
              outline: "none",
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            whileHover={{
              scale: 1.05,
              outline: "3px solid #fff",
            }}
            whileTap={{
              scale: 0.95,
              outline: "3px solid #f00",
            }}
            transition={{
              duration: 0.1,
            }}
            className="rounded-full bg-gray-950 px-8 py-2 text-lg font-medium text-red-50"
          >
            <Link to="/contact">Get a Quote</Link>
          </motion.div>
        </nav>
        {/* Services Dropdown */}
        <AnimatePresence>
          {openServices && (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              className="absolute left-0 top-28 z-50 hidden h-fit w-full items-center justify-center px-12 md:flex"
            >
              <div className="min-h-50 flex w-full flex-row justify-around gap-8 overflow-hidden rounded-md bg-white p-8 py-12 shadow-2xl">
                {services.map((service, index) => (
                  <div key={index} className="flex h-full w-full gap-4">
                    <span className="h-fit w-14">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="h-full w-full"
                      />
                    </span>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-md font-semibold text-gray-800">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-600">{service.desc}</p>
                      <Link
                        to={service.to}
                        className="py-4 text-sm font-medium text-blue-500"
                        onClick={handleToggleServices}
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <FaBars
          className={`text-2xl lg:hidden ${openMenu && "invisible"}`}
          onClick={handleToggleMenu}
        />
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ x: -150 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.1 }}
              exit={{ x: -300 }}
              className="fixed left-0 top-0 z-50 h-screen w-dvw"
            >
              <div className="flex h-full w-9/12 flex-col gap-12 overflow-scroll overflow-y-scroll rounded-e-md bg-slate-950 px-6 pt-6">
                <h2 className="text-2xl font-medium uppercase text-gray-100">
                  Dior Movers
                </h2>
                <ul className="flex flex-col gap-8">
                  {navLinks.map((link, index) => (
                    <li
                      key={index}
                      onClick={handleToggleMenu}
                      className="text-xl uppercase tracking-wider text-gray-100 transition-all active:scale-110"
                    >
                      <Link to={link.to}>{link.label}</Link>
                    </li>
                  ))}
                  <li className="flex flex-col gap-6 text-xl tracking-wider text-gray-100">
                    <button
                      onClick={handleToggleServices}
                      className="flex items-center gap-2 uppercase transition-all active:scale-110"
                    >
                      Services <FaAngleDown className="text-2xl" />
                    </button>
                    <AnimatePresence>
                      {openServices && (
                        <div className="flex flex-col gap-5 pl-6">
                          {services.map((service, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.05 * (index + 1) }}
                              exit={{ opacity: 0, x: -50 }}
                              className="text-base"
                              onClick={handleToggleMenu}
                            >
                              <Link to={service.to}>
                                - {service.title.split(" ")[0]}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </AnimatePresence>
                  </li>
                  <li onClick={handleToggleMenu} className="">
                    <motion.div
                      initial={{
                        opacity: 0.5,
                        y: 30,
                        outline: "none",
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      whileFocus={{
                        scale: 1.05,
                        outline: "3px solid #fff",
                      }}
                      whileTap={{
                        scale: 0.95,
                        outline: "3px solid #fff",
                      }}
                      transition={{
                        duration: 0.1,
                      }}
                      className="w-fit rounded-full bg-red-500 px-6 py-2 text-sm uppercase text-gray-100 transition-all active:scale-110"
                    >
                      <Link to="/contact">Contact Us</Link>
                    </motion.div>
                  </li>
                </ul>
                <div className="container mt-auto flex w-full items-end justify-between pb-6">
                  <div className="text-sm text-gray-100 lg:text-base">
                    © 2025 Dior Movers
                  </div>
                  <div className="flex items-center gap-2 md:gap-8">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="flex h-6 w-6 items-center justify-center fill-gray-100 hover:fill-red-500">
                          {link.icon}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <span
                onClick={handleToggleMenu}
                className="absolute right-6 top-7"
              >
                <motion.div
                  initial={{ opacity: 0, rotateZ: -90 }}
                  animate={{ opacity: 1, rotateZ: 0 }}
                  transition={{ delay: 0.1 }}
                  exit={{ opacity: 0, transition: { delay: 0 } }}
                  className="h-18 flex items-center justify-center rounded lg:hidden"
                >
                  <FaXmark className="rounded bg-black text-2xl text-white" />
                </motion.div>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
