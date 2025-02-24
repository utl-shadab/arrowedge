import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const QuoteSection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const cards = [
    { title: "Branding", color: "#AF5CE3" },
    { title: "Web Design", color: "#F65608" },
    { title: "Creative Layouts", color: "#C1DDCA" },
    { title: "UI/UX Design", color: "#E7D5CD" },
    { title: "Motion Graphics", color: "#E1E1D9" },
    { title: "Frontend Development", color: "#BB1C0D" },
    { title: "Digital Marketing", color: "#A6D9CE" },
    { title: "3D Design", color: "#FFDADA" }
  ];

  return (
    <section ref={sectionRef} className="w-full flex flex-col items-center py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl px-4">
        {cards.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            style={{ backgroundColor: item.color }}
            className="relative p-8 h-40 md:h-44 rounded-2xl text-black flex items-start justify-between transition-all duration-500 group overflow-hidden"
          >
            <h2 className="text-xl md:text-xl font-semibold">{item.title}</h2>
        
          </div>
        ))}
      </div>
      <div className="mt-16 max-w-2xl text-center px-4">
        <p className="text-lg md:text-xl font-light text-white">
          From brand consultancy throughout activation, we help companies to forge
          authentic and lasting relationships with their audience.
        </p>
        <a
          href="#contact"
          className="block mt-4 text-lg font-medium text-[#A6D9CE] underline underline-offset-4"
        >
        Contact Us 
        </a>
      </div>
    </section>
  );
};

export default QuoteSection;
