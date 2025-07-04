// import React, { useState } from 'react'; 
// import {
//   FaBars,
//   FaTimes,
//   FaGithub,
//   FaLinkedin,
//   FaTwitter,
//   FaInstagram,

// } from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { Link } from 'react-scroll';

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const handleClick = () => setNav(!nav);

//   return (
//     <div className='w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
//       <div>
//         <h1 className=' font-thin text-2xl italic font-serif'>Ayush Dubey</h1>
//       </div>
//       {/* menu */}
//       <ul className='hidden md:flex gap-x-8'>
//         <li>
//           <Link to='home' smooth={true} duration={500}>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to='about' smooth={true} duration={500}>
//             About
//           </Link>
//         </li>
//         <li>
//           <Link to='education' smooth={true} duration={500}>
//             Education
//           </Link>
//         </li>
//         <li>
//           <Link to='skills' smooth={true} duration={500}>
//             Skills
//           </Link>
//         </li>
//         <li>
//           <Link to='work' smooth={true} duration={500}>
//             Work
//           </Link>
//         </li>
//         <li>
//           <Link to='contact' smooth={true} duration={500}>
//             Contact
//           </Link>
//         </li>
//       </ul>
//       {/* Hamburger */}
//       <div onClick={handleClick} className='md:hidden z-10'>
//         {!nav ? <FaBars /> : <FaTimes />}
//       </div>
//       {/* Mobile menu */}
//       <ul
//         className={
//           !nav
//             ? 'hidden'
//             : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
//         }
//       >
//         <li className='py-6 text-4xl'>
//           <Link onClick={handleClick} to='home' smooth={true} duration={500}>
//             Home
//           </Link>
//         </li>
//         <li className='py-6 text-4xl'>
//           {' '}
//           <Link onClick={handleClick} to='about' smooth={true} duration={500}>
//             About
//           </Link>
//         </li>
//         <li className='py-6 text-4xl'>
//           {' '}
//           <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
//             Skills
//           </Link>
//         </li>
//         <li className='py-6 text-4xl'>
//           {' '}
//           <Link onClick={handleClick} to='work' smooth={true} duration={500}>
//             Work
//           </Link>
//         </li>
//         <li className='py-6 text-4xl'>
//           {' '}
//           <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
//             Contact
//           </Link>
          
//         </li>
//         <li className='py-6 text-4xl'>
//           {' '}
//           <Link onClick={handleClick} to='education' smooth={true} duration={500}>
//             Edu
//           </Link>
//           </li>
//       </ul>
//       {/* Social icons */}
//       <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
//         <ul>
//           <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
//             <a
//               className='flex justify-between items-center w-full text-gray-300'
//               href='https://www.linkedin.com/in/ayush-dubey-84a096255/'
//             >
//              Linkedin <FaLinkedin size={30} />
//             </a>
//           </li>
//           <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
//             <a
//               className='flex justify-between items-center w-full text-gray-300'
//               href='https://twitter.com/CodeAyushD'
//             >
//              X <FaTwitter size={30} />
//             </a>
//           </li>
//           <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
//             <a
//               className='flex justify-between items-center w-full text-gray-300'
//               href='https://github.com/Dubey123f'
//             >
//               Github <FaGithub size={30} />
//             </a>
//           </li>
//           <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
//             <a
//               className='flex justify-between items-center w-full text-gray-300'
//               href='mailto:dubeyayush2006@gmail.com'
//             >
//               Email <HiOutlineMail size={30} />
//             </a>
//           </li>
//           <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
//             <a
//               className='flex justify-between items-center w-full text-gray-300'
//               href='https://drive.google.com/file/d/1rqmKmXcjg5Bg356WywonTVOIC9nL-JjP/view?usp=drive_link'
//             >
//               Resume <BsFillPersonLinesFill size={30} />
//             </a>
//           </li>
//           <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#833AB4]'>
//             <a
//               className='flex justify-between items-center w-full text-gray-300'
//               href='https://www.instagram.com/iamlauncher/'
//             >
//               Instagram <FaInstagram  size={30} />
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };
// export default Navbar;

import React, { useState } from 'react'; 
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,

} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <h1 className=' font-thin text-2xl italic font-serif'>Ayush Dubey</h1>
      </div>
      {/* menu */}
      <ul className='hidden md:flex gap-x-8'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='education' smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
          
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='education' smooth={true} duration={500}>
            Edu
          </Link>
          </li>
      </ul>
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/ayush-dubey-84a096255/'
            >
             Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://twitter.com/CodeAyushD'
            >
             X <FaTwitter size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Dubey123f'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:dubeyayush2006@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1uB9sosdsSpuV4T-IjLhgOAJNUVnH-ejy/view?usp=drive_link'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#833AB4]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.instagram.com/iamlauncher/'
            >
              Instagram <FaInstagram  size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;

