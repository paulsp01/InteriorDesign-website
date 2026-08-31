import React from 'react'
import img from "../assets/img2.png"
import img1 from "../assets/img6.png"
import img2 from "../assets/img5.png"

const Services = () => {
  return (
    <div className="px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-16 xl:px-30">

      <div className="flex flex-col gap-4 sm:gap-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight">
          Our Disciplines
        </h1>

        <p className="w-full md:w-2/3 text-base sm:text-lg opacity-70 leading-relaxed
        ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Non vero laborum consequatur a velit libero sequi similique
          magnam repellat omnis molestias maxime recusandae illo,
          doloribus veniam iusto. Fugiat, quasi a.
        </p>
      </div>

      <div className="flex flex-col xl:flex-row gap-8 md:gap-12 xl:gap-30 py-12 sm:py-16 md:py-20">

        <div className="w-full xl:w-1/2">
          <img
            src={img}
            alt="Residential Area"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] xl:h-[500px] object-cover rounded-md hover:scale-105 transition-transform duration-500"/>
        </div>

        <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 justify-center w-full xl:w-1/2">
          <p className="font-mono text-xs">
            01 / Residential Area
          </p>

          <h2 className="text-2xl sm:text-3xl font-medium leading-tight">
            Sanctuaries of Concrete & Light
          </h2>

          <p className="text-sm sm:text-base opacity-80 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minima, quas. Ullam, perferendis iure, provident suscipit
            dolorum accusantium harum rerum eveniet amet impedit fugit
            repudiandae rem possimus ratione! Voluptatem, sit neque.
          </p>

          <p className="text-xs font-semibold">
            Explore Residential Portfolio -&gt;
          </p>
        </div>
      </div>


      <div className="flex flex-col xl:flex-row gap-8 md:gap-12 xl:gap-30 py-12 sm:py-16 md:py-20">

        <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 justify-center  w-full xl:w-1/2
          order-2
          xl:order-1">
          <p className="font-mono text-xs">
            02 / Commercial Area
          </p>

          <h2 className="text-2xl sm:text-3xl font-medium leading-tight">
            Sanctuaries of Concrete & Light
          </h2>

          <p className="text-sm sm:text-base opacity-80 leading-relaxed
          ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minima, quas. Ullam, perferendis iure, provident suscipit
            dolorum accusantium harum rerum eveniet amet impedit fugit
            repudiandae rem possimus ratione! Voluptatem, sit neque.
          </p>

          <p className="text-xs font-semibold">
            Explore Commercial Portfolio -&gt;
          </p>
        </div>

        <div className="w-full xl:w-1/2 order-1 xl:order-2
        ">
          <img
            src={img1}
            alt="Commercial Area"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] xl:h-[500px] object-cover rounded-md hover:scale-105 transition-transform duration-500"/>
        </div>
      </div>


      <div className="flex flex-col xl:flex-row gap-8 md:gap-12 xl:gap-30 py-12 sm:py-16 md:py-20">

        <div className="w-full xl:w-1/2">
          <img
            src={img2}
            alt="Interior Design"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] xl:h-[500px] object-cover rounded-md hover:scale-105 transition-transform duration-500"/>
        </div>

        <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 justify-center w-full xl:w-1/2">
          <p className="font-mono text-xs">
            03 / Interior Design
          </p>

          <h2 className="text-2xl sm:text-3xl font-medium leading-tight">
            Sanctuaries of Concrete & Light
          </h2>

          <p className="text-sm sm:text-base opacity-80 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minima, quas. Ullam, perferendis iure, provident suscipit
            dolorum accusantium harum rerum eveniet amet impedit fugit
            repudiandae rem possimus ratione! Voluptatem, sit neque.
          </p>

          <p className="text-xs font-semibold">
            Explore Interior Portfolio -&gt;
          </p>
        </div>

      </div>

    </div>
  )
}

export default Services

