import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image"; // Import the Image component

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    // Animate the heading and images
    tl.from(heroRef.current.querySelectorAll(".animate-text"), {
      opacity: 0,
      y: 50,
      stagger: 0.3,
    }).from(
      heroRef.current.querySelectorAll(".animate-image"),
      {
        opacity: 0,
        scale: 0.8,
        stagger: 0.2,
      },
      "-=0.5"
    );

    // Animate the footer text
    tl.from(
      heroRef.current.querySelectorAll(".animate-footer"),
      {
        opacity: 0,
        y: 20,
        stagger: 0.2,
      },
      "-=0.5"
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="w-full h-full md:min-h-screen flex flex-col justify-center items-start bg-white text-black p-6 md:p-16 relative overflow-hidden"
    >
      {/* Main Heading */}
      <div className="text-left mt-20">
        {/* Line 1 */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold animate-text flex items-center">
          <Image
            src="https://res.cloudinary.com/dynz767iy/image/upload/v1740446738/arrowedge/hero/win_wgkihq.png"
            alt="Logo"
            width={80} // Set width
            height={80} // Set height
            className="w-12 h-12 md:w-20 md:h-20 animate-image"
          />{" "}
          WE CREATE
        </h1>

        {/* Line 2 */}
        <div className="flex items-center gap-4 animate-text">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-extrabold flex items-center">
            <Image
              src="https://res.cloudinary.com/dynz767iy/image/upload/v1740446737/arrowedge/hero/shocked_ajyqtj.png"
              alt="Logo"
              width={80} 
              height={80} 
              className="w-12 h-12 md:w-20 md:h-20 animate-image"
            />
            - OPENING
          </h2>
        </div>

        {/* Line 3 */}
        <h3 className="text-4xl md:text-7xl lg:text-8xl font-extrabold animate-text flex items-center">
          PRESENTATIONS{" "}
          <Image
            src="https://res.cloudinary.com/dynz767iy/image/upload/v1740446738/arrowedge/hero/keepgoing_ueq6on.png"
            alt="Logo"
            width={80} 
            height={80} 
            className="w-12 h-12 md:w-20 md:h-20 animate-image"
          />
        </h3>
      </div>

      {/* Footer Text */}
      <div className="flex flex-col md:flex-row justify-between w-full text-gray-500 text-sm md:text-base mt-10 border-t-2 border-black pt-10 animate-footer">
        <p>For public and private companies</p>
        <p>From the first pitch to IPO</p>
      </div>
    </section>
  );
};

export default HeroSection;