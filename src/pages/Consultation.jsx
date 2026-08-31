import React,{useState} from "react";
import Popup from "../components/Popup";

import img from "../assets/img9.png";

const Consultation = () => {
    const [state, setState] = useState("");
     const [showPopup ,setShowPopup]=useState(false);
    function handleClick(e){
      e.preventDefault();
      setShowPopup(true);
    }
  return (
    <div>
    
      <div className="relative">
        <img src={img} className="w-full block" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/90 via-white/40 to-transparent"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 xl:gap-20 px-5 sm:px-8 md:px-12 xl:px-30 py-10 sm:py-14 md:py-16 lg:py-20 w-full">
        <div className="flex flex-col gap-8 w-full lg:w-[70%]">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl">
            Technical Briefing
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            ducimus asperiores necessitatibus, rem tenetur id eos aperiam minus
            similique laboriosam nisi nemo officia facere eligendi fuga impedit
            sed quos natus.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus dolorum blanditiis sequi? Nostrum nihil dolore minus?
            Vitae, facere obcaecati? Reiciendis aliquam vitae labore doloribus
            veritatis adipisci libero ullam esse eveniet?
          </p>
        </div>
        <div className="bg-white shadow-2xl p-5 sm:p-7 md:p-8 lg:p-10 w-full lg:w-full flex flex-col gap-10 lg:gap-12">
          <div className="flex flex-col gap-6">
            <h2 className="text-xl sm:text-2xl pb-4 border-b border-gray-300">
              Project Parameters
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <label className="sm:whitespace-nowrap">Principal Contact</label>

              <input
                type="text"
                className="border border-gray-300 sm:ml-2 p-2 w-full"
                placeholder="Full Name"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <label className="sm:whitespace-nowrap">Direct Email</label>

              <input
                type="email"
                className="border border-gray-300 sm:ml-2 p-2 w-full"
                placeholder="abc@gmail.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-xl sm:text-2xl pb-4 border-b border-gray-300">
              Scope & Site
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <label className="sm:whitespace-nowrap">Project Scope</label>

              <select
                className="p-2 border border-gray-400 sm:ml-2 w-full"
               value={state}
               onChange={(e)=>setState(e.target.value)}
              >
                <option value="" disabled>
                  Select Scope Category
                </option>

                <option value="Resedential-New Build">
                  Resedential-New Build
                </option>

                <option value="Commercial Space">Xommercial Space</option>

                <option value="Historical Renovation">
                  Historical Renovation
                </option>

                <option value="Masterplanning">Masterplanning</option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <label className="sm:whitespace-nowrap">Site Information</label>

              <textarea
                className="border border-gray-600 p-2 sm:ml-2 resize-none w-full"
                placeholder="Location acrege known contrains.."
                rows="4"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl sm:text-2xl pb-4 border-b border-gray-300">
              Scheduling
            </h2>

            <div className="border border-gray-300 p-4">
              <label className="block">Scheduling Preference</label>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full pt-4">
                <label className="flex items-center gap-3 cursor-pointer border border-gray-300 p-2">
                  <input
                    type="radio"
                    name="scheduling"
                    value="Immediate (1-2 Weeks)"
                    className="w-4 h-4 shrink-0"
                  />

                  <span className="text-sm sm:text-base">
                    Immediate (1-2 Weeks)
                  </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer border border-gray-300 p-2">
                  <input
                    type="radio"
                    name="scheduling"
                    value="Standard (3-4Weeks)"
                    className="w-4 h-4 shrink-0"
                  />

                  <span className="text-sm sm:text-base">
                    Standard (3-4Weeks)
                  </span>
                </label>
              </div>
            </div>
          </div>

          <p className="cursor-pointer" onClick={handleClick}>Request Briefing-&gt;</p>
        </div>
      </div>

       <Popup setShowPopup={setShowPopup} showPopup={showPopup} title="Request Briefing"/>
    </div>
  );
};

export default Consultation;
