import styles from "./ProjectTile.module.scss";
import Image from "next/image";
import React, { MutableRefObject, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { IProject } from "../../constants";

const ProjectTile = ({
  project,
}: {
  project: IProject;
  animationEnabled: boolean;
}) => {
  const projectCard: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const { name, image, description, url } = project;

  useEffect(() => {
    if (projectCard.current) {
      VanillaTilt.init(projectCard.current, {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        gyroscope: false,
      });
    }
  }, []);

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group block overflow-hidden rounded-3xl snap-start"
    >
      <div
        ref={projectCard}
        className="relative flex flex-col justify-between rounded-3xl p-6 bg-white text-black max-w-full transition-all duration-300 border-2 border-transparent hover:border-[#CDEA68]"
      >
        {/* Project Name */}
        <h1 className="mb-4 text-lg sm:text-xl font-semibold">{name}</h1>

        {/* Project Image - Fixed Size */}
        <div className="relative w-full min-h-[260px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] xl:min-h-[270px] rounded-xl overflow-hidden">
        <img
        src={image}
        alt={name}
        className="w-full h-auto max-h-[270px] object-contain transition-transform duration-500 group-hover:scale-105"
      />
        </div>


        {/* Description */}
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </a>
  );
};

export default ProjectTile;
