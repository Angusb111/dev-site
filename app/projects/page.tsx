import Image from "next/image";

export default function Projects() {
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


          <div className="flex flex-col gap-2 pb-3 bg-[#111] shadow-none border border-teal-300 rounded-sm hover:shadow-[0px_0px_10px_#46edd5] transition-shadow max-w-xs text-white text-sm">
            <div className="flex flex-row gap-20 p-3 justify-between items-center"> 
              <p className="text-white text-2xl font-semibold">Auto Tyres</p>
              <div className="flex flex-row border border-teal-300 text-teal-300 rounded-sm items-center h-5">
                <p className="text-xs leading-none p-1 ps-2">Live</p>
                <div className="border border-teal-300 rounded-full h-2 w-2 m-2 ms-1"></div>
              </div>
            </div>
            <img src="https://autotyresgisborne.co.nz/images/220/14239563/AUTO_TYRES_COLOR.webp" className="p-4" alt="" />
            <p className="px-3">
              Branding Photography and Static Website Design. Business has changed hands since and original design no longer in use.
            </p>
            <p className="ps-3 pt-2">Technology Used:</p>
            <p className="ps-3">
              <ul className="list-disc ps-5">
                <li>HTML</li>
                <li>CSS</li>
                <li>Web Hosting</li>
                <li>Photography</li>
              </ul>
            </p>
          </div>


          <a
            className="flex h-10 w-[fit-content] p-2 w-full items-center justify-around gap-2 rounded-sm bg-[#011818] border border-teal-300 text-teal-300 font-[consolas] transition-colors hover:bg-teal-950 dark:hover:bg-teal-950 md:w-[158px]"
            href="https://angusbodle.com"
            target="_self"
            rel="noopener noreferrer"
          >
            <Image
              src="/cog.svg"
              alt="wrench icon"
              width={20}
              height={20}
            />
            This Website
          </a>
          <a href="./pong.html" className="max-w-md text-lg leading-8 text-zinc-400">Play Pong</a>
        </div>
      </main>
    </div>
  );
}
