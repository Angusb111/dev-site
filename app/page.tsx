import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-black sm:items-start">
        <Image
          src="/logo.png"
          alt="My Logo"
          width={200}
          height={200}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xl text-7xl font-semibold leading-15 tracking-tight text-zinc-50">
            Angus Bodle
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-400">
            Web Developer -{" "}
            <a
              href="https://photo.angusbodle.com"
              className="font-medium text-zinc-50"
            >
              Photographer
            </a>{" "}
            - Trying
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-10 w-[fit-content] p-2 w-full items-center justify-around gap-2 rounded-sm bg-[#011818] border border-teal-300 text-teal-300 font-[consolas] transition-colors hover:bg-teal-950 dark:hover:bg-teal-950 md:w-[158px]"
            href="./projects"
            target="_self"
            rel="noopener noreferrer"
          >
            <Image
              src="/cog.svg"
              alt="wrench icon"
              width={20}
              height={20}
            />
            My Projects
          </a>
        </div>
        <a href="https://www.instagram.com/angusb.2737/" className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Instagram
        </a>
      </main>
    </div>
  );
}