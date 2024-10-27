
import React from "react";

const Edu = () => {
  return (
    <div id="education" className="bg-[#0a192f] text-gray-300 py-16">
      {/* <div className="container mx-auto"> */}
      <div className=' w-full flex justify-center items-center flex-col mb-7'>
        {/* <h2 className="text-4xl font-bold mb-8  text-center">Education</h2> */}
        <h2 className="text-4xl font-bold  border-b-4 border-cyan-500  text-center">Education</h2>
        <p className="text-2xl py-4">I enjoy diving into and learning new things. Here's a list of my educational qualifications</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-md bg-black shadow-md hover:bg-blue-500">
            <h3 className="text-xl font-semibold mb-2 hover:text-white">Bachelor of Technology (B.Tech)</h3>
            <p className="text-gray-400 hover:text-white">Ambalika Institute of Management and Technology, Lucknow</p>
          </div>
          <div className="p-4 border rounded-md bg-black shadow-md hover:bg-blue-500">
            <h3 className="text-xl font-semibold mb-2 hover:text-white">Intermediate (12th Grade)</h3>
            <p className="text-gray-400 hover:text-white">National Inter College, Varanasi</p>
          </div>
          <div className="p-4 border rounded-md bg-black shadow-md hover:bg-blue-500 ">
            <h3 className="text-xl font-semibold mb-2 hover:text-white">High School (10th Grade)</h3>
            <p className="text-gray-400 hover:text-white">Smt. Vidya Devi UMV, Jaunpur</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edu;

