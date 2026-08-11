"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Slider.module.css";

interface SliderProps {
  images: Array<{ id?: number; url: string; alt?: string }>;
}

export default function ImageSlider({ images }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.sliderWrapper}>
      {/* Linker Pfeil */}
      {images.length > 1 && (
        <button onClick={prevSlide} className={`${styles.arrow} ${styles.leftArrow}`} aria-label="Vorheriges Bild">
          &#10094;
        </button>
      )}

      {/* Das aktuelle Bild */}
      <div className={styles.imageContainer}>
        <Image
          src={images[currentIndex].url}
          alt={images[currentIndex].alt || `Slide ${currentIndex + 1}`}
          width={1200}
          height={600}
          priority
        />
      </div>

      {/* Rechter Pfeil */}
      {images.length > 1 && (
        <button onClick={nextSlide} className={`${styles.arrow} ${styles.rightArrow}`} aria-label="Nächstes Bild">
          &#10095;
        </button>
      )}

      {/* Kleine Punkte unten (Indikatoren) */}
      {images.length > 1 && (
        <div className={styles.dots}>
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ""}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      )}
    </div>
  );
}