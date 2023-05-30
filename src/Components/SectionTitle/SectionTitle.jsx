import React from "react";

const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="text-center mx-auto md:w-4/12  mb-8">
      <p className="text-[#D99904] text-xl ">{subHeading}</p>
      <h3 className="text-4xl border-y-4 py-4 mt-4 ">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
