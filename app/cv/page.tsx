import Image from "next/image";

export default function CV() {
  return (
    <div className="text-white relative flex min-h-screen items-center justify-center font-sans bg-[#060609]">

        <div
        className="fixed inset-0 opacity-40 
        bg-[radial-gradient(#92ac97_0.3px,transparent_1px)]
        [background-size:32px_32px]"
        />

        <main className="relative flex min-h-screen w-full max-w-5xl flex-col md:py-32 md:px-16 px-6 sm:items-start">

        {/* Header */}
        <div className="flex flex-row w-full gap-5 items-center justify-between mb-16">
          
          <h1 className="text-7xl font-bold">Angus Bodle</h1>
          <div className="relative w-48 h-48">
            <div className="absolute bottom-[6px] left-0 w-48 z-20 mask-clip-border ">
              <Image
                className="rounded-b-[120%]"
                src="/m2e.png"
                alt="My Logo"
                width={1000}
                height={1000}
                priority
              />
            </div>
            <div className="absolute top-12 left-[24px] border-x-6 border-t-6 border-cyan-500 w-6/8 h-3/8 rounded-t-full z-0 shadow-cyan-500/70"></div>
            <div className="absolute bottom-0 left-[24px] border-x-6 border-b-6 border-cyan-500 w-6/8 h-3/8 rounded-b-full z-40 shadow-cyan-500/70"></div>
          </div>
          
          
        </div>

        {/* Hero */}
        <section className="mb-16 max-w-xl">
          <h2 className="text-4xl font-bold mb-4 text-white">Hi, I'm Angus</h2>
          <p className="text-lg text-slate-400">
            Developer, photographer, and builder of interesting things. I enjoy
            working on creative technical projects, mixing good challenges with opportunities to design beautiful software.
          </p>
        </section>

        <section className="flex flex-row gap-6 w-full">

          {/* Qualifications */}
          <section className="w-3/5 mb-16">
            <h3 className="text-2xl font-semibold mb-8">Achievements</h3>

            <div className="space-y-6">

              <div className="bg-[#0c111a] border-slate-800 rounded-xl p-6 border shadow-sm">
                <h4 className="font-semibold text-lg">EIT Tairāwhiti</h4>
                <p className="text-sm text-slate-400 mb-2">2021 – 2024</p>
                <p className="text-slate-200 text-sm mb-2">
                  Bachelor of Computing Systems (Intelligent Systems)
                </p>
                <ul className="text-slate-300 text-sm list-disc list-inside space-y-1">
                  <li>EiT Tairāwhiti Valedictorian 2024</li>
                  <li>Cyclone Computer Company Award – Academic Excellence</li>
                </ul>
              </div>

              <div className="bg-[#0c111a] border-slate-800 rounded-xl p-6 border shadow-sm">
                <h4 className="font-semibold text-lg">Lytton High School</h4>
                <p className="text-sm text-slate-400 mb-2">2016 – 2020</p>
                <ul className="text-slate-300 text-sm list-disc list-inside space-y-1">
                  <li>Prefect (2020)</li>
                  <li>Award of Merit – Principal’s Recognition</li>
                  <li>Academic Excellence – Programming, Building, Business, Biology</li>
                  <li>1st Overall – Programming</li>
                  <li>Ethel Wharehinga Memorial Award for IT</li>
                  <li>Chris Goodall Memorial Trophy</li>
                </ul>
              </div>

            </div>
            {/* Projects link */}
            <section className="mb-16 mt-16">
              <h3 className="text-2xl font-semibold mb-4">Projects</h3>
              <a
                href="/projects"
                className="text-slate-400 hover:underline"
              >
                View my projects →
              </a>
              <br/><sub>(or go to https://angusbodle.nz/projects)</sub>
            </section>
          </section>



          {/* Skills */}
          <section className="w-2/5 mb-16">
            <h3 className="text-2xl font-semibold mb-8">Skills</h3>

            <div className="grid md:grid-rows-3 gap-6">

              <div className="bg-[#0c111a] border-slate-800 rounded-xl p-6 shadow-sm border">
                <h4 className="font-semibold text-lg mb-2">Development</h4>
                <ul className="text-slate-200 text-sm space-y-1">
                  <li>JavaScript / TypeScript</li>
                  <li>Next.js</li>
                  <li>Node.js</li>
                  <li>Web APIs</li>
                </ul>
              </div>

              <div className="bg-[#0c111a] border-slate-800 rounded-xl p-6 shadow-sm border">
                <h4 className="font-semibold text-lg mb-2">Infrastructure</h4>
                <ul className="text-slate-200 text-sm space-y-1">
                  <li>Linux Servers <sup>(serving this page!)</sup></li>
                  <li>Docker</li>
                  <li>Nginx</li>
                  <li>Networking</li>
                </ul>
              </div>

              <div className="bg-[#0c111a] border-slate-800 rounded-xl p-6 shadow-sm border">
                <h4 className="font-semibold text-lg mb-2">Creative</h4>
                <ul className="text-slate-200 text-sm space-y-1">
                  <li>Photography</li>
                  <li>UX/UI Design</li>
                  <li>Mapping Tools</li>
                  <li>3D Printing</li>
                </ul>
              </div>
            </div>
          </section>


        </section>
        
          {/* Experience */}
          <section className="w-full mb-16">
            <h3 className="text-2xl font-semibold mb-8">Experience</h3>
            <div className="flex flex-row gap-6">  
              <div className="space-y-6 w-1/2">

                <div className="bg-[#0c111a] border-slate-800 rounded-xl p-6 border shadow-sm">
                  <h4 className="font-semibold text-lg">Qube Ports NZ</h4>
                  <p className="text-sm text-slate-400 mb-2">IT Operations / Junior Systems Engineer</p>
                  <p className="text-slate-200 text-sm">
                    Hands-on IT support across live port environments, working with networks, wireless deployments,
                    CCTV systems, and operational infrastructure in safety-critical, industrial settings.
                  </p>
                </div>


                <div className="bg-[#0c111a] border-slate-800 rounded-xl p-6 border shadow-sm">
                  <h4 className="font-semibold text-lg">Te Whatu Ora Tairāwhiti</h4>
                  <p className="text-sm text-slate-400 mb-2">Software Development Intern</p>
                  <p className="text-slate-200 text-sm">
                    Completed a structured internship in 2023, leading the development of a new ACC billing system.
                    Focused on designing and implementing a practical software solution to improve efficiency and
                    streamline internal healthcare processes.
                  </p>
                </div>
              </div>


              <div className="space-y-6 w-1/2">
                <div className="bg-[#0c111a] border-slate-800 rounded-xl p-6 border shadow-sm">
                  <h4 className="font-semibold text-lg">
                    Developer / Technical Projects
                  </h4>
                  <p className="text-sm text-slate-400 mb-2">
                    Freelance / Personal
                  </p>
                  <p className="text-slate-200 text-sm">
                    Built mapping platforms with POIs and wiki integrations,
                    automated data systems, and experimental development projects.
                  </p>
                </div>

                <div className="bg-[#0c111a] border-slate-800 rounded-xl p-6 border shadow-sm">
                  <h4 className="font-semibold text-lg">
                    Photography
                  </h4>
                  <p className="text-sm text-slate-400 mb-2">
                    Freelance
                  </p>
                  <p className="text-slate-200 text-sm">
                    Landscape, wildlife, sports, and event photography capturing 
                    natural environments and dynamic moments.
                  </p>
                </div>
              </div>
            </div>
          </section>
        

        {/* Contact */}
        <section className="w-full mb-16">
          <h3 className="text-2xl font-semibold mb-6">Contact</h3>

          <div className="bg-[#0c111a] border-slate-800 rounded-xl p-6 border shadow-sm">
            <p className="text-slate-200 text-sm">
              Email: bodlea1@cloudfolio.co.nz
            </p>
            <p className="text-slate-200 text-sm">
              Website: angusbodle.nz
            </p>
          </div>
        </section>

        <footer className="text-sm text-slate-400">
          © 2026 Angus Bodle
          
        </footer>
        <div className="w-full flex justify-center pt-24">
          <Image
              className="w-20"
              src="/logo.png"
              alt="My Logo"
              width={400}
              height={400}
              priority
            />
        </div>

      </main>
    </div>
  );
}
