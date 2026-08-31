import React from 'react'
import Button from './Button'

const Project = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 items-center text-center px-5 py-12 sm:px-8 sm:py-16 md:px-15 md:py-20  xl:px-30 lg:py-30 border-b border-gray-500
    ">

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
        Ready To Begin?
      </h2>

      <p className="text-sm sm:text-base md:text-lg opacity-75 max-w-xl leading-relaxed">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Repudiandae, deserunt?
      </p>

      <Button color="black" textColor="white" text="Start Your Project"/>

    </div>
  )
}

export default Project