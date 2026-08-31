
import React from "react";

const About = ({ num, para, title, bgColor, textColor }) => {
  return (
    <div
      className={`${bgColor} ${textColor} flex flex-col items-center gap-4 sm:gap-5 md:gap-6 px-5 py-12 sm:px-8 sm:py-16 md:px-16 md:py-20 lg:px-15 xl:px-30 lg:py-30`}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl opacity-50 font-thin">
        {num}
      </h2>

      <p className="italic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center leading-relaxed max-w-4xl">
        {para}
      </p>

      <p className="text-xs sm:text-sm opacity-55 font-mono text-center">
        {title}
      </p>
    </div>
  );
};

export default About;

