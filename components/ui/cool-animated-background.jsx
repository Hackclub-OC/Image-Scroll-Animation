'use client'

import React from 'react'

export default function CoolAnimatedBackground({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-black">
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-40 w-40 animate-float rounded-full bg-purple-300 opacity-50 blur-2xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-60 w-60 animate-float animation-delay-2000 rounded-full bg-blue-300 opacity-50 blur-2xl"></div>
        <div className="absolute left-1/2 top-1/2 h-32 w-32 animate-float animation-delay-4000 rounded-full bg-pink-300 opacity-50 blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}