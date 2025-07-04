
// import React from 'react';
// import htmlLogo from './images.png'; // Import images for each technology
// import cssLogo from './css.png';
// import javascriptLogo from './javascript.png';
// import reactLogo from './react.png';
// import nodeLogo from './node.png';
// import firebaseLogo from './firebase.png';
// import postmanLogo from './postman.png';
// import mongoLogo from './mongo.png';
// import nextLogo from './next.png';
// import gitLogo from './git.png';
// import mySQLLogo from './mysql.png';
// import tailwindLogo from './tailwind.png';
// // Import other logos as needed

// const Skills = () => {
//   return (
//     <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
//       {/* Container */}
//       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
//           <div className='  w-full flex justify-center items-center flex-col mb-7'>
//               <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
//               <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
//           </div> 
//           <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img src={htmlLogo} alt="HTML" className="w-20 h-20 mx-auto my-4" />
//                   <p className='my-4'>HTML</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img src={cssLogo} alt="CSS" className="w-20 h-20 mx-auto my-4" />
//                   <p className='my-4'>CSS</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img src={javascriptLogo} alt="JavaScript" className="w-20 h-20 mx-auto my-4" />
//                   <p className='my-4'>JavaScript</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img src={reactLogo} alt="JavaScript" className="w-20 h-20 mx-auto my-4" />
//                   <p className='my-4'>Reactjs</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img src={tailwindLogo} alt="JavaScript" className="w-20 h-20 mx-auto my-4" />
//                   <p className='my-4'>Tailwind</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img src={nextLogo} alt="JavaScript" className="w-20 h-20 mx-auto my-4" />
//                   <p className='my-4'>Nextjs</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img src={firebaseLogo} alt="JavaScript" className="w-20 h-20 mx-auto my-4" />
//                   <p className='my-4'>Firebase</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img src={mySQLLogo} alt="JavaScript" className="w-20 h-20 mx-auto my-4" />
//                   <p className='my-4'>MySQL</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img src={nodeLogo} alt="JavaScript" className="w-20 h-20 mx-auto my-4" />
//                   <p className='my-4'>Nodejs</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img src={postmanLogo} alt="JavaScript" className="w-20 h-20 mx-auto my-4" />
//                   <p className='my-4'>Postman</p>

//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img src={mongoLogo} alt="JavaScript" className="w-20 h-20 mx-auto my-4" />
//                   <p className='my-4'>mongoDB</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img src={gitLogo} alt="JavaScript" className="w-20 h-20 mx-auto my-4" />
//                   <p className='my-4'>Git</p>
//               </div>
//               {/* Add similar divs for other technologies with their respective logos */}
//           </div>
//       </div>
//     </div>
//   );
// };
// export default Skills;

import React from 'react';
import htmlLogo from './images.png';
import cssLogo from './css.png';
import javascriptLogo from './javascript.png';
import reactLogo from './react.png';
import nodeLogo from './node.png';
import firebaseLogo from './firebase.png';
import postmanLogo from './postman.png';
import mongoLogo from './mongo.png';
import nextLogo from './next.png';
import gitLogo from './git.png';
import mySQLLogo from './mysql.png';
import tailwindLogo from './tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-[#0a192f] text-gray-300 py-12'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full'>
        <div className='w-full flex flex-col items-center mb-8'>
          <p className='text-3xl sm:text-4xl font-bold inline border-b-4 border-cyan-500 text-center'>
            Skills
          </p>
          <p className='py-4 text-center text-lg sm:text-xl'>
            I enjoy diving into and learning new things. Here's a list of technologies I've worked with
          </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
          {[
            { src: htmlLogo, name: 'HTML' },
            { src: cssLogo, name: 'CSS' },
            { src: javascriptLogo, name: 'JavaScript' },
            { src: reactLogo, name: 'Reactjs' },
            { src: tailwindLogo, name: 'Tailwind' },
            { src: nextLogo, name: 'Nextjs' },
            { src: firebaseLogo, name: 'Firebase' },
            { src: mySQLLogo, name: 'MySQL' },
            { src: nodeLogo, name: 'Nodejs' },
            { src: postmanLogo, name: 'Postman' },
            { src: mongoLogo, name: 'MongoDB' },
            { src: gitLogo, name: 'Git' },
          ].map((tech, index) => (
            <div
              key={index}
              className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md p-4'
            >
              <img
                src={tech.src}
                alt={`${tech.name} logo`}
                className='w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4'
              />
              <p className='text-center text-base sm:text-lg font-medium'>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

