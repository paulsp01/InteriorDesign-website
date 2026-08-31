import React from 'react'

const Card = ({ icon, title, para }) => {
  return (
    <div className="bg-white flex flex-col gap-4 p-4 sm:p-8 md:p-6 xl:px-10 rounded-lg w-full min-h-[240px]">

      <div className="w-8 h-8 sm:w-9 sm:h-9">
        {icon}
      </div>

      <h2 className="text-xl sm:text-2xl">
        {title}
      </h2>

      <p className="opacity-70 text-sm sm:text-base leading-relaxed">
        {para}
      </p>

    </div>
  )
}

export default Card