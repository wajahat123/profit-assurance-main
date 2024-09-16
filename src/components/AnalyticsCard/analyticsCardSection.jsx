import React from 'react';
import CardSection from '../ServiceCard/serviceCard';

const AnalyticsCardSection = () => {
  const cards = [
    {
      title: 'RA Maturity Optimization',
      description: 'Optimize your technology, processes, and reporting to meet industry standards and improve organizational performance.',
      buttonText: 'Read More',
      defaultButtonColor: 'bg-transparent border-primary-orange text-primary-orange',
      hoverButtonColor: 'hover:bg-primary-orange hover:text-white',
      imgSrc: '/chart1.png', // Replace with the actual image path
      borderColor: 'hover:border-primary-orange',
    },
    {
      title: 'Revenue Assurance Services',
      description: 'Comprehensive solutions for billing, network management, and usage control, ensuring better financial outcomes.',
      buttonText: 'Read More',
      defaultButtonColor: 'bg-transparent border-primary-green text-primary-green',
      hoverButtonColor: 'hover:bg-primary-green hover:text-white',
      imgSrc: '/chart2.png', // Replace with the actual image path
      borderColor: 'hover:border-primary-green',
    },
    {
      title: 'Advanced Fraud Protection',
      description: 'Protect your business with advanced fraud detection and prevention, securing your revenue and operations.',
      buttonText: 'Read More',
      defaultButtonColor: 'bg-transparent border-primary-blue text-primary-blue',
      hoverButtonColor: 'hover:bg-primary-blue hover:text-white',
      imgSrc: '/chart3.png', // Replace with the actual image path
      borderColor: 'hover:border-primary-blue',
    },
  ];

  return (
    <div className="relative w-full bg-black py-10"
      style={{
        backgroundImage: `url('/analytics-bg.png')`, // Adding the background image
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 100%',
      }}
    >
      {/* CardSection Positioned on Top */}
      <div className="left-0 w-full flex justify-center items-center z-20">
        <CardSection /> {/* Include the CardSection component */}
      </div>

      {/* Chart Cards Section */}
      <div className="max-w-6xl mx-auto">
        <h1 className='text-white flex justify-center text-5xl py-4 mt-11 font-barlow'>Some Title Here</h1>
        <div className="flex flex-wrap md-down:flex-col md-down:p-5 justify-center gap-6 mt-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`border-2 border-gray-600 cursor-pointer ${card.borderColor} p-4 w-[100%] sm:w-[90%] md:w-[45%] lg:w-[30%] flex flex-col items-center gap-5 bg-black bg-opacity-65 hover:shadow-lg transition duration-300`}
            >
              <img src={card.imgSrc} alt={card.title} className="w-full h-40 object-cover" />
              <div className="text-center text-white">
                <h3 className="text-xl mt-4 font-bold font-barlow">{card.title}</h3>
                <p className="mt-2 text-sm font-montserrat">{card.description}</p>
                <button className={`border-2 ${card.defaultButtonColor} ${card.hoverButtonColor} px-8 py-2 mt-4 rounded transition duration-300 font-montserrat`}>
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCardSection;
