import React from "react"
import img from "../assets/img.png"
import tower from "../assets/tower.png"
import img4 from "../assets/img4.png"
import Card from "../components/ImageSection"

const Works = () => {
  return (
    <div className="px-4 py-10 sm:px-6 md:px-10 lg:px-15 xl:px-30">

      <h2 className="text-2xl sm:text-3xl md:text-4xl py-10 sm:py-14 md:py-20">
        Selected Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10">

       
        <div className="md:row-span-2 h-[350px] sm:h-[450px] md:h-[600px] lg:h-[700px]">
          <Card
            image={img4}
            title="The Glass Pavillion"
            para="Resedential / 2023"
          />
        </div>

        
        <div className="h-[300px] sm:h-[350px] md:h-[285px] lg:h-[335px]">
          <Card
            image={img}
            title="Lumina Resudence"
             para="Commercial / 2024"
          />
        </div>

      
        <div className="h-[300px] sm:h-[350px] md:h-[285px] lg:h-[335px]">
          <Card
            image={tower}
            title="The Apex Tower"
             para="Interior / 2026"
          />
        </div>

      </div>
    </div>
  )
}

export default Works