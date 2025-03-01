import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import vercelLogo from "../../assets/vercel-logo.svg";
import {
  RiSparklingLine,
  RiShoppingBag3Line,
  RiLineChartLine,
  RiLayoutGridLine,
  RiWindowLine,
  RiSettings4Line,
  RiPencilRuler2Line,
  RiCloseLine,
  RiArrowRightSLine,
  RiComputerLine,
  RiMoonLine,
  RiSunLine,
} from "react-icons/ri";
import { HiBars2 } from "react-icons/hi2";

const Header = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const [theme, setTheme] = useState("system"); // 'light', 'dark', 'system'
  const [onscroll, setOnscroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setOnscroll(true);
      } else {
        setOnscroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navigation = [
    {
      name: "Products",
      href: "#",
      submenu: [
        {
          title: "Tools",
          items: [
            {
              name: "Resource Center",
              description: "Today's best practices",
              href: "#",
            },
            {
              name: "Marketplace",
              description: "Extend and automate workflows",
              href: "#",
            },
            {
              name: "Templates",
              description: "Jumpstart app development",
              href: "#",
            },
            { name: "Guides", description: "Find help quickly", href: "#" },
            {
              name: "Partner Finder",
              description: "Get help from solution partners",
              href: "#",
            },
          ],
        },
      ],
    },
    {
      name: "Solutions",
      href: "#",
      submenu: [
        {
          title: "Use Cases",
          items: [
            {
              name: "AI Apps",
              description: "Deploy at the speed of AI",
              href: "#",
              icon: RiSparklingLine,
            },
            {
              name: "Composable Commerce",
              description: "Power storefronts that convert",
              href: "#",
              icon: RiShoppingBag3Line,
            },
            {
              name: "Marketing Sites",
              description: "Launch campaigns fast",
              href: "#",
              icon: RiLineChartLine,
            },
            {
              name: "Multi-tenant Platforms",
              description: "Scale apps with one codebase",
              href: "#",
              icon: RiLayoutGridLine,
            },
            {
              name: "Web Apps",
              description: "Ship features, not infrastructure",
              href: "#",
              icon: RiWindowLine,
            },
          ],
        },
        {
          title: "Users",
          items: [
            {
              name: "Platform Engineers",
              description: "Automate away repetition",
              href: "#",
              icon: RiSettings4Line,
            },
            {
              name: "Design Engineers",
              description: "Deploy for every idea",
              href: "#",
              icon: RiPencilRuler2Line,
            },
          ],
        },
      ],
    },
    {
      name: "Resources",
      href: "#",
      submenu: [
        {
          title: "Company",
          items: [
            {
              name: "Customers",
              description: "Trusted by the best teams",
              href: "#",
            },
            {
              name: "Blog",
              description: "The latest posts and changes",
              href: "#",
            },
            { name: "Changelog", description: "See what shipped", href: "#" },
            { name: "Press", description: "Read the latest news", href: "#" },
          ],
        },
      ],
    },
    { name: "Enterprise", href: "#" },
    { name: "Docs", href: "#" },
    { name: "Pricing", href: "#" },
  ];

  const handleMouseEnter = (name) => {
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileActiveDropdown(null);
  };

  const toggleMobileDropdown = (name) => {
    setMobileActiveDropdown(mobileActiveDropdown === name ? null : name);
  };

  return (
    <header className={`fixed w-full z-50 transition-colors duration-200 ${onscroll ? 'bg-white dark:bg-black border-b dark:border-[#333333] border-gray-100' : 'bg-transparent'}`}>
      <nav
        className="mx-auto py-4 flex container items-center justify-between px-6"
        aria-label="Global"
      >
        <div className="flex flex-row items-center gap-6">
          <Link to="/" className="p-1">
            <span className="sr-only">Vercel</span>
            <img
              src={vercelLogo}
              alt="Vercel"
              className="h-6 w-auto dark:invert"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.href}
                  className="text-base font-normal text-[#888888] dark:text-white transition-colors"
                >
                  {item.name}
                </a>
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute left-0 top-full dark:text-white text-black pt-4 w-[520px]">
                    <div className="dark:bg-black bg-white border border-gray-200 dark:border-[#333333] rounded-xl p-8 shadow-xl">
                      <div className="grid grid-cols-2 gap-x-10">
                        {item.submenu.map((section) => (
                          <div key={section.title} className="space-y-6">
                            <h3 className="text-[#888888] dark:text-white text-base font-normal">
                              {section.title}
                            </h3>
                            <div className="space-y-5">
                              {section.items.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="flex items-start group"
                                >
                                  {subItem.icon && (
                                    <div className="flex-shrink-0 h-10 w-10 rounded border border-[#333333] dark:border-gray-500 mr-4 p-2.5 text-black dark:text-white bg-transparent hover:bg-black dark:group-hover:bg-white hover:text-white dark:group-hover:text-gray-600 group-hover:border-white transition-all duration-200">
                                      <subItem.icon />
                                    </div>
                                  )}
                                  <div>
                                    <div className="text-[15px] font-medium dark:text-white dark:group-hover:text-white transition-colors">
                                      {subItem.name}
                                    </div>
                                    <div className="text-[13px] mt-1 dark:text-[#888888] group-hover:text-[#999999] transition-colors">
                                      {subItem.description}
                                    </div>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-x-5">
          <Link
            to="/login"
            className="text-sm border border-gray-200 dark:border-[#333333] px-4 py-1.5 rounded-md text-black dark:text-white hover:border-[#33333] transition-all duration-200"
          >
            Log In
          </Link>
          <Link
            to="/contact"
            className="text-sm border border-gray-200 dark:border-[#333333] px-4 py-1.5 rounded-md text-black dark:text-white hover:border-[#33333] transition-all duration-200"
          >
            Contact
          </Link>
          <Link
            to="/signup"
            className="text-sm dark:bg-white dark:text-black bg-gray-800 hover:bg-gray-700 text-white  px-4 py-1.5 rounded-md transition-all duration-200 font-medium"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden text-black dark:text-white p-2 -mr-2 rounded-full border dark:border-gray-600  border-gray-300"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <RiCloseLine className="h-6 w-6" />
          ) : (
            <HiBars2 className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[57px] dark:bg-black bg-white text-black dark:text-white z-50 overflow-y-auto">
            <div className="flex flex-col p-6 space-y-6">
              {/* Mobile Sign Up and Log In Buttons */}
              <Link
                to="/signup"
                className="w-full dark:bg-white border border-[#333333] bg-black py-3 hover:bg-gray-700 dark:text-black px-4 text-white rounded-md transition-all duration-200 font-medium text-center text-sm"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="w-full border border-[#333333] text-black dark:text-white px-4 py-3 rounded-md transition-all duration-200 text-center text-sm"
              >
                Log In
              </Link>

              {/* Mobile Navigation Links */}
              <div className="space-y-4 pt-4">
                {navigation.map((item) => (
                  <div
                    key={item.name}
                    className=" pb-4"
                  >
                    <button
                      className="w-full flex items-center justify-between text-[15px] text-black dark:text-white"
                      onClick={() => toggleMobileDropdown(item.name)}
                    >
                      {item.name}
                      <RiArrowRightSLine
                        className={`h-5 w-5 transition-transform duration-200 ${
                          mobileActiveDropdown === item.name ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {mobileActiveDropdown === item.name && item.submenu && (
                      <div className="mt-4 space-y-4">
                        {item.submenu.map((section) => (
                          <div key={section.title} className="space-y-4">
                            <h3 className="text-[#888888] text-sm">
                              {section.title}
                            </h3>
                            <div className="space-y-4 pl-4">
                              {section.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="flex items-center text-[#888888] hover:text-white"
                                >
                                  <span className="text-sm">
                                    {subItem.name}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Theme Selector */}
              <div className="pt-4 border-t border-[#333333]">
                <div className="flex flex-col space-y-4">
                  <h3 className="text-[#888888] text-sm">Theme</h3>
                  <div className="flex items-center gap-2 pl-4">
                    <button
                      onClick={() => setTheme("system")}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm ${
                        theme === "system"
                          ? "bg-white text-black"
                          : "text-[#888888]"
                      }`}
                    >
                      <RiComputerLine className="h-4 w-4" />
                      System
                    </button>
                    <button
                      onClick={() => setTheme("light")}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm ${
                        theme === "light"
                          ? "bg-white text-black"
                          : "text-[#888888]"
                      }`}
                    >
                      <RiSunLine className="h-4 w-4" />
                      Light
                    </button>
                    <button
                      onClick={() => setTheme("dark")}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm ${
                        theme === "dark"
                          ? "bg-white text-black"
                          : "text-[#888888]"
                      }`}
                    >
                      <RiMoonLine className="h-4 w-4" />
                      Dark
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
