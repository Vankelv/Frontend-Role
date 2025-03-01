import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGitAlt } from "react-icons/fa";
import { BsChatSquareText, BsArrowCounterclockwise } from "react-icons/bs";
import { IoMdGitMerge } from "react-icons/io";
import { BsGlobe } from "react-icons/bs";
import {
  IoRefresh,
  IoGitCommit,
  IoBusinessOutline,
  IoRefreshCircleSharp,
} from "react-icons/io5";
import { RiShieldCheckLine } from "react-icons/ri";
import { PiBookBookmarkLight } from "react-icons/pi";
import { FaClockRotateLeft } from "react-icons/fa6";
const Body = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-3">
      {/* Main Title */}
      <div className="text-center mb-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:text-4xl leading-[1.2] text-base font-medium dark:text-white text-black"
        >
          Develop with your favorite tools <br />
          Launch globally, instantly{" "}
          <span className="inline-flex items-center">
            <BsGlobe size={20} />
          </span>{" "}
          Keep pushing
          <span className="inline-flex items-center">
            <IoMdGitMerge size={20} />
          </span>
        </motion.h2>
      </div>

      {/* Split Sections */}
      <div className="grid md:grid-cols-2 gap-20">
        {/* Git Deploy Section */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <FaGitAlt className="text-xl dark:text-white text-black" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Git-connected Deploys
            </span>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[28px] leading-tight font-medium dark:text-white text-black mb-3"
          >
            From localhost to https, in seconds.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[15px] text-gray-600 dark:text-gray-400"
          >
            Deploy from Git or your CLI.
          </motion.p>

          {/* Deployment Status */}
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-8 h-8 text-xs border border-green-500/20 bg-green-500/20 text-green-500 rounded-full">
              90
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Deployment Score
            </span>
          </div>

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-black rounded-xl p-6 font-mono text-[13px] text-white overflow-hidden mt-8"
          >
            <div className="opacity-80">
              <p>$ ~/vercel-site/ git push</p>
              <p>Enumerating objects: 3, done</p>
              <p>Counting objects: 100% (3/3), done</p>
              <p>Writing objects: 100% (3/3), 72 bytes</p>
              <p>Total 3 (delta 0), reused 0 (delta 0)</p>
              <p>To github.com:vercel/vercel-site.git</p>
              <p>2132b89..8</p>
            </div>
          </motion.div>
        </div>

        {/* Collaborative Section */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <BsChatSquareText className="text-xl dark:text-white text-black" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Collaborative pre-production
            </span>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[28px] leading-tight font-medium dark:text-white text-black mb-3"
          >
            Every deploy is remarkable.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[15px] text-gray-600 dark:text-gray-400"
          >
            Chat with your team on real, production-grade UI, not just designs.
          </motion.p>

          {/* Performance Status */}
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-8 h-8 text-xs bg-red-500/20 text-red-500 rounded-full">
              55
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Performance Score
            </span>
          </div>

          {/* Chat Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-black rounded-xl p-6 space-y-6 border dark:border-gray-800 mt-8 shadow-[0_0_30px_-10px_rgba(0,0,0,0.1)] dark:shadow-none"
          >
            <div className="flex items-start gap-4">
              <div className="bg-[#EBF5FF] dark:bg-[#0070F3]/10 rounded-xl p-3 max-w-[80%]">
                <p className="text-sm dark:text-white text-black">
                  Swapped out the Button for some variants we needed.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 justify-end">
              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-3">
                <p className="text-sm dark:text-white text-black">
                  How about this instead?
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#FFF1F1] dark:bg-[#FF0000]/10 rounded-xl p-3 max-w-[80%]">
                <p className="text-sm dark:text-white text-black">
                  I see it. Does this work with the brand headline @mention?
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 justify-end">
              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-3">
                <p className="text-sm dark:text-white text-black">
                  This looks great! ✨
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Analytics and Deployment Section */}
      <div className="mt-32">
        {/* Analytics */}
        <div
          className="relative gap-20 mb-32 min-h-[600px] bg-[url('/assets/analytics-large-light.avif')] dark:bg-[url('/assets/analytics-large-dark.avif')]"
          style={{
            backgroundSize: "95%",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Content */}
          <div className="relative space-y-4">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-4"
            >
              <svg
                className="w-4 h-4 dark:text-white text-black"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2V22M12 2L2 12M12 2L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Frontend Observability
              </span>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[28px] leading-tight font-medium dark:text-white text-black mb-3"
            >
              Privacy-friendly, lightweight Analytics.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[15px] text-gray-600 dark:text-gray-400"
            >
              Upgrade your post-launch workflow with actionable, real-time
              insights.
            </motion.p>
          </div>
        </div>

        {/* Deployment and Conformance Section */}
        <div className="grid lg:grid-cols-2 gap-8 mt-20">
          {/* Instant Rollbacks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="flex items-center gap-2 mb-4">
              <BsArrowCounterclockwise className="text-xl text-gray-400 dark:text-white " />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Instant Rollbacks
              </span>
            </div>
            <h3 className="text-3xl font-medium mb-2 text-gray-600 dark:text-white">
              Go ahead, deploy on Friday.{" "}
              <span className="text-gray-600 dark:text-gray-400">
                Instantly rollback to a working deployment.
              </span>
            </h3>

            {/* Deployment Cards with Connection */}
            <div className="relative mt-12">
              {/* First Deployment Card */}
              <div className="relative z-10 p-4 rounded-lg dark:bg-[#1C1C1C] border border-neutral-300 max-w-[460px]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-neutral-400">
                      vercel-site/jvlb4ynna
                    </span>
                    <span className="text-xs text-neutral-400">1d ago</span>
                  </div>
                  <span className="flex items-center justify-center w-8 h-8 text-xs bg-green-500/20 text-green-500 border border-[#45dec5] rounded-full">
                    90
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                  <IoGitCommit className="text-sm" />
                  <span>ba5f55f</span>
                  <span>Update bento box design</span>
                </div>
              </div>

              {/* Connection Line */}
              <div
                aria-hidden="true"
                className="absolute left-[40%] "
              >
                <svg
                  data-size="large"
                  fill="none"
                  height="152"
                  viewBox="0 0 117 152"
                  width="117"
                >
                  <path
                    d="M4 4L4 60C4 66.6274 9.37258 72 16 72H104C110.627 72 116 77.3726 116 84V152"
                    stroke="url(#paint0_linear_1364_100888)"
                    strokeWidth="2"
                  />
                  <path
                    d="M4 4L4 60C4 66.6274 9.37258 72 16 72H104C110.627 72 116 77.3726 116 84V152"
                    stroke="url(#paint1_linear_1364_100888)"
                    strokeWidth="2"
                  />
                  <g clipPath="url(#clip0_1364_100888)">
                    <path
                      clipRule="evenodd"
                      d="M4 0.5L8 7.5H0L4 0.5Z"
                      fill="#45DEC4"
                      fillRule="evenodd"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="paint0_linear_1364_100888"
                      x1="116"
                      x2="4"
                      y1="72"
                      y2="72"
                    >
                      <stop stopColor="#E5484D" />
                      <stop offset="0.5" stopColor="#FFC634" />
                      <stop offset="1" stopColor="#45DEC4" />
                    </linearGradient>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="paint1_linear_1364_100888"
                      x1="116"
                      x2="116"
                      y1="152"
                      y2="1.56712e-05"
                    >
                      <stop stopColor="#ffffff" />
                      <stop
                        offset="0.322368"
                        stopColor="#45DEC4"
                        stopOpacity="0"
                      />
                    </linearGradient>
                    <clipPath id="clip0_1364_100888">
                      <rect fill="white" height="8" width="8" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="absolute top-1/2 left-1/2 bg-gray-900 rounded-full transform -translate-x-1/2 p-2 border  border-gray-600 -translate-y-1/2">
                    <FaClockRotateLeft className=" text-neutral-600 dark:text-neutral-400" />
                  </div>
              </div>

              {/* Second Deployment Card */}
              <div className="relative z-10 mt-32 ml-32 p-4 rounded-lg bg-gray-100 dark:bg-[#1C1C1C] border border-neutral-300 border-dashed max-w-[460px]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-neutral-400">
                      vercel-site/gigi178pv
                    </span>
                    <span className="text-xs text-neutral-400">10m ago</span>
                  </div>
                  <span className="flex items-center justify-center w-8 h-8 text-xs bg-red-500/20 text-red-500 rounded-full">
                    55
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm  text-neutral-400">
                  <IoGitCommit className="text-sm" />
                  <span>bx012mm</span>
                  <span>Fix ESLint error on query</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Conformance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="flex items-center text-gray-600 gap-2 mb-4">
              <PiBookBookmarkLight className="text-xl" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Conformance
              </span>
            </div>
            <h3 className="lg:text-3xl text-base font-medium mb-2 text-gray-600 dark:text-white">
              Move fast, don't break things.{" "}
              <span className="text-gray-600 dark:text-gray-400">
                Keep quality high while maintaining velocity with Enterprise
                Monorepos.
              </span>
            </h3>

            {/* Conformance Stats */}
            <div className="mt-8 p-6 rounded-xl dark:bg-[#1C1C1C] border border-neutral-00">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-sm text-neutral-400">Conformance</div>
                <div className="text-sm text-neutral-400">Code Owners</div>
              </div>

              {/* Stats Grid */}
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 items-center p-3 rounded-lg dark:bg-[#141414]">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#45DEC5]"></div>
                    <span className="text-sm text-neutral-300">Excellent</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="relative w-5 h-5">
                        <svg
                          viewBox="0 0 100 100"
                          className="transform -rotate-90"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="currentColor"
                            strokeWidth="20"
                            fill="none"
                            className="text-[#45DEC5]/20"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="currentColor"
                            strokeWidth="20"
                            fill="none"
                            className="text-[#45DEC5]"
                            strokeDasharray={`${9.5 * 25.12} 251.2`}
                          />
                        </svg>
                      </div>
                      <span className="text-neutral-300">9.5</span>
                    </div>
                    <div className="flex -space-x-1">
                      <div className="w-6 h-6 rounded-full bg-neutral-700"></div>
                      <div className="w-6 h-6 rounded-full bg-neutral-600"></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 items-center p-3 rounded-lg dark:bg-[#141414]">
                  <span className="text-sm text-neutral-300">Total Issues</span>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-300">34</span>
                    <div className="flex -space-x-1">
                      <div className="w-6 h-6 rounded-full bg-neutral-700"></div>
                      <div className="w-6 h-6 rounded-full bg-neutral-600"></div>
                      <div className="w-6 h-6 rounded-full bg-neutral-500"></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 items-center p-3 rounded-lg dark:bg-[#141414]">
                  <span className="text-sm text-neutral-300">Major Issues</span>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-300">12</span>
                    <div className="flex -space-x-1">
                      <div className="w-6 h-6 rounded-full bg-neutral-700"></div>
                      <div className="w-6 h-6 rounded-full bg-neutral-600"></div>
                      <div className="w-6 h-6 rounded-full bg-neutral-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scale Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="inline-flex flex-wrap justify-center text-black items-center gap-3 text-xl font-medium dark:text-white">
            <span>Scale your</span>
            <div className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800">
              <IoBusinessOutline size={15} />
              <span className="text-sm">Enterprise</span>
            </div>
            <span>without compromising</span>
            <div className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800">
              <RiShieldCheckLine size={15} />
              <span className="text-sm">Security</span>
            </div>
          </h2>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 flex lg:flex-row flex-col items-center justify-between gap-8"
        >
          <div className="flex-1">
            <h3 className="lg:text-2xl text-base font-medium text-black dark:text-white">
              Ready to deploy?{" "}
              <span className="text-gray-600 dark:text-gray-400">
                Start building with a free account.
              </span>
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Speak to an expert for your{" "}
              <span className="text-blue-500">Pro</span> or{" "}
              <span className="text-purple-500">Enterprise</span> needs.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <button className="px-6 py-2.5 bg-white text-black dark:bg-white dark:text-black rounded-full hover:bg-neutral-100 transition-all">
                Start Deploying
              </button>
              <button className="px-6 py-2.5 bg-black text-white border border-neutral-800 rounded-full hover:bg-neutral-900 transition-all">
                Talk to an Expert
              </button>
            </div>
          </div>
          <div className="flex-none w-full lg:w-1/2">
            <div className="lg:text-right text-center w-full">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="text-black dark:text-white">Explore Vercel Enterprise </span> with an interactive product tour, trial, or a personalized demo.
              </p>
              <button className="mt-4 px-6 py-2.5 bg-black text-white border border-neutral-800 rounded-full hover:bg-neutral-900 transition-all">
                Explore Enterprise
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Body;
