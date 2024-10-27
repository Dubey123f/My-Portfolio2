import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="max-w-7xl mx-auto p-10">
        <div className="flex items-center justify-between text-white">
          <div className="">
            <h1 className="uppercase">Coding Profile</h1>
            <ul className="pt-2" style={{ listStyleType: "disc" }}>
              <li>
                <a
                  className="hover:shadow-sm hover:underline hover:underline-offset-2 hover:underline-transparent hover:text-white hover:text-opacity-40 hover:duration-50 hover:ease-in-out hover:delay-5"
                  href="https://www.geeksforgeeks.org/user/hacked_ad/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GeeksForGeeks
                </a>
              </li>
              <li>
                <a
                  className="hover:shadow-sm hover:underline hover:underline-offset-2 hover:underline-transparent hover:text-white hover:text-opacity-40 hover:duration-50 hover:ease-in-out hover:delay-5"
                  href="https://leetcode.com/u/ayush2448/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LeetCode
                </a>
              </li>
              <li>
                <a
                  className="hover:shadow-sm hover:underline hover:underline-offset-2 hover:underline-transparent hover:text-white hover:text-opacity-40 hover:duration-50 hover:ease-in-out hover:delay-5"
                  href="https://www.codechef.com/users/ayush2448"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CodeChef
                </a>
              </li>
              <li>
                <a
                  className="hover:shadow-sm hover:underline hover:underline-offset-2 hover:underline-transparent hover:text-white hover:text-opacity-40 hover:duration-50 hover:ease-in-out hover:delay-5"
                  href="https://codeforces.com/profile/dubeyayush2006"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CodeForces
                </a>
              </li>
            </ul>
          </div>
          <div className="uppercase flex flex-col items-center justify-center">
            <div>All Right Reserved</div>
            <div>Copyright &copy; 2024</div>
            <div>Made using React.js</div>
          </div>
          <div className="">
            <h1 className="uppercase">Connect with me</h1>
            <div className="">
              <ul className="pt-2" style={{ listStyleType: "disc" }}>
                <li>
                  <a
                    className="hover:shadow-sm hover:underline hover:underline-offset-2 hover:underline-transparent hover:text-white hover:text-opacity-40 hover:duration-50 hover:ease-in-out hover:delay-5"
                    href="https://www.linkedin.com/in/ayush-dubey-84a096255/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="hover:shadow-sm hover:underline hover:underline-offset-2 hover:underline-transparent hover:text-white hover:text-opacity-40 hover:duration-50 hover:ease-in-out hover:delay-5"
                    href="https://github.com/Dubey123f"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    className="hover:shadow-sm hover:underline hover:underline-offset-2 hover:underline-transparent hover:text-white hover:text-opacity-40 hover:duration-50 hover:ease-in-out hover:delay-5"
                    href="https://x.com/CodeAyushD"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    className="hover:shadow-sm hover:underline hover:underline-offset-2 hover:underline-transparent hover:text-white hover:text-opacity-40 hover:duration-50 hover:ease-in-out hover:delay-5"
                    href="https://www.instagram.com/iamlauncher/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
