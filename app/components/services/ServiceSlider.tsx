"use client";

import { Children, useEffect, useState, type ReactNode } from "react";
import styles from "./Services.module.css";
import SplitText from "../animations/SplitText";

interface Props {
  title: string;
  children: ReactNode;
  itemsPerView?: number;
}

const MOBILE_BREAKPOINT = 767;

function useResponsiveItemsPerView(desktopValue: number) {
  const [itemsPerView, setItemsPerView] = useState(desktopValue);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);

    const update = () => {
      setItemsPerView(mediaQuery.matches ? 1 : desktopValue);
    };

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, [desktopValue]);

  return itemsPerView;
}

export default function ServiceSlider({
  title,
  children,
  itemsPerView: itemsPerViewProp = 3,
}: Props) {
  const itemsPerView = useResponsiveItemsPerView(itemsPerViewProp);
  const slides = Children.toArray(children);
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(slides.length - itemsPerView, 0);

  // Index clampen, falls sich itemsPerView (z. B. durch Resize) ändert
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const handlePrev = () => setIndex((i) => Math.max(i - 1, 0));
  const handleNext = () => setIndex((i) => Math.min(i + 1, maxIndex));

  // Breite eines einzelnen Slides in %
  const slideWidth = 100 / itemsPerView;

  // Fortschritt der Paginator-Linie berechnen
  const progressWidth = Math.min((itemsPerView / slides.length) * 100, 100);
  const progressOffset =
    maxIndex === 0 ? 0 : (index / maxIndex) * (100 - progressWidth);

  return (
    <div className={styles.serviceSlider}>
      <div className={styles.header}>
        <SplitText
          delay={40}
          splitType="chars"
          tag="h2"
          text={title}
          textAlign="left"
        />

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.navButton}
            onClick={handlePrev}
            disabled={index === 0}
            aria-label="Zurück"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            className={styles.navButton}
            onClick={handleNext}
            disabled={index === maxIndex}
            aria-label="Weiter"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M7.5 5L12.5 10L7.5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.track}>
        <div
          className={styles.slidesWrapper}
          style={{
            transform: `translateX(-${index * slideWidth}%)`,
          }}
        >
          {slides.map((child, i) => (
            <div
              key={i}
              className={styles.slide}
              style={{ flex: `0 0 ${slideWidth}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {slides.length > itemsPerView && (
        <div className={styles.paginator}>
          <div
            className={styles.paginatorProgress}
            style={{
              width: `${progressWidth}%`,
              transform: `translateX(${
                (progressOffset / progressWidth) * 100
              }%)`,
            }}
          />
        </div>
      )}
    </div>
  );
}
