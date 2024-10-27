"use client";
import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Associate Software Intern",
      company: "Cosmic365.Ai",
      duration: "Oct2024 - Present",
      description: "Developing user-friendly web applications using React and Tailwind CSS.",
      image: "https://media.licdn.com/dms/image/v2/D560BAQFhDkD6FX0YPw/company-logo_200_200/company-logo_200_200/0/1707705757827?e=1738195200&v=beta&t=wvrn1ypZt_nIqTbXaarYllIltEOo-XBK2hFUBEZSYHw", // Replace with actual logo URL
    },
    // {
    //   title: "Web Developer Intern",
    //   company: "Innovatech",
    //   duration: "Jun 2021 - Dec 2021",
    //   description: "Assisted in building responsive websites and optimizing performance.",
    //   image: "https://via.placeholder.com/50", // Replace with actual logo URL
    // },
    // {
    //   title: "Junior Developer",
    //   company: "Code Factory",
    //   duration: "Jan 2020 - May 2021",
    //   description: "Collaborated with the design team to create visually appealing applications.",
    //   image: "https://via.placeholder.com/50", // Replace with actual logo URL
    // },
  ];

  return (
    <div className="bg-[#0a192f] text-gray-300 py-16">

      <div className=' w-full flex justify-center items-center flex-col mb-7'>
      <h2 className="text-4xl font-bold  border-b-4 border-cyan-500  text-center">My Experience</h2>
      <p className="text-2xl py-4"></p>
        {/* <div className="space-y-6"> */}
        <div className="py-16 p-4 border rounded-md bg-black shadow-md hover:bg-blue-500 ">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start space-x-4 bg-[#0a192f] shadow-md rounded-lg p-6">
              <div className="flex-shrink-0">
                {index < experiences.length - 1 && (
                  <div className="flex flex-col items-center">
                    <div className="h-10 border-l-2 border-red-900"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5-5 5m6-5H6"
                      />
                    </svg>
                  </div>
                )}
                {/* Organization Image */}
                <img
                  src={exp.image}
                  alt={exp.company}
                  className="w-10 h-10 rounded-full border border-gray-300"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <h4 className="text-md font-medium text-gray-600">{exp.company}</h4>
                <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
