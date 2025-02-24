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
        className="relative flex flex-col justify-between rounded-3xl p-6 bg-gray-100 dark:bg-gray-800 max-w-full transition-all duration-300 border-2 border-transparent hover:border-[#CDEA68]"
      >
        {/* Project Name */}
        <h1 className="mb-4 text-lg sm:text-xl font-semibold">{name}</h1>

        {/* Project Image - Fixed Size */}
        <div className="relative w-full h-56 md:h-68 lg:h-80 rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-105"
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
