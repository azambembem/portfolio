// import Navbar from "@/components/Navbar";
// import React from "react";
// import { FaGithub } from "react-icons/fa";
// import { FaTelegramPlane } from "react-icons/fa";

// const Dashboard = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="w-[50%] mx-auto mt-24">
//         <div className="text-5xl font-bold mb-8">Dashboard</div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//             <div className="text-lg font-semibold mb-4 flex items-center">
//               GitHub Followers
//               <a
//                 href="https://github.com/azambembem"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="ml-2"
//               >
//                 <FaGithub
//                   size={24}
//                   className="text-gray-800 hover:text-blue-500"
//                 />
//               </a>
//             </div>
//             <div className="text-4xl ">13</div>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//             <div className="text-lg font-semibold mb-4 flex items-center">
//               Telegram Subscribers
//               <a
//                 href="https://t.me/happy1998071"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="ml-2"
//               >
//                 <FaTelegramPlane
//                   size={24}
//                   className="text-gray-800 hover:text-sky-400"
//                 />
//               </a>
//             </div>
//             <div className="text-4xl">50</div>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//             <div className="text-lg font-semibold mb-4">All time views</div>
//             <div className="text-4xl ">--</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
"use client";

import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { useTheme } from "next-themes";

const Dashboard = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 클라이언트에서만 렌더링
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 클라이언트 사이드 렌더링

  return (
    <div
      className={
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }
    >
      <Navbar />
      <div className="w-[50%] mx-auto mt-24">
        <div className="text-5xl font-bold mb-8">Dashboard</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* GitHub Followers Card */}
          <div
            className={`${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            } p-6 rounded-lg shadow-lg flex flex-col items-center`}
          >
            <div className="text-lg font-semibold mb-4 flex items-center">
              GitHub Followers
              <a
                href="https://github.com/azambembem"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2"
              >
                <FaGithub
                  size={24}
                  className={`${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  } hover:text-blue-500`}
                />
              </a>
            </div>
            <div className="text-4xl">13</div>
          </div>

          {/* Telegram Subscribers Card */}
          <div
            className={`${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            } p-6 rounded-lg shadow-lg flex flex-col items-center`}
          >
            <div className="text-lg font-semibold mb-4 flex items-center">
              Telegram Subscribers
              <a
                href="https://t.me/happy1998071"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2"
              >
                <FaTelegramPlane
                  size={24}
                  className={`${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  } hover:text-sky-400`}
                />
              </a>
            </div>
            <div className="text-4xl">50</div>
          </div>

          <div
            className={`${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            } p-6 rounded-lg shadow-lg flex flex-col items-center`}
          >
            <div className="text-lg font-semibold mb-4">All Time Views</div>
            <div className="text-4xl">--</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
