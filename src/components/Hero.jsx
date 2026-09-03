import React from "react";
import Button from "./Button";
const HeroImg = "/assets/screen.png";

const Hero = () => {
  return (
    <div className="w-full px-6 sm:px-8 md:px-12 lg:px-15 xl:px-30 flex flex-col lg:flex-row gap-10 lg:gap-15 py-16 sm:py-20 lg:py-30">

      <div className="w-full lg:w-1/2 flex flex-col gap-6 xl:gap-8 justify-center">

        <h1 className="text-4xl  md:text-5xl xl:text-6xl leading-tight lg:leading-18">
          Timeless Spaces, Refined Living
        </h1>

        <p className="text-base sm:text-lg opacity-60 leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          sed quisquam dolor at, perferendis eum ipsam quaerat voluptas,
          voluptatibus, ad eius necessitatibus sunt recusandae fugiat
          ducimus minima! Culpa suscipit fugit, quo, sequi quam veniam,
          animi laudantium voluptate dolor error illum.
        </p>

        <Button
          color="white"
          textColor="black"
          text="Explore Works"
        />

      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2">
        <img
          src={HeroImg}
          alt="Interior design"
          className="w-full h-80 sm:h-96 md:h-125 lg:h-150 object-cover"
        />
      </div>

    </div>
  );
};

export default Hero;