import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { IoChevronDown } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-20">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          {/* Products Column */}
          <div>
            <h3 className="font-medium mb-4 text-black dark:text-white">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">AI</a></li>
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Enterprise</a></li>
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Fluid Compute</a></li>
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Next.js</a></li>
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Observability</a></li>
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Previews</a></li>
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Rendering</a></li>
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Security</a></li>
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Turbo</a></li>
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">v0</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-medium mb-4 text-black dark:text-white">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white flex items-center gap-1">Community <span className="text-[10px] bg-neutral-100 dark:bg-neutral-800 px-1 rounded">Ω</span></a></li>
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Docs</a></li>
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Guides</a></li>
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Help</a></li>
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Integrations</a></li>
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Resources</a></li>
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Solution Partners</a></li>
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Templates</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-medium mb-4 text-black dark:text-white">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">About</a></li>
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Blog</a></li>
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Careers</a></li>
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Changelog</a></li>
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Customers</a></li>
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Partners</a></li>
              <li><a href="#" className="text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">Privacy Policy</a></li>
              <li>
                <button className="flex items-center gap-1 text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
                  Legal
                  <IoChevronDown className="text-[13px]" />
                </button>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="font-medium mb-4 text-black dark:text-white">Social</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center gap-2 text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
                  <FaGithub className="text-base" />
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
                  <FaLinkedin className="text-base" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
                  <FaTwitter className="text-base" />
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-[13px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
                  <FaYoutube className="text-base" />
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* System Status */}
        <div className="mt-12 flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#0070F3] rounded-full"></div>
          <span className="text-[13px] text-neutral-600 dark:text-neutral-400">All systems normal</span>
          <div className="ml-auto flex items-center gap-4">
            <button className="w-5 h-5 flex items-center justify-center rounded bg-neutral-100 dark:bg-neutral-800 text-[11px] text-neutral-600 dark:text-neutral-400">⌘</button>
            <button className="w-5 h-5 flex items-center justify-center rounded bg-neutral-100 dark:bg-neutral-800 text-[11px] text-neutral-600 dark:text-neutral-400">K</button>
            <button className="w-5 h-5 flex items-center justify-center rounded bg-neutral-100 dark:bg-neutral-800 text-[11px] text-neutral-600 dark:text-neutral-400">▲</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;