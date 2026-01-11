import React from "react";
import { motion } from "framer-motion";

export default function BouncingText() {
  const name = "Ray";
  const letters = name.split("");

  // Total animation time for the name
  const duration = 1.0;
  const stagger = duration / letters.length;

  return (
    <div className="relative inline-block pb-2">
      <h1 className="text-5xl md:text-7xl font-bold text-white flex items-center">
        {/* Static Text */}
        <span className="mr-3 md:mr-5">Hi, I am</span>

        {/* Bouncing Name */}
        <div className="flex">
          {letters.map((char, index) => {
            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: index * stagger,
                  type: "spring",
                  stiffness: 250,
                  damping: 15,
                  mass: 0.5,
                }}
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent origin-bottom"
              >
                {char}
              </motion.span>
            );
          })}
        </div>
      </h1>
    </div>
  );
}
