import React from "react";

const PromoSection = () => {
  // const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1030);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsSmallScreen(window.innerWidth <= 1030);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
        <div
        className=" bg-[#1C1C1C] pl-24 lg-down:px-6 text-white flex lg-down:flex-col lg-down:bg-cover lg-down:bg-center lg-down:bg-no-repeat items-center justify-between"
        //  style={{
        //    backgroundImage: isSmallScreen ? "url('/promo-logo.png')" : "none",
        //  }}
      >
        {/* Overlay for small screens */}
        <div className="py-16 lg-down:block hidden absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Left Section: Text Content */}
        <div className="lg-down:pr-6 py-14 max-w-[45%] lg-down:max-w-full flex flex-col h-full relative z-10">
          <h1 className="text-5xl font-bold font-barlow lg-down:text-4xl">
            ENHANCE YOUR REVENUE
          </h1>
          <p className="text-[1.5rem] mt-7 font-montserrat lg-down:text-base lg-down:mt-4">
            Maximize your business potential with our tailored solutions. From
            revenue assurance to fraud management, Profit Assurance Technology
            delivers expert services to enhance your financial performance and
            safeguard your operations. Let us help you achieve your goals.
          </p>
          <div className="flex lg-down:justify-start justify-end lg-down:mt-5 mt-7">
            <button className="bg-primary-orange text-white py-3 px-8 text-lg rounded hover:bg-opacity-80 transition duration-300">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="hidden lg:block">
          <img
            src="/promo-logo.png"
            alt="Hexagonal Design"
            className="h-[80vh] object-fill"
          />
        </div>
      </div>
  );
};

export default PromoSection;
