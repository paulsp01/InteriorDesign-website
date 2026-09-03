import React from 'react'
const img = "/assets/img3.png"
const img2 = "/assets/img7.png"
const img3 = "/assets/img10.png"
import About from '../components/About'

const Philosophy = () => {
  return (
    <>

      <section className="relative w-full">
        <img
          src={img}
          alt="Philosophy"
          className="w-full h-[500px] sm:h-[600px] md:h-[700px] object-cover  opacity-70"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] flex flex-col gap-4 sm:gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-medium leading-tight">
            The quiet elegance of space.
          </h1>

          <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            In, facilis. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Magni, laborum?
          </p>
        </div>
      </section>


      <section className="flex flex-col xl:flex-row gap-10 md:gap-16 xl:gap-30 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-30">

        <div className="flex flex-col gap-5 sm:gap-6 justify-center w-full xl:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-medium">
            Material Honesty
          </h2>

          <p className="text-sm sm:text-base leading-relaxed opacity-80">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dolores aspernatur odit facilis qui minima eaque natus saepe
            debitis voluptas architecto. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Delectus, incidunt!
          </p>
        </div>

        <div className="w-full xl:w-1/2">
          <img
            src={img3}
            alt="Material Honesty"
            className="w-full h-[350px] sm:h-[450px] md:h-[550px] xl:h-[600px] object-cover hover:scale-105 rounded-md transition-transform duration-500"/>
        </div>

      </section>

      <section className="flex flex-col xl:flex-row gap-10 md:gap-16 xl:gap-30 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-30
      ">

        <div className="w-full xl:w-1/2 ">
          <img
            src={img2}
            alt="Timeless design"
            className="w-full h-[350px] sm:h-[450px] md:h-[550px] xl:h-[600px] object-cover hover:scale-105 rounded-md transition-transform duration-500"/>
        </div>

        <div className="flex flex-col gap-5 sm:gap-6 justify-center w-full xl:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-medium">
            Timeless
          </h2>

          <p className="text-sm sm:text-base leading-relaxed opacity-80
          ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dolores aspernatur odit facilis qui minima eaque natus saepe
            debitis voluptas architecto. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Delectus, incidunt!
          </p>
        </div>

      </section>

      <About
        num="99"
        para="Lorem ipsum dolor sit amet consectetur, adipisicing elit. A pariatur earum dolor id eos suscipit ut, aspernatur labore non reiciendis."
        title="--Eleance Vance, Private Client"
        bgColor="bg-black"
        textColor="text-white"
      />
    </>
  )
}

export default Philosophy

