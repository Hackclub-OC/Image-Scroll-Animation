"use client";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <nav className="fixed max-w-xl border border-black dark:border-white w-full rounded-full mx-auto top-4 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 text-black dark:text-white p-2 flex items-center justify-between">
      <h1 className="text-xl ml-4 font-mono">Image Scroll Animation</h1>
      
      <div className="flex items-center">
      <a href="https://github.com/Hackclub-OC/Image-Scroll-Animation" target="_blank" rel="noopener noreferrer" className="p-1 mr-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-neutral-800">
          <GitHubLogoIcon className="w-6 h-6 text-black dark:text-white " />
        </a>
        <button
          onClick={() => setTheme(isDarkMode ? "light" : "dark")}
          className="p-1 mr-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-neutral-800"
        >
          {isDarkMode ? (
            <SunIcon className="w-6 h-6 text-white" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-800" />
          )}
        </button>
        
      </div>
    </nav>
  );
}