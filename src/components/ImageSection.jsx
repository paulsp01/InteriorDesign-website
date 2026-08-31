import React from "react"

const ImageSection = ({ image, title,para }) => {
  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden group ">

      <img
        src={image}
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        alt={title}
      />

      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
       <p className="absolute bottom-12 left-4 sm:bottom-14 sm:left-5 md:bottom-16 md:left-6 text-white text-xs font-mono font-medium">{para}</p>
      <h2 className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 md:bottom-6 md:left-6 text-white text-xl sm:text-2xl md:text-3xl font-medium">
        {title}
      </h2>

    </div>
  )
}

export default ImageSection