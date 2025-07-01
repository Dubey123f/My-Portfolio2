// import React from 'react';
// import code from '../assets/contact.jpg'
// import co from '../assets/movie.png'
// import c from '../assets/news.jpeg'
// import pass from '../assets/Password.png'
// import chat from '../assets/chat.webp'
// const Works = () => {
//   return (
//     <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
//       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
//         <div className='pb-8 w-full flex justify-center items-center flex-col'>
//           <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
//             Work
//           </p>
//           <p className='py-6 text-2xl'>Check out some of my most recent work</p>
//         </div>
// {/* Container */}
//         <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
//             {/* Grid Item */}
//           <div
//             style={{ backgroundImage: `url(${pass})` }}
//             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
//           >
//             {/* Hover Effects */}
//             <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
//               <span className=' text-lg font-bold text-white tracking-wider'>
//                Pass-Launch
//               </span>
//               <p className='text-center'>A web application built with HTML, CSS and Javascript.</p>
//               <div className='pt-8 text-center'>
//                 <a href='https://passlaunch.vercel.app/'>
//                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
//                     Demo
//                   </button>
//                 </a>
//                 <a href='https://github.com/Dubey123f/Pass-Launch'>
//                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
//                     Code
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div
//             style={{ backgroundImage: `url(${c})` }}
//             // style={{ backgroundImage: url('contact.jpg') }}
//             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
//           >
//             {/* Hover Effects */}
//             <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
//               <span className=' text-lg font-bold text-white tracking-wider'>
//                 NewsLauncher
//               </span>
//               <p className='text-center'>A news web application built with react and news Api.</p>
//               <div className='pt-8 text-center'>
//                 <a href='/'>
//                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
//                     Demo
//                   </button>
//                 </a>
//                 <a href='https://github.com/Dubey123f/News-App'>
//                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
//                     Code
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div
//             style={{ backgroundImage: `url(${co})` }}
//             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
//           >
//             {/* Hover Effects */}
//             <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
//               <span className=' text-lg font-bold text-white tracking-wider'>
//               Movie Review App
//               </span>
//               <p className='text-center'>A Movie review web app created using react.js and OMDB API.</p>
//               <div className='pt-8 text-center'>
//                 <a href='https://moviereviewl.netlify.app'>
//                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
//                     Demo
//                   </button>
//                 </a>
//                 <a href='https://github.com/Dubey123f/Movie-Review'>
//                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
//                     Code
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div
//             style={{ backgroundImage: `url(${code})` }}
//             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
//           >
//             {/* Hover Effects */}
//             <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
//               <span className=' text-lg font-bold text-white tracking-wider'>
//                 ContactBook
//               </span>
//               <p className='text-center'>A ContactBook web application built with React and Redux.</p>
//               <div className='pt-8 text-center'>
//                 <a href='https://contactupdate.netlify.app'>
//                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
//                     Demo
//                   </button>
//                 </a>
//                 <a href='https://github.com/Dubey123f/contact-b00k'>
//                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
//                     Code
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div
//             style={{ backgroundImage: `url(${chat})` }}
//             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
//           >
//             {/* Hover Effects */}
//             <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
//               <span className=' text-lg font-bold text-white tracking-wider'>
//                 ChatBot Application
//               </span>
//               <p className='text-center'>A Chat-Bot web application built with HTML, CSS and Javascript.</p>
//               <div className='pt-8 text-center'>
//                 <a href='https://chatbot-pi-jade.vercel.app/'>
//                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
//                     Demo
//                   </button>
//                 </a>
//                 <a href='https://github.com/Dubey123f/chatbot'>
//                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
//                     Code
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div
//             style={{ backgroundImage: `url(${code})` }}
//             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
//           >
//             {/* Hover Effects */}
//             <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
//               <span className=' text-lg font-bold text-white tracking-wider'>
//                 CBT Application
//               </span>
//               <p className='text-center'>A CBT web application built with React and Mongodb</p>
//               <div className='pt-8 text-center'>
//                 <a href='/'>
//                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
//                     Demo
//                   </button>
//                 </a>
//                 <a href='/'>
//                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
//                     Code
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Works;



import React from 'react';

const projects = [
  {
    title: 'Pass-Launch',
    description: 'Generate strong passwords instantly.',
    demo: 'https://passlaunch.vercel.app/',
    code: 'https://github.com/Dubey123f/Pass-Launch',
  },
  {
    title: 'AskC',
    description: 'Q&A platform for developers.',
    demo: 'https://ask-c.vercel.app/', // replace
    code: 'https://github.com/Dubey123f/AskC',
  },
  {
    title: 'Movie Review App',
    description: 'Find and review movies with real data.',
    demo: 'https://moviereviewl.netlify.app',
    code: 'https://github.com/Dubey123f/Movie-Review',
  },
  {
    title: 'My UI Library',
    description: 'Reusable components for modern web apps.',
    demo: 'https://my-ui-library-eta.vercel.app/',
    code: 'https://github.com/Dubey123f/My-ui-Library',
  },
  {
    title: 'Soft-Sell',
    description: 'E-commerce platform for digital products.',
    demo: 'https://softsell-sandy.vercel.app/',
    code: 'https://github.com/Dubey123f/softsell',
  },
  {
    title: 'CrptoNexus',
    description: 'Real-time crypto data and insights.',
    demo: 'https://crypto-nexus-seven.vercel.app/', // replace
    code: 'https://github.com/Dubey123f/Crypto-Nexus',
  },
];

const Works = () => {
  return (
    <div name='work' className='w-full bg-gradient-to-b from-[#0a192f] to-[#0f2027] text-gray-300 py-16'>
      <div className='max-w-[1200px] mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 border-cyan-500'>
            My Work
          </h2>
          <p className='mt-4 text-lg sm:text-xl text-gray-400'>Some projects I’ve built recently</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group relative bg-white/5 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 hover:shadow-cyan-500/30 transition duration-500'
            >
              {/* Live iframe preview with parallax effect */}
              <div className='overflow-hidden rounded-t-2xl'>
                <iframe
                  src={project.demo}
                  title={project.title}
                  className='w-full h-56 md:h-48 lg:h-56 border-none transition-transform duration-500 group-hover:scale-105'
                ></iframe>
              </div>

              {/* Content */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 rounded-2xl'>
                <h3 className='text-lg font-semibold'>{project.title}</h3>
                <p className='text-xs mb-3 text-gray-300'>{project.description}</p>
                <div className='flex gap-2'>
                  <a href={project.demo} target='_blank' rel='noreferrer'>
                    <button className='flex-1 px-3 py-1.5 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-medium transition'>
                      Live
                    </button>
                  </a>
                  <a href={project.code} target='_blank' rel='noreferrer'>
                    <button className='flex-1 px-3 py-1.5 rounded-full bg-gray-200 hover:bg-white text-gray-800 text-xs font-medium transition'>
                      Code
                    </button>
                  </a>
                </div>
              </div>

              {/* Always visible bottom text */}
              <div className='p-4'>
                <h3 className='text-base font-semibold text-white mb-1'>{project.title}</h3>
                <p className='text-xs text-gray-400'>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
