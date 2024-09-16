import React from 'react';

const CardSection = () => {
  const cards = [
    {
      title: 'Advanced Analysis',
      description: 'Growth, Focus & Analysis',
      icon: '/orange-cube.png', // Use the orange cube image
      borderColor: 'hover:border-primary-orange',
    },
    {
      title: 'Corporate Finance',
      description: 'Strategy is the Foundation',
      icon: '/green-cube.png', // Use the green cube image
      borderColor: 'hover:border-primary-green',
    },
    {
      title: 'Business Consultation',
      description: 'Professional Skilled Team',
      icon: '/blue-cube.png', // Use the blue cube image
      borderColor: 'hover:border-primary-blue',
    },
  ];

  return (
    <div className="relative w-[85%] xl-down:w-70% text-white z-20 py-2 mt-[-140px] lg-down:mt-0">
      <div className="flex flex-wrap md-down:flex-col justify-center gap-6 mt-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`sm-down:w-full border-2 border-[#C1C1C1] ${card.borderColor} p-4 xl-down:p-2 flex justify-center gap-5 cursor-pointer bg-[#1C1C1C] hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out`}
          >
            <div className="flex items-center justify-center">
              <img src={card.icon} alt={card.title} className="w-12 h-12" />
            </div>
            <div className='mb-5 font-montserrat'>
                <h3 className="text-xl mt-4 font-bold">{card.title}</h3>
                <p className="mt-2 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
