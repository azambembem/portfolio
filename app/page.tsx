// 2
"use client";

import Navbar from "../components/Navbar";
import { useState } from "react";

const Home = () => {
  const wordComputer = "Computer";
  const wordEngineering = "Engineer";

  const [hoveredLetter, setHoveredLetter] = useState<number | null>(null);

  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-white text-black relative overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-2 z-0">
          {Array.from({ length: 25 }).map((_, index) => (
            <div
              key={index}
              className="w-full h-full bg-gray-300 opacity-0 animate-pulse"
              style={{
                animationDelay: `${index * 0.1}s`,
                transform: `rotate(${index % 2 === 0 ? "45deg" : "-45deg"})`
              }}
            />
          ))}
        </div>

        <h1 className="text-8xl z-10 font-bold tracking-wider flex space-x-2">
          {wordComputer.split("").map((char, index) => (
            <span
              key={index}
              onMouseEnter={() => setHoveredLetter(index)}
              onMouseLeave={() => setHoveredLetter(null)}
              className="inline-block transition-transform duration-100 ease-in-out"
              style={{
                transform: hoveredLetter === index ? "translateY(-5px)" : ""
              }}
            >
              {char}
            </span>
          ))}
        </h1>

        <div className="mt-8">
          <h1 className="text-9xl mt-6 z-10 font-bold tracking-wider flex space-x-2">
            {wordEngineering.split("").map((char, index) => (
              <span
                key={index}
                onMouseEnter={() =>
                  setHoveredLetter(index + wordComputer.length)
                }
                onMouseLeave={() => setHoveredLetter(null)}
                className="inline-block transition-transform duration-100 ease-in-out"
                style={{
                  transform:
                    hoveredLetter === index + wordComputer.length
                      ? "translateY(-5px)"
                      : ""
                }}
              >
                {char}
              </span>
            ))}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
