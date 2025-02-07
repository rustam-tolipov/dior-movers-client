import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const CoverImage = () => {
  const location = useLocation();

  const coverImageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      {location.pathname.includes("/cleaning") && (
        <motion.div
          variants={coverImageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="cleaning absolute left-0 top-0 z-0 h-full w-full"
        ></motion.div>
      )}
      {location.pathname.includes("/moving") && (
        <motion.div
          variants={coverImageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="moving absolute left-0 top-0 z-0 h-full w-full"
        ></motion.div>
      )}
      {location.pathname.includes("/handyman") && (
        <motion.div
          variants={coverImageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="handyman absolute left-0 top-0 z-0 h-full w-full"
        ></motion.div>
      )}
      {location.pathname.includes("/about") && (
        <motion.div
          variants={coverImageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="about absolute left-0 top-0 z-0 h-full w-full"
        ></motion.div>
      )}
      {location.pathname.includes("/contact") && (
        <motion.div
          variants={coverImageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="about absolute left-0 top-0 z-0 h-full w-full"
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default CoverImage;
