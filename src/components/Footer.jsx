/* eslint-disable react/prop-types */
import React from "react";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const FooterLinkSection = ({ title, links }) => (
  <div className="h-full w-full">
    <div className="w-fit md:ml-auto">
      <h4 className="pb-3 text-base font-medium lg:text-lg">{title}</h4>
      <ul className="flex flex-col gap-2">
        {links.map((link, index) => (
          <li key={index} className="text-sm">
            {link}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const socialLinks = [
  { href: "https://www.instagram.com", icon: <FaInstagram /> },
  { href: "https://www.telegram.com", icon: <FaTelegram /> },
  { href: "https://www.facebook.com", icon: <FaFacebook /> },
];

const Footer = () => (
  <footer className="flex h-fit w-full flex-col items-center px-4">
    <div className="container flex w-full flex-col justify-between py-8 md:flex-row md:py-0">
      <div className="flex flex-col gap-2 md:w-2/6">
        <h3 className="text-lg font-semibold text-gray-900 lg:text-xl">
          Dior Movers
        </h3>
        <p className="text-left text-sm text-gray-600 lg:text-base">
          Ducimus suscipit inventore non voluptas accusantium deleniti, corrupti
          impedit adipisci, maiores hic minima tenetur unde aliquam voluptate!
          Non, facilis accusamus?
        </p>
        <button className="mb-6 mt-6 w-fit rounded-full bg-gray-950 px-3 py-1 text-sm font-medium text-gray-100 transition-all duration-200 hover:bg-red-800 active:scale-95 lg:mt-8 lg:px-6 lg:py-2 lg:text-base">
          Contact Us
        </button>
      </div>
      <div className="flex h-full flex-col gap-8 md:w-7/12 md:flex-row md:gap-0 lg:w-3/6">
        <FooterLinkSection
          title="Help and services"
          links={["How does it work", "FAQS", "Contact"]}
        />
        <FooterLinkSection
          title="To explore"
          links={["Moving", "Cleaning", "Handyman"]}
        />
        <FooterLinkSection title="About us" links={["Info", "Timeline"]} />
      </div>
    </div>
    <span className="h-[1px] w-full bg-gray-100"></span>
    <div className="container flex w-full items-end justify-between py-2">
      <div className="text-sm lg:text-base">© 2025 Dior Movers</div>
      <div className="flex items-center gap-4 md:gap-8">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex h-6 w-6 items-center justify-center hover:fill-red-500">
              {link.icon}
            </span>
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
