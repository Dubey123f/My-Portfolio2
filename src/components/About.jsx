// import React from "react";

// const About = () => { 
//   return (
//     <div
//       name="about"
//       id="about"
//       className="w-full h-screen bg-[#0a192f] text-gray-300"
//     >
//       <div className="flex flex-col justify-center items-center w-full h-full">
//         <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
//           <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
//             <div className="sm:text-right pb-8 pl-4">
//               <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
//                 About
//               </p>
//             </div>
//             <div></div>
//           </div>
//           <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
//             <div className="sm:text-right text-4xl font-bold">
//               <p>
//                 Hi. I'm Ayush Dubey, nice to meet you. Please take a
//                 look around.
//               </p>
//             </div>
//             <div>
//               <p>
//                 {" "}
//                 A software developer with experience in building Responsive and
//                 Scalable Web apps. I am well-knowledged in UI/UX principles and
//                 practices. In addition to software development, I am also a
//                 technical writer--simplifying topics/concepts on the web.
//               </p>
//             </div>
//           </div>
//         </div>





//       </div>
//     </div>
//   );
// };
// export default About;



import React from "react";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full bg-[#0a192f] text-gray-300 py-12"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="bg-cyan-800 rounded-md w-11/12 max-w-[1000px] p-6 sm:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
            <div className="sm:text-right">
              <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="sm:text-right text-2xl sm:text-3xl md:text-4xl font-bold">
              <p>
                Hi. I'm Ayush Dubey, nice to meet you. Please take a look
                around.
              </p>
            </div>
            <div className="text-base sm:text-lg leading-relaxed">
              <p>
                A software developer with experience in building responsive and
                scalable web apps. I am well-versed in UI/UX principles and
                practices. In addition to software development, I’m also a
                technical writer — simplifying topics and concepts on the web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
