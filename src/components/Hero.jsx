import React from "react";
import { motion } from "framer-motion";
import { IoTriangle } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="lg:min-h-screen min-h-[70vh] flex flex-col  items-center justify-center px-4 lg:py-20 sm:py-10">
      <div className="relative w-full max-w-7xl  aspect-[1200/800] lg:h-full h-[70vh] mx-auto overflow-hidden rounded-lg dark:bg-black/80">
      
        {/* Gradient Background */}
        <div
          className="absolute inset-0 bg-[url('/assets/items/bgWhite.png')] dark:bg-[url('/assets/items/nocodes/vercelbg.png')]"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col  items-center justify-center h-full px-4 sm:px-6 md:px-8"
          >
            <div className="max-w-4xl mx-auto text-center lg:mb-0 mb-[55%] space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-black dark:text-white leading-[1.2]">
                Your complete platform for the web.
              </h1>
              <p className="text-sm sm:text-base dark:text-neutral-400 text-gray-800 mb-4 sm:mb-6 max-w-2xl mx-auto">
                Vercel provides the developer tools and cloud infrastructure to
                build, scale, and secure a faster, more personalized web.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 dark:bg-white dark:text-black text-white bg-black rounded-full font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all flex items-center justify-center gap-2">
                  <IoTriangle className="text-lg" />
                  Start Deploying
                </button>
                <button className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 dark:bg-black bg-white text-black dark:text-white border border-neutral-200 dark:border-neutral-800 rounded-full font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
                  Get a Demo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
     
    </div>
  );
};

export default Hero;
