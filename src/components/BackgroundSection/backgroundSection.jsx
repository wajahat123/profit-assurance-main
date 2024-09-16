import React, { useState } from 'react';
import ResponsiveSectionedBackground from './MobileView/mobileViewBackgroundSection';

const SectionedBackground = () => {
  const sections = [
    {
      id: 1,
      title: 'Client Learning Programs',
      description: '01',
      fullDescription: 'Accelerate your learning and development through our tailored programs capabilities that.',
      backgroundImage: 'https://wpdemo.archiwp.com/maxbizz/wp-content/uploads/sites/7/2020/10/fservice-3.jpg',
    },
    {
      id: 2,
      title: 'Partnership Ecosystem',
      description: '02',
      fullDescription: 'Accelerate your innovation and transformation with a fully integrated suite of capabilities that.',
      backgroundImage: 'https://wpdemo.archiwp.com/maxbizz/wp-content/uploads/sites/7/2020/09/fservice1.jpg',
    },
    {
      id: 3,
      title: 'New Business Innovation',
      description: '03',
      fullDescription: 'Explore innovative solutions to transform your business operations and growth strategies.',
      backgroundImage: 'https://wpdemo.archiwp.com/maxbizz/wp-content/uploads/sites/7/2020/09/fservice2.jpg',
    },
    {
      id: 4,
      title: 'Digital Delivery Platform',
      description: '04',
      fullDescription: 'Leverage our digital platform to enhance your business delivery and customer satisfaction.',
      backgroundImage: 'https://wpdemo.archiwp.com/maxbizz/wp-content/uploads/sites/7/2020/10/fservice-3.jpg',
    },
  ];

  const [currentBackground, setCurrentBackground] = useState(sections[0].backgroundImage);

  return (
    <>
      <div
      className="relative w-full h-[80vh] bg-cover bg-center transition-all duration-500 lg-down:hidden block"
      style={{ backgroundImage: `url(${currentBackground})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-10"></div> {/* Overlay */}
      <div className="relative w-full mx-auto flex justify-between h-full z-10">
        {sections.map((section) => (
          <div
            key={section.id}
            className="w-1/4 relative flex flex-col justify-end text-white cursor-pointer group transition-all duration-500"
            onMouseEnter={() => setCurrentBackground(section.backgroundImage)}
          >
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-80"></div>

            <div className="relative p-8 z-10 transition-transform duration-500 transform group-hover:-translate-y-2">
              <h2 className="text-3xl font-bold mb-4 transition duration-300 group-hover:text-primary-orange font-barlow">
                {section.description}
              </h2>
              <h3 className="text-lg font-semibold transition duration-300 group-hover:text-primary-orange font-barlow">
                {section.title}
              </h3>

              {/* Description and Button for Hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:translate-y-0">
                <p className="mt-4 text-sm font-montserrat">
                  {section.fullDescription}
                </p>
                <button className="bg-primary-orange font-montserrat text-white px-6 py-2 mt-4 rounded hover:bg-opacity-80 transition duration-300">
                  Read More
                </button>
              </div>
            </div>

            {/* Divider between sections */}
            {section.id !== 4 && (
              <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white opacity-30"></div>
            )}
          </div>
        ))}
      </div>
    </div>
    <div className='lg-down:block hidden'>
      <ResponsiveSectionedBackground />
    </div>
    </>
  );
};

export default SectionedBackground;
