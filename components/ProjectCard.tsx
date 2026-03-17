import React from 'react';
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageSrc: string;
  status?: string;
  archive?: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageSrc,
  status,
  archive = "",
  link,
}) => {
  return (
    <div className="flex flex-col gap-0 pb-3 bg-[#111] shadow-none border border-teal-300 rounded-sm hover:shadow-[0px_0px_10px_#46edd5] transition-shadow max-w-xs text-white text-sm text-left">
      <div className="flex flex-row gap-0 p-4 justify-between items-center">
        <p className="text-white text-xl font-semibold">{title}</p>
        {status && (
          <div className="flex flex-row border border-teal-300 text-teal-300 rounded-sm items-center h-5">
            <p className="text-xs leading-none p-1 ps-2">{status}</p>
            <div
              className={`border rounded-full h-2 w-2 m-2 ms-1 ${status.includes("Live") ? "bg-green-400 border-none" : "border-teal-300"} ${status.includes("Offline") ? "bg-gray-500 border-none" : "border-teal-300"}`}
            ></div>
          </div>
        )}
      </div>
      <img src={imageSrc} className="p-4 pt-0" alt={title} />
      <p className="mx-4">{description}</p>
      <p className="pt-2 mx-4">Technology Used:</p>
      <ul className="list-disc mx-9">
        {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
        ))}
      </ul>
        {link && (
            <a
                className="flex h-7 p-2 gap-2 ms-4 mt-3 w-[fit-content] items-center justify-around rounded-sm bg-[#011818] border border-teal-300 text-teal-300 font-[consolas] transition-colors hover:bg-teal-950 dark:hover:bg-teal-950"
                href={link} target="_self" rel="noopener noreferrer"
            >
            <Image
                src="/arrowlink.svg"
                alt="wrench icon"
                width={20}
                height={20}
            />
                {archive.includes("TRUE") ? "View Archive" : "Check It Out"}
            </a>
        )}
    </div>
  );
};

export default ProjectCard;