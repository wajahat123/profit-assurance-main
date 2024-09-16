import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Profit Assurance Technology helped us reduce revenue leakage by 30% and improved our billing accuracy significantly.",
      author: "John Smith",
      jobTitle: "Global Telecom Network",
    },
    {
      quote: "Their fraud management system reduced our fraudulent activities by 40%, giving us peace of mind and boosting revenue protection.",
      author: "John Smith",
      jobTitle: "Regional Bank, Africa",
    },
    {
      quote: "The tailored solutions by Profit Assurance Technology enhanced our financial reporting accuracy by 20%, streamlining our processes.",
      author: "John Smith",
      jobTitle: "Fintech Startup, Asia",
    },
    {
      quote: "Their RA framework helped us scale efficiently, increasing investor confidence and expanding across multiple regions.",
      author: "John Smith",
      jobTitle: "Telecom Operator, Morocco",
    },
  ];

  return (
    <div
      className="bg-black text-white py-16 px-24 lg-down:px-6"
      style={{ backgroundImage: "url('/footer-bg.png')",  backgroundRepeat: 'no-repeat' }}
    >
      {/* <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div> */}
      <div className="z-10 grid grid-cols-2 lg-down:grid-cols-1 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-5xl lg-down:text-4xl font-bold mb-4 font-barlow">TESTIMONIALS</h2>
          <p className="text-[1.5rem] lg-down:text-base mb-6 font-montserrat">
            Don’t just take our word for it! We’ve worked with tons of incredible people on ventures across all industries. One thing they all have in common is that they love our service.
          </p>
          <button className="bg-primary-orange text-white px-6 py-3 text-lg rounded hover:bg-opacity-80 transition duration-300 mb-8">
            View Cases
          </button>

          {/* Case Study Block */}
          <div className="bg-[#1F1F1F] bg-opacity-60 py-48 lg-down:py-24 px-28 lg-down:px-14 text-center rounded-lg shadow-lg">
            <h3 className="text-xl font-bold font-barlow">CASE STUDY</h3>
          </div>
        </div>

        {/* Right Section: Testimonial Cards */}
        <div className="grid grid-cols-2 lg-down:grid-cols-1 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1F1F1F] bg-opacity-60 p-6 lg-down:p-3 rounded-lg shadow-lg text-center"
            >
              <div className="text-center text-primary-orange text-4xl font-bold">“</div>
              <p className="text-[1.2rem] lg-down:text-base mb-6 font-montserrat">
                {testimonial.quote}
              </p>
                <h4 className="text-lg text-primary-green font-semibold font-montserrat">{testimonial.author}</h4>
                <p className="text-sm text-primary-blue font-montserrat">{testimonial.jobTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
