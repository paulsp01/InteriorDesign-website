import React, { useEffect, useState } from "react";
import Card from "../components/ImageSection";
import { useNavigate } from "react-router-dom";

const Works = () => {
  const [works, setWorks] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    const fetchWorks = async () => {
      const response = await fetch("src/data/data.json");
      console.log("response from work.jsx",response)
      const data = await response.json();
            console.log("data from work.jsx",data)
      setWorks(data);
    };

    fetchWorks();
  }, []);

  return (
    <div className="px-4 py-10 sm:px-6 md:px-10 lg:px-15 xl:px-30">

      <h2 className="text-2xl sm:text-3xl md:text-4xl py-10 sm:py-14 md:py-20">
        Selected Works
      </h2>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10">

        {works.map((work) => (
          <div
            key={work.id}
            className="h-[350px] sm:h-[400px] md:h-[450px]"
              onClick={() => navigate(`/works/${work.id}`, {
  state: { work: work,
    works: works}
})}
          >
            <Card
              image={work.image}
              title={work.title}
              para={`${work.category} / ${work.year}`}
            />
          </div>
        ))}

      </div>
    </div>
  );
};

export default Works;