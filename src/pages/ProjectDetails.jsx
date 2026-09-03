import React from "react";
import { ArrowLeft, ArrowRight, Compass, Layers3, Sparkles, Star } from "lucide-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ProjectDetails = () => {
   const { id } = useParams();
       const navigate = useNavigate();

    const { state } = useLocation();

const work = state?.work;
const works = state?.works||[];


  if (!work) {
    return <div>Loading...</div>;
  }

  return (
    <div className="project-details min-h-screen bg-white text-black">



      <section className="relative h-[390px] md:h-[520px] overflow-visible">

    
        <img
          src={work.image}
          alt={work.title}
          className="absolute inset-0 w-full h-full object-cover "
        />

    
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/75
            via-black/10
            to-black/10
          "
        />

       
        <button
          onClick={() => navigate(-1)}
          className="
            absolute
            top-7 left-7
            md:top-8 md:left-8
            flex items-center gap-2
            text-white
            text-[8px]
            font-semibold
            tracking-wide
            uppercase bg-black/80 p-1 rounded-full
          "
        
        >
          <ArrowLeft size={10} />
          Back to selected works
        </button>


        <div
          className="
            absolute
            left-7 bottom-8
            md:left-8 md:bottom-10
            text-white
          "
        >
        
          <p className="text-[8px] uppercase tracking-[2px] mb-2">
            Selected Work
          </p>


          <h2
            className="
              font-serif
              text-4xl
              md:text-5xl
              lg:text-6xl
              leading-[0.9]
              max-w-[500px]
            "
          >
            {work.title}
          </h2>


          <p className="text-xs mt-4">
            {work.category}
          </p>
        </div>
      </section>


   
      <section
        className="
          relative
          z-10
          mx-8
          -mt-4
          grid
          grid-cols-2
          md:grid-cols-4
          gap-[3px]
        "
      >

        <div className="bg-[#f1f1f1] px-3 py-3 md:px-4">
          <p className="text-sm uppercase tracking-wider mb-2">
            Category
          </p>

          <p className="text-xs">
            {work.category}
          </p>
        </div>



        <div className="bg-[#f1f1f1] px-3 py-3 md:px-4">
          <p className="text-sm uppercase tracking-wider mb-2">
            Year
          </p>

          <p className="text-xs">
            {work.year}
          </p>
        </div>



        <div className="bg-[#f1f1f1] px-3 py-3 md:px-4">
          <p className="text-sm uppercase tracking-wider mb-2">
            Location
          </p>

          <p className="text-xs">
            {work.location}
          </p>
        </div>

        <div className="bg-[#f1f1f1] px-3 py-3 md:px-4">
          <p className="text-sm uppercase tracking-wider mb-2">
            Rating
          </p>

          <p className="text-xs flex items-center gap-1">
            <Star size={8} fill="currentColor" />
            {work.rating}
          </p>
        </div>

      </section>


      <section className="px-8 md:px-16 py-12 md:py-20">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-20">

      
          <div>
            <h3 className="font-serif text-xl md:text-2xl">
              About the project
            </h3>

            <div className="mt-3 w-6 h-[1px] bg-gray-400" />
          </div>


      
          <div>
            <p className="text-sm md:text-base leading-7 text-gray-700 max-w-xl">
              {work.description} The project is shaped around everyday rituals, with every material and proportion chosen to make the space feel calm, useful, and distinctly personal.
            </p>
          </div>

        </div>

      </section>

      <section className="border-y border-black/10 bg-[#f6f5f1] px-8 py-12 md:px-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-20">
          <div>
            <p className="text-[10px] uppercase tracking-[2px] text-gray-500">The approach</p>
            <h3 className="mt-3 max-w-xs font-serif text-3xl leading-tight md:text-4xl">
              Designed around how you live.
            </h3>
          </div>

          <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-3">
            {[
              { icon: Compass, title: "Intentional", text: "A clear point of view in every detail." },
              { icon: Layers3, title: "Tactile", text: "Materials selected to be felt, not just seen." },
              { icon: Sparkles, title: "Enduring", text: "A considered palette that grows with time." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-[#f6f5f1] p-5 md:p-6">
                <Icon size={20} strokeWidth={1.2} />
                <h4 className="mt-10 font-serif text-xl">{title}</h4>
                <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-12 md:px-16 md:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[2px] text-gray-500">A closer look</p>
            <h3 className="mt-2 font-serif text-3xl md:text-4xl">Details in balance</h3>
          </div>
          <p className="max-w-xs text-sm leading-6 text-gray-600">Quiet textures, useful forms, and a little room for surprise.</p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
          <img src={work.image} alt={`${work.title} detail one`} className="h-48 w-full object-cover sm:h-64 md:h-80" />
          <img src={work.image} alt={`${work.title} detail two`} className="h-48 w-full object-cover object-left sm:h-64 md:h-80" />
          <img src={work.image} alt={`${work.title} detail three`} className="h-48 w-full object-cover object-right sm:h-64 md:h-80" />
          <div className="flex min-h-48 items-end bg-[#20201d] p-5 text-white sm:min-h-64 md:min-h-80 md:p-6">
            <p className="font-serif text-xl leading-tight md:text-2xl">A slower, softer way to come home.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#20201d] px-8 py-14 text-white md:px-16 md:py-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[2px] text-white/50">Continue exploring</p>
            <h3 className="mt-3 max-w-lg font-serif text-3xl leading-tight md:text-5xl">More spaces, same attention to detail.</h3>
          </div>
          <button onClick={() => navigate("/")} className="flex w-fit items-center gap-3 border-b border-white/50 pb-2 text-xs uppercase tracking-[1px] transition-opacity hover:opacity-60">
            View selected works <ArrowRight size={14} />
          </button>
        </div>
      </section>


    </div>
  );
};

export default ProjectDetails;