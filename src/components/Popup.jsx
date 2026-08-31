import React from 'react'
import { ChevronDown,X } from "lucide-react";

const Popup = ({showPopup,setShowPopup,title}) => {
  return (
   <>
    {showPopup && (
           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
   
             <div className="relative w-full max-w-md rounded-xl bg-white p-6 sm:p-8 shadow-xl">
   
               <button
                 onClick={() => setShowPopup(false)}
                 className="absolute right-4 top-4 text-gray-500 hover:text-black transition-colors"
               >
                 <X size={20} />
               </button>
   
               <div className="pr-6">
                 <h2 className="text-2xl sm:text-3xl font-medium">
                {title}
                 </h2>
   
                 <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                   Thank you for reaching out. We have received your inquiry
                   and will get back to you shortly.
                 </p>
               </div>
   
               <button
                 onClick={() => setShowPopup(false)}
                 className="mt-6 w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
               >
                 Close
               </button>
   
             </div>
           </div>
         )}
   </>
  )
}

export default Popup