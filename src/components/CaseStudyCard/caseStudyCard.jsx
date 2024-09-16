import React from "react";
import { UserAvatar } from "@carbon/icons-react";

const CaseStudyCard = ({
  image,
  title,
  company,
  description,
  authorName,
  authorPosition,
}) => {
  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}... `;
  };
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex flex-col p-8 sm-down:p-4">
        <div className="md:flex-shrink-0 ">
          <img
            className="h-60 w-full object-cover rounded-lg"
            src={image}
            alt={title}
          />
        </div>
        <div className="mt-4">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {company}
          </div>
          <h3 className="block mt-1 text-lg leading-tight font-medium text-black">
            {title}
          </h3>
          <p className="mt-2 text-gray-500">
            {truncateDescription(description, 120)}
            <a href="#" className="text-blue-500">
              read more
            </a>
          </p>
          <div className="flex items-center mt-4">
            <div className="flex-shrink-0">
              <UserAvatar size={24} />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{authorName}</p>
              <p className="text-sm text-gray-500">{authorPosition}</p>
            </div>
          </div>
          <a href="#" className="text-pink-600 mt-4 block">
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
