


// /**********New Code*********** */
// "use client";
// import React, { useEffect, useRef } from 'react';
// import { HiArrowNarrowRight } from 'react-icons/hi';
// import me from '../assets/Ayush.jpeg';
// import { Link } from "react-scroll";
// import Typed from "typed.js"; 

// const Home = () => {
//   const el = useRef(null); // Move useRef inside the component

//   useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: ["WEB DEVELOPER", "UI/UX DESIGNER", "COMPETITIVE PROGRAMMER"],
//       typeSpeed: 50,
//       backSpeed: 50,
//       loop: true,
//     });
//     return () => {
//       typed.destroy();
//     };
//   }, []); // Move useEffect inside the component

//   return (
//     <div
//       name="home"
//       className="h-screen w-full bg-[#15142e]"
//     >
//       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
//         <div className="flex flex-col justify-center h-full">
//           <h2 className="text-4xl sm:text-7xl font-bold text-white">
//             HI👋, I&apos;M Ayush
//           </h2>
//           <div className="text-3xl text-white mt-4">
//            A <span className="text-white" ref={el}></span>
//           </div>
//           <div>
//             <Link
//               to="about"
//               smooth
//               duration={500}
//               className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
//             >
//               About Me
//               <span className="group-hover:rotate-90 duration-300">
//                 <HiArrowNarrowRight size={25} className="ml-3" />
//               </span>
//             </Link>
//           </div>
//         </div>
//         <div>
//           <img
//             src={me}  
//             alt="my profile"
//             className="rounded-full border-2 mx-auto md:ml-auto w-1/2 md:w-2/3"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


"use client";
import React, { useEffect, useRef } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/Ayush.jpeg';
import { Link } from "react-scroll";
import Typed from "typed.js";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["WEB DEVELOPER", "UI/UX DESIGNER", "COMPETITIVE PROGRAMMER"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <div name="home" className="w-full bg-[#15142e] py-12 md:py-0">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center px-4 md:px-8 lg:px-12 h-full">
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left mt-6 md:mt-0">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            HI👋, I&apos;M Ayush
          </h2>
          <div className="text-xl sm:text-2xl md:text-3xl text-white mt-4">
            A <span className="text-cyan-400 font-semibold" ref={el}></span>
          </div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white px-6 py-3 mt-6 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
        <div className="mb-6 md:mb-0">
          <img
            src={me}
            alt="Profile"
            className="rounded-full border-4 border-cyan-500 w-40 sm:w-48 md:w-60 lg:w-72 mx-auto md:ml-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

