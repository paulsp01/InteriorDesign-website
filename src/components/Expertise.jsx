import React from 'react'
import Card from './Card'
import { House, HousePlus, Sofa } from 'lucide-react'

const Expertise = () => {
  const items = [
    {
      icon: <House />,
      title: "Residential",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ducimus."
    },
    {
      icon: <HousePlus />,
      title: "Commercial",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ducimus."
    },
    {
      icon: <Sofa />,
      title: "Interior Design",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ducimus."
    }
  ]

  return (
    <div className="bg-gray-200 flex flex-col items-center justify-center px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-15 xl:px-30">

      <h2 className="text-2xl sm:text-3xl md:text-4xl pb-10 sm:pb-14 md:pb-20 text-center">
        Our Expertise
      </h2>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10">
        {items.map((item, i) => (
          <Card {...item} key={i} />
        ))}
      </div>

    </div>
  )
}

export default Expertise