'use client'

import React, { useState, useLayoutEffect, useRef, useCallback } from 'react'

const Circle = ({ 
  color, 
  size, 
  position,
  isColliding
}: { 
  color: string
  size: number
  position: { x: number; y: number }
  isColliding: boolean
}) => {
  return (
    <div
      className={`absolute rounded-full ${isColliding ? 'mix-blend-screen' : ''}`}
      style={{
        backgroundColor: color,
        width: `${size}px`,
        height: `${size}px`,
        left: `${position.x}px`,
        top: `${position.y}px`,
        filter: `blur(${size / 10}px)`,
        opacity: 0.5,
      }}
    />
  )
}

export default function DynamicCirclesBackground({ children }: { children: React.ReactNode }) {
  const [circle1, setCircle1] = useState({ x: 100, y: 100 })
  const [circle2, setCircle2] = useState({ x: 300, y: 300 })
  const [isColliding, setIsColliding] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const checkCollision = useCallback(() => {
    const distance = Math.sqrt(
      Math.pow(circle1.x - circle2.x, 2) + Math.pow(circle1.y - circle2.y, 2)
    )
    setIsColliding(distance < 300)
  }, [circle1, circle2])

  const updateCirclePositions = useCallback((cursorX: number, cursorY: number) => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect()
      const newCircle1 = {
        x: Math.max(0, Math.min(cursorX - 200, width - 400)),
        y: Math.max(0, Math.min(cursorY - 200, height - 400))
      }
      const newCircle2 = {
        x: Math.max(0, Math.min(cursorX + 200, width - 400)),
        y: Math.max(0, Math.min(cursorY + 200, height - 400))
      }
      setCircle1(newCircle1)
      setCircle2(newCircle2)
    }
  }, [])

  useLayoutEffect(() => {
    checkCollision()
  }, [circle1, circle2, checkCollision])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isHovering && containerRef.current) {
      const { left, top } = containerRef.current.getBoundingClientRect()
      updateCirclePositions(e.clientX - left, e.clientY - top)
    }
  }, [isHovering, updateCirclePositions])

  const handleMouseEnter = useCallback(() => setIsHovering(true), [])
  const handleMouseLeave = useCallback(() => setIsHovering(false), [])

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-screen overflow-hidden bg-white text-black"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Circle
        color={isColliding ? '#8B5CF6' : '#3B82F6'}
        size={400}
        position={circle1}
        isColliding={isColliding}
      />
      <Circle
        color={isColliding ? '#8B5CF6' : '#8B5CF6'}
        size={400}
        position={circle2}
        isColliding={isColliding}
      />
      <div ref={contentRef} className="relative z-10">
        {children}
      </div>
    </div>
  )
}