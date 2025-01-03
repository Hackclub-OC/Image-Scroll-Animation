'use client'

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import imagePaths from './constant.js';


export default function HorizontalScroll() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const totalImages = imagePaths.length
  const imageWidth = 60 //width of the image
  const imageGap = 10 // gap between images
  const startEndPadding = 15 //padding left and right of the images
  const containerWidth = totalImages * (imageWidth + imageGap) + 1.5 * startEndPadding // total horizontal width

  const translateX = -(scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * (containerWidth - 100)

  return (
    <div className="relative h-[1550vh]"> {/* select height with ratio to the speed you want if you select more height horizontal scroll will take more time and vice versa */}
      <div className="sticky top-28 left-5 h-[calc(100vh-6rem)] overflow-hidden"> {/* top value for distance from top and this height is height of the image */}
        <div
          ref={containerRef}
          className="flex transition-transform duration-300 ease-out absolute top-0 left-0"
          style={{
            transform: `translateX(calc(${translateX}vw + ${startEndPadding}vw))`,
            width: `${containerWidth}vw`,
          }}
        >
          {imagePaths.map((imagePath, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 relative"
              style={{
                width: `${imageWidth}vw`,
                height: 'calc(100vh - 14rem)',
                marginRight: `${imageGap}vw`
              }}
            >
              <div className="absolute inset-4 rounded-lg overflow-hidden">
                <Image
                  src={imagePath}
                  alt={`Image ${index + 1}`}
                  fill
                  // sizes="60vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}