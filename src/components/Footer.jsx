import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-6 px-6 py-10 sm:px-10 sm:py-12 lg:px-15 xl:px-30 lg:py-30">

      <h2 className="uppercase text-xl text-center sm:text-2xl sm:text-start">
        asthetique
      </h2>

      <ul className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-3 text-xs font-mono opacity-80">
        <li>Privacy</li>
        <li>Terms</li>
        <li>LinkedIn</li>
        <li>Instagram</li>
      </ul>

      <p className="text-xs sm:text-sm font-bold text-center md:text-right max-w-sm md:max-w-xs lg:max-w-md">
        © Lorem ipsum dolor sit amet. 
      </p>

    </footer>
  )
}

export default Footer