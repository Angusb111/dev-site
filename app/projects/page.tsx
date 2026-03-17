import Image from "next/image";
import ProjectCard from '@/components/ProjectCard';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageSrc: string;
  status?: string;
  archive?: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: 'Auto Tyres Website',
    description: 'Branding Photography and Static Website Design. Business has changed hands since and original design is no longer in use.',
    technologies: ['HTML', 'PHP', 'CSS', 'Cloud Web Hosting', 'Photography'],
    imageSrc: '/autotyres.webp',
    status: 'Offline',
    archive: 'TRUE',
    link: 'https://web.archive.org/web/20240504200940/https://autotyresgisborne.co.nz/index.php',
  },
  {
    title: 'Developer Website',
    description: 'Modern Website Design to showcase my musings.',
    technologies: ['React', 'Typescript', 'Linux Web Hosting'],
    imageSrc: '/devsitesc.webp',
    status: 'Live',
    archive: 'FALSE',
    link: 'https://angusbodle.com',
  },
  {
    title: 'Photograpy Portfolio',
    description: 'Modern Website Design to showcase my Photos. Used Google Drive API for easy content management with my google cloud storage.',
    technologies: ['React', 'Typescript', 'Google Drive API', 'Linux Web Hosting'],
    imageSrc: '/photositesc.webp',
    status: 'Live',
    archive: 'FALSE',
    link: 'https://photo.angusbodle.com',
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-black">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-between py-32 px-16 bg-black sm:items-start">
        <div className="flex flex-row gap-5 items-center justify-between">
          <Image
            src="/logo.png"
            alt="My Logo"
            width={100}
            height={100}
            priority
          />
          <h1 className="max-w-2xl text-5xl font-semibold leading-15 tracking-tight text-zinc-50">
            Projects
          </h1>
        </div>

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">

          <div className="flex flex-row flex-wrap gap-4 p-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <a href="./pong.html" className="max-w-md text-lg leading-8 text-zinc-400">Play Pong</a>
        </div>
      </main>
    </div>
  );
}
