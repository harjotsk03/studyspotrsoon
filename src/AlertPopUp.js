import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FiBell } from "react-icons/fi";

const AlertPopUp = ({ icon, message, onClose, className }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Hide alert after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer
  }, [onClose]);

  // Framer Motion animation variants
  const alertVariants = {
    hidden: { opacity: 0, y: 50 }, // Start position (hidden)
    visible: { opacity: 1, y: 0 }, // Visible state (fully shown)
    exit: { opacity: 0, y: 50 }, // Exit position (fade out and slide up)
  };

  return (
    <motion.div
      key="alert"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={alertVariants}
      transition={{ duration: 0.5, ease: "easeInOut" }} // Animation speed
      className={`fixed flex flex-row items-center gap-2 bottom-5 ${
        className == null ? "right-5" : className
      }  bg-black text-white poppins-medium text-sm py-3 px-5 lg:text-md lg:py-4 lg:px-5 rounded-2xl drop-shadow-lg z-50`}
    >
      <span>{icon != null && icon} </span> {message}
    </motion.div>
  );
};

export default AlertPopUp;
