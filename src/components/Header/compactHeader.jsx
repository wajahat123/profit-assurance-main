import React from "react";
import { Menu } from "@carbon/icons-react";

const CompactHeader = ({ toggleNavSidebar }) => {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-black text-white">
      {/* Left Section: Menu Icon */}
      <div className="flex items-center">
        <div className="text-white p-3">
          <Menu size={24} onClick={toggleNavSidebar} />
        </div>
      </div>

      {/* Right Section: Logo and Language */}
      <div className="flex items-center gap-3">
        {/* Logo */}
        <img
          src={`${process.env.PUBLIC_URL}/profit-assurance-logo.png`}
          alt="Profit Assurance Logo"
          className="object-contain h-8" // Adjust height based on design
        />
        
        {/* Language Section */}
        <div className="flex items-center gap-1">
          <img
            src="/us_flag.png"
            alt="US Flag"
            className="h-5 w-5 rounded-full"
          />
          <span className="text-sm">ENG</span>
        </div>
      </div>
    </div>
  );
};

export default CompactHeader;
