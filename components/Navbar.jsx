"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import {
  SunIcon,
  MoonIcon,
  GitHubLogoIcon,
  ContainerIcon,
  SectionIcon,
} from "@radix-ui/react-icons";
import Tooltip from "@mui/material/Tooltip";

export default function Navbar({ onToggleView }) {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";
  const [isGridView, setIsGridView] = useState(true);

  const handleToggleView = () => {
    setIsGridView((prev) => !prev);
    onToggleView();
  };

  return (
    <nav className="fixed max-w-xl border border-black dark:border-white w-full rounded-full mx-auto top-4 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 text-black dark:text-white p-2 flex items-center justify-between">
      <h1 className="text-xl ml-4 font-mono">Image Scroll Animation</h1>

      <div className="flex items-center">
        <Tooltip title="Toggle View" placement="bottom">
          <button
            onClick={handleToggleView}
            className="p-1 mr-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-neutral-800"
          >
            {isGridView ? (
              <ContainerIcon className="w-6 h-6 text-gray-800 dark:text-white transition-colors duration-500 icon-transition" />
            ) : (
              <SectionIcon className="w-6 h-6 text-gray-800 dark:text-white transition-colors duration-500 icon-transition" />
            )}
          </button>
        </Tooltip>

        <Tooltip title="Toggle View" placement="bottom">
        <a
          href="https://github.com/Hackclub-OC/Image-Scroll-Animation"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 mr-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-neutral-800"
        >
          <GitHubLogoIcon className="w-6 h-6 text-black dark:text-white transition-colors duration-500 icon-transition" />
        </a>
        </Tooltip>

        <Tooltip title="Toggle Theme" placement="bottom">
        <button
          onClick={() => setTheme(isDarkMode ? "light" : "dark")}
          className="p-1 mr-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-neutral-800"
        >
          {isDarkMode ? (
            <SunIcon className="w-6 h-6 text-white icon-transition" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-800 icon-transition" />
          )}
        </button>
        </Tooltip>
      </div>
    </nav>
  );
}

// "use client"

// import { useTheme } from "next-themes"
// import { SunIcon, MoonIcon, GitHubLogoIcon, ContainerIcon, SectionIcon } from "@radix-ui/react-icons"

// export default function Navbar({ onToggleView }) {
//   const { theme, setTheme } = useTheme()
//   const isDarkMode = theme === "dark"

//   return (
//     <nav className="fixed max-w-xl border border-black dark:border-white w-full rounded-full mx-auto top-4 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 text-black dark:text-white p-2 flex items-center justify-between">
//       <h1 className="text-xl ml-4 font-mono">Image Scroll Animation</h1>

//       <div className="flex items-center">
//         <button
//           onClick={onToggleView}
//           className="p-1 mr-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-neutral-800"
//         >
//           {isDarkMode ? (
//             <ContainerIcon className="w-6 h-6 text-white icon-transition" />
//           ) : (
//             <SectionIcon className="w-6 h-6 text-gray-800 icon-transition" />
//           )}
//         </button>
//         <a href="https://github.com/Hackclub-OC/Image-Scroll-Animation" target="_blank" rel="noopener noreferrer" className="p-1 mr-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-neutral-800">
//           <GitHubLogoIcon className="w-6 h-6 text-black dark:text-white icon-transition" />
//         </a>
//         <button
//           onClick={() => setTheme(isDarkMode ? "light" : "dark")}
//           className="p-1 mr-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-neutral-800"
//         >
//           {isDarkMode ? (
//             <SunIcon className="w-6 h-6 text-white icon-transition" />
//           ) : (
//             <MoonIcon className="w-6 h-6 text-gray-800 icon-transition" />
//           )}
//         </button>
//       </div>
//     </nav>
//   )
// }
