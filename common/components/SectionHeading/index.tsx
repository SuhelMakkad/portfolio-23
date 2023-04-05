import React from "react";

const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-end text-4xl font-medium capitalize text-black duration-300 dark:text-white">
      {children}
    </h2>
  );
};

export default SectionHeading;
