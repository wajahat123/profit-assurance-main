import React from 'react';

const Footer = () => {
  return (
    <div
      className="w-full h-auto bg-cover bg-center text-white py-16 px-8 bg-[#141414]"
      style={{ backgroundImage: `url('/footer-bg.png')` }} // Ensure the background image path is correct
    >

      {/* Top Section */}
      <div className="bg-primary-blue rounded-md py-8 lg-down:py-4 px-6 md:px-16 flex lg-down:flex-col  lg-down:justify-start items-center justify-between">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold lg-down:mb-2">Ready for a next project?</h3>
          <p className="text-lg lg-down:mb-4">Let's get started!</p>
        </div>
        <button className="bg-primary-orange text-white px-8 py-3 rounded font-bold shadow-md hover:bg-gray-800 transition duration-300">
          Contact us
        </button>
      </div>

      {/* Footer Links Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <img
            src="/profit-assurance-logo.png"
            alt="Logo"
            className="h-12 w-auto"
          />{" "}
          <p>© 2019</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Customers</h4>
          <ul>
            <li><a href="#" className="hover:underline">Buyer</a></li>
            <li><a href="#" className="hover:underline">Supplier</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul>
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Further Information</h4>
          <ul>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 py-4">
        <a href="#" className="text-xl text-purple-400 hover:text-white"><i className="fab fa-facebook"></i></a>
        <a href="#" className="text-xl text-purple-400 hover:text-white"><i className="fab fa-twitter"></i></a>
        <a href="#" className="text-xl text-purple-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
        <a href="#" className="text-xl text-purple-400 hover:text-white"><i className="fab fa-medium"></i></a>
        <a href="#" className="text-xl text-purple-400 hover:text-white"><i className="fab fa-telegram"></i></a>
      </div>
    </div>
  );
};

export default Footer;
