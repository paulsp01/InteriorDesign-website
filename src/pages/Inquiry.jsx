import React, { useState } from "react";
import Button from "../components/Button";
const img = "/assets/tower.png";
import { ChevronDown,X } from "lucide-react";
import Popup from "../components/Popup";

const Inquiry = () => {
  const [state, setState] = useState("");
  const [showPopup ,setShowPopup]=useState(false);
function handleClick(e){
  e.preventDefault();
  setShowPopup(true);
}
  return (
    <div className="flex flex-col gap-12 px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-16 xl:px-30 xl:flex-row xl:gap-20">

      <div className="flex flex-col gap-6 w-full xl:w-1/2">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl leading-tight"
        >
          Begin a Dialogue
        </h1>

        <p className="text-base sm:text-lg opacity-75 leading-relaxed max-w-2xl
        "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          laborum! Hic necessitatibus est temporibus amet.
        </p>

        <form className="w-full">

          <div className="pt-4">
            <label className="block mb-4 text-xs sm:text-sm font-semibold font-mono tracking-[2px] opacity-70">
              Name
            </label>

            <input
              type="text"
              placeholder="Your full name"
              className="w-full border-b border-gray-300 bg-transparent pb-4 placeholder:text-gray-400 outline-none focus:border-black transition-colors"/>
          </div>

          <div className="pt-4">
            <label className="block mb-4 text-xs sm:text-sm font-semibold font-mono tracking-[2px] opacity-70"
            >
              Email Address
            </label>

            <input type="email"
    placeholder="name@domain.com"
              className="w-full border-b border-gray-300 bg-transparent pb-4 placeholder:text-gray-400 outline-none focus:border-black transition-colors"/>
          </div>

          <div className="pt-4">
            <label className="block mb-4 text-xs sm:text-sm font-semibold font-mono tracking-[2px] opacity-70
            "
            >
              Project Classification
            </label>

            <div className="relative">
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full appearance-none border-b border-gray-300 bg-transparent pb-4 pr-8 text-black outline-none cursor-pointer"
              >
                <option value="" disabled>
                  Select classification...
                </option>

                <option value="architecture">Architecture</option>

                <option value="interior">Interior Design</option>

                <option value="residential">Residential</option>

                <option value="commercial">Commercial</option>
              </select>

              <div
                className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2"
              >
                <ChevronDown size={18} />
              </div>
            </div>
          </div>


          <div className="pt-4">
            <label className="block mb-5 text-xs sm:text-sm font-semibold font-mono tracking-[2px] opacity-70">
              Project Vision
            </label>

            <textarea
              rows="4"
              placeholder="Describe the scale, intent, and location..."
              className="w-full resize-none border-b border-gray-400 bg-transparent pb-4 placeholder:text-gray-400 outline-none focus:border-black transition-colors"
            />
          </div>
<div className="pt-6">
            <Button color="black" textColor="white" text="Inquiry Now" onClick={handleClick} />
          </div>
        </form>
      </div>
<div
        className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] xl:w-1/2 xl:h-[720px]">
        <img
          src={img}
          alt="Architecture project"
          className="w-full h-full object-cover object-center rounded-lg"/>
      </div>




      <Popup setShowPopup={setShowPopup} showPopup={showPopup} title="Inquiry Received"/>
    </div>
  );
};

export default Inquiry;
