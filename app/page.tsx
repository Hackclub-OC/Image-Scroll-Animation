// import React from "react";
// import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

// function Home() {
//   return (
//     <BackgroundGradientAnimation
//       gradientBackgroundStart="rgb(255, 255, 255)" // White
//       gradientBackgroundEnd="rgb(255, 255, 255)" // Black
//       // firstColor="#2196F3" // Blue
//       // secondColor="#9C27B0" // Purple
//       // thirdColor="#2196F3" // Indigo (a shade of purple)
//       // fourthColor="#9C27B0" // Indigo (a shade of purple)
//       // fifthColor="#2196F3" // Indigo (a shade of purple)
//       className="my-class"
//       containerClassName="my-container-class"
      
//     >
//       <div
//         className="absolute z-50 inset-0 flex items-center justify-center  font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
//         <p
//           className="bg-clip-text text-7xl text-transparent drop-shadow-2xl bg-neutral-900">
//           Teju tu good ahe!!
//         </p>
//       </div>
//     </BackgroundGradientAnimation>
//   );
// }

// export default Home;

"use client"

import { useState } from "react"
import { ThemeProvider } from "next-themes"
import Navbar from "@/components/Navbar"
import VerticalScroll from "@/components/VerticalScroll"
import HorizontalScroll from "@/components/HorizontalScroll"

export default function Home() {
  const [showHorizontalScroll, setShowHorizontalScroll] = useState(false)

  return (
    <ThemeProvider attribute="class">
      <div className="bg-gradient-radial bg-gradient-to-tr from-purple-300 via-blue-400 to-green-300 dark:from-purple-900 dark:via-blue-950 dark:to-green-900">
        <div className="">
          <Navbar onToggleView={() => setShowHorizontalScroll(!showHorizontalScroll)} />
          {showHorizontalScroll ? <HorizontalScroll  /> : <VerticalScroll />}
        </div>
      </div>
    </ThemeProvider>
  )
}

//min-h-screen
//max-w-6xl mx-auto px-4 sm:px-6 lg:px-8