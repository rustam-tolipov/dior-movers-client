import React from "react";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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

const Footer = () => {
  const { t } = useTranslation();

  const helpAndServicesLinks = [
    t("footer.links.howDoesItWork"),
    t("footer.links.faqs"),
    t("footer.links.contact"),
  ];

  const exploreLinks = [
    t("footer.links.moving"),
    t("footer.links.cleaning"),
    t("footer.links.handyman"),
  ];

  const aboutUsLinks = [t("footer.links.info"), t("footer.links.timeline")];

  return (
    <footer className="flex h-fit w-full flex-col items-center px-4">
      <div className="container flex w-full flex-col justify-between py-8 md:flex-row md:py-0">
        <div className="flex flex-col gap-2 md:w-2/6">
          <h3 className="text-lg font-semibold text-gray-900 lg:text-xl">
            Dior Movers
          </h3>
          <p className="text-left text-sm text-gray-600 lg:text-base">
            {t("footer.description")}
          </p>
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
            className="mb-6 mt-6 w-fit rounded-full bg-gray-950 px-3 py-1 text-sm font-medium text-gray-100 transition-all duration-200 hover:bg-red-800 active:scale-95 lg:mt-8 lg:px-6 lg:py-2 lg:text-base"
          >
            <Link to="/contact">{t("footer.bookMove")}</Link>
          </motion.div>
        </div>
        <div className="flex h-full flex-col gap-8 md:w-7/12 md:flex-row md:gap-0 lg:w-3/6">
          <FooterLinkSection
            title={t("footer.helpAndServices")}
            links={helpAndServicesLinks}
          />
          <FooterLinkSection
            title={t("footer.toExplore")}
            links={exploreLinks}
          />
          <FooterLinkSection title={t("footer.aboutUs")} links={aboutUsLinks} />
        </div>
      </div>
      <span className="h-[1px] w-full bg-gray-100"></span>
      <div className="container flex w-full items-end justify-between py-2">
        <div className="text-sm lg:text-base">© 2025 Dior Movers</div>
        <div className="flex items-center gap-4 md:gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-base hover:fill-red-500 md:text-lg"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
