import { gsap } from "gsap";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const quoteRef: MutableRefObject<HTMLDivElement> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  const [willChange, setWillChange] = useState(false);

  const initAboutAnimation = (
    quoteRef: MutableRefObject<HTMLDivElement>,
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const timeline = gsap.timeline({
      defaults: { ease: "power2.inOut", duration: 1 },
    });

    // Animate the first part of the quote
    timeline
      .fromTo(
        quoteRef.current.querySelector(".about-1"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0 }
      )
      .to(quoteRef.current.querySelector(".about-1"), {
        opacity: 0,
        y: -20,
        delay: 0.5,
      });

    // Animate the second part of the quote
    timeline
      .fromTo(
        quoteRef.current.querySelector(".about-2"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0 },
        "-=0.5" // Overlap with the previous animation
      )
      .to(quoteRef.current.querySelector(".about-2"), {
        opacity: 0,
        y: -20,
        delay: 0.5,
      });

    // Create ScrollTrigger
    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: targetSection.current,
      start: "top 70%", // Adjust start position
      end: "bottom 30%", // Adjust end position
      scrub: 1, // Smooth scrubbing
      animation: timeline,
      onToggle: (self) => setWillChange(self.isActive),
      onUpdate: (self) => {
        if (self.progress > 0.1 && self.progress < 0.9) {
          setWillChange(true);
        } else {
          setWillChange(false);
        }
      },
    });

    return scrollTriggerInstance;
  };

  useEffect(() => {
    const aboutScrollTriggerInstance = initAboutAnimation(quoteRef, targetSection);

    // Cleanup ScrollTrigger on unmount
    return () => {
      aboutScrollTriggerInstance.kill();
    };
  }, [quoteRef, targetSection]);

  const renderQuotes = (): React.ReactNode => (
    <h1
      ref={quoteRef}
      className="font-medium text-3xl sm:text-4xl md:text-6xl"
    >
      <span
        className={`about-1 leading-tight ${
          willChange ? "will-change-opacity" : ""
        }`}
      >
        I am a passionate UI Engineer who bridges the gap between development
        and design.{" "}
      </span>
      <span
        className={`about-2 leading-tight ${
          willChange ? "will-change-opacity" : ""
        }`}
      >
        I take responsibility to craft a good user experience using modern
        frontend architecture.
      </span>
    </h1>
  );

  return (
    <section
      className={`tall:pt-20 tall:pb-16 pt-40 pb-24 w-full relative select-none section-container`}
      ref={targetSection}
    >
      {renderQuotes()}
    </section>
  );
};

export default AboutSection;