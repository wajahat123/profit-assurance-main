import React from 'react';

const CaseStudiesHeader = () => {
  return (
    <div className="text-center py-6 bg-gradient-to-r from-white via-purple-50 to-white">
      <div className="text-pink-600 font-semibold text-sm mb-2 flex justify-center items-center space-x-1">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 15l5.09-8.26a1 1 0 00-.91-1.5H5.82a1 1 0 00-.91 1.5L10 15zm0 2a1.5 1.5 0 01-1.3-.75L3.3 7a3 3 0 012.61-4.5h8.18a3 3 0 012.61 4.5l-5.4 9.25A1.5 1.5 0 0110 17z" />
        </svg>
        <span>CASE STUDIES</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        What Pro Subscribers build with React Flow
      </h1>
      <p className="text-gray-600 text-lg">
        See how our users build custom node-based apps like workflow editors and diagramming tools
      </p>
    </div>
  );
};

export default CaseStudiesHeader;
