"use client";

import Image from "next/image";
import "./style.css"; 
import imagePaths from './constant.js';

export default function VerticalScroll() {
  return (
    <div className="max-w-4xl mx-auto py-16 text-gray-900 dark:text-gray-100">
      {imagePaths.map((imagePath, index) => (
        <div key={index} className="my-16 pb-8">
          <div className="image-container items-center justify-center flex">
            <Image
              src={imagePath}
              alt={`Image ${index + 1}`}
              width={700}
              height={350}
              className="rounded-lg transition-transform image-animation duration-700 ease-out cursor-pointer"
            />
          </div>
        </div>
      ))}
    </div>
  );
}