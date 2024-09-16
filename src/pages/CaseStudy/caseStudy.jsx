import React from "react";
import CaseStudiesHeader from "../../components/CaseStudiesHeader/caseStudyHeader";
import CaseStudiesList from "../../components/CaseStudyCard/caseStudyList";

const CaseStudyPage = () => {
    return(
        <>
        <div className="bg-gradient-to-r from-white via-purple-50 to-white">
         <CaseStudiesHeader />
         <CaseStudiesList />
         </div>
        </>
    )
}

export default CaseStudyPage;