import React from 'react';

const ResponsiveSectionedBackground = () => {
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

  return (
    <div>
      {sections.map((section) => (
        <div
          key={section.id}
          className="relative"
          style={{ backgroundImage: `url(${section.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay */}
          <div className="relative z-10 p-6 text-white flex flex-col justify-center h-[400px]">
            <h2 className="text-2xl font-bold mb-4 font-barlow">{section.description}</h2>
            <h3 className="text-xl font-semibold mb-2 font-barlow">{section.title}</h3>
            <p className="text-sm font-montserrat">{section.fullDescription}</p>
            <button className="bg-primary-orange text-white w-fit py-2 px-4 mt-4 rounded hover:bg-opacity-80 transition duration-300">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResponsiveSectionedBackground;
