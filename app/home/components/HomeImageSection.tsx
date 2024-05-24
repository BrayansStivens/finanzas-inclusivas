"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function HomeImageSection({ images }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <section id="home_image" className="flex flex-col w-full h-auto relative">
      <div className="relative w-full h-0 pb-[32.4%] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image: any, index: number) => (
            <div
              key={index}
              className="relative w-full flex-shrink-0 h-0 pb-[32.4%]"
            >
              <Image
                src={image.src}
                alt={image.alt ? image.alt : "image"}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
        <button
          onClick={goToPrevious}
          className="bg-gray-800 text-white p-2 opacity-50"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={goToNext}
          className="bg-gray-800 text-white p-2 opacity-50"
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_: any, index: number) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`block w-3 h-3 rounded-full caret-transparent ${
              index === currentIndex
                ? "bg-white opacity-100"
                : "bg-gray-800 opacity-50"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default HomeImageSection;
