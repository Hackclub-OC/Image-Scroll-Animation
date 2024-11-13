'use client'

import React from 'react'

export default function ContinuousMovingBackground({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-black">
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] animate-first rounded-full bg-purple-300 opacity-30 mix-blend-multiply"></div>
        <div className="absolute -right-1/4 -bottom-1/4 h-[600px] w-[600px] animate-second rounded-full bg-blue-300 opacity-30 mix-blend-multiply"></div>
        <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] animate-third rounded-full bg-pink-300 opacity-30 mix-blend-multiply"></div>
        <div className="absolute right-1/4 bottom-1/4 h-[800px] w-[800px] animate-fourth rounded-full bg-yellow-200 opacity-30 mix-blend-multiply"></div>
        <div className="absolute left-1/3 top-1/3 h-[500px] w-[500px] animate-fifth rounded-full bg-green-300 opacity-30 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}