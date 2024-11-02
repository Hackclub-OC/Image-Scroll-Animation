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
      <div className="bg-neutral-100 dark:bg-neutral-800 text-gray-900 dark:text-gray-100 ">
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