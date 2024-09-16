import React from "react";
import { Link } from "react-router-dom";
import CompactHeader from "./compactHeader";

const Header = () => {
  const navItems = [
    { name: "HOME", to: "/" },
    { name: "SERVICE", to: "/service" },
    { name: "CASE STUDY", to: "/case-study" },
    { name: "EVENTS", to: "/events" },
    { name: "BLOG", to: "/blog" },
    { name: "CONTACT", to: "/contact" },
  ];

  return (
    <>
      <header className="bg-black text-white lg-down:hidden block">
        {/* Top Section - Logo and Language Selector */}
        <div className="flex justify-between items-center px-6 py-2">
          {/* Language Selector */}
          <div className="flex items-center space-x-3">
            <img
              src="/us_flag.png"
              alt="US Flag"
              className="h-5 w-5 rounded-full"
            />
            <span className="text-sm">ENG</span>
          </div>
          <nav>
            <ul className="flex justify-center space-x-8 py-3 text-sm font-montserrat">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  <Link to={item.to} className="hover:text-primary-orange">
                    {item.name}
                    {item.name === "SERVICE" && " ▾"}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Logo */}
            <img
              src="/profit-assurance-logo.png"
              alt="Logo"
              className="h-12 w-auto"
            />
          </div>
        </div>
      </header>
      <div className="hidden lg-down:block">
        <CompactHeader />
      </div>
    </>
  );
};

export default Header;
