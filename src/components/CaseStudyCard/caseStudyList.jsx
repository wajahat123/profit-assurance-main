import React from 'react';
import CaseStudyCard from './caseStudyCard';
import caseStudies from './caseStudies';

const CaseStudiesList = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 p-6 sm-down:p-4">
      {caseStudies.map((caseStudy, index) => (
        <CaseStudyCard key={index} {...caseStudy} />
      ))}
    </div>
  );
};

export default CaseStudiesList;
