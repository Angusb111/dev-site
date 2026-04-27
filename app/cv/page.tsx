import Image from "next/image";

import "./cv.css";

export default function CV() {
  return (
    <div className="text-[#25282b] relative flex min-h-screen items-center justify-center font-sans bg-[#f1eee9]">

      <div
      className="fixed inset-0 opacity-40 
      bg-[radial-gradient(#000000_0.3px,transparent_1px)]
      [background-size:32px_32px]"
      />

      <main className="relative flex min-h-screen w-full max-w-6xl flex-col md:py-32 md:px-16 px-6 sm:items-start">

        {/* Header */}
        <div className="flex flex-col-reverse sm:flex-row w-full gap-5 bg-[#fffcfc] items-center justify-between mb-16 p-8">

          <div className="flex flex-col gap-12">          
            <h1 className="text-7xl font-bold text-[#25282b]">Angus Bodle</h1>
            {/* Hero */}
            <section className="max-w-xl">
              <p className="text-lg text-slate-800">
                Developer, photographer, and builder of interesting things. I enjoy
                working on creative technical projects, mixing good challenges with opportunities to design beautiful software.
              </p>
            </section>
          </div>
          
          <div className="relative w-48 h-48">
            <div className="absolute bottom-[6px] left-0 w-48 z-20 mask-clip-border">
              <Image
                className="rounded-b-[120%]"
                src="/m2e.png"
                alt="My Logo"
                width={1000}
                height={1000}
                priority
              />
            </div>
            <div className="absolute top-12 left-[24px] border-x-6 border-t-36 border-[#438349] w-6/8 h-3/8 rounded-t-full z-0 shadow-cyan-500/70"></div>
            <div className="absolute bottom-0 left-[24px] border-x-6 border-b-6 border-[#438349] w-6/8 h-3/8 rounded-b-full z-40 shadow-cyan-500/70"></div>
          </div>
          
          
        </div> 

        

        <section className="flex flex-col sm:flex-row gap-6 w-full px-0 lg:px-16 justify-center">

          {/* Achievements */}
          <section className="w-full sm:w-2/5 lg:w-3/5 mb-16">
            <h3 className="text-3xl font-semibold mb-8">Achievements</h3>

            <div className="space-y-6">

              <div className="bg-[#fffcfc] border-slate-800 rounded-xl p-6 shadow-lg">
                <h4 className="font-semibold text-xl">EIT Tairāwhiti</h4>
                <p className="text-sm font-bold mb-2">2021 – 2024</p>
                <p className=" text-sm mb-2">
                  Bachelor of Computing Systems (Intelligent Systems)
                </p>
                <ul className=" text-sm list-disc list-inside space-y-1">
                  <li>EiT Tairāwhiti Valedictorian 2024</li>
                  <li>Cyclone Computer Company Award – Academic Excellence</li>
                </ul>
              </div>

              <div className="bg-[#fffcfc] border-slate-800 rounded-xl p-6 shadow-lg">
                <h4 className="font-semibold text-xl">Lytton High School</h4>
                <p className="text-sm font-bold mb-2">2016 – 2020</p>
                <ul className="text-sm list-disc list-inside space-y-1">
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
            <div className="bg-[#438349] border-slate-800 rounded-[80%_20%_55%_45%/30%_70%_25%_75%] p-6 mt-6 shadow-lg">
              <h3 className="text-4xl font-semibold mb-4 !text-[#a9d17c] w-full flex justify-center">Projects</h3>
              <div className="flex w-full justify-center flex-col items-center pb-8">
                <a
                  href="/projects"
                  className="hover:underline"
                >
                  View my projects →
                </a>
                <sub>(or go to https://angusbodle.nz/projects)</sub>
              </div>
            </div>
          </section>



          
          <section className="w-full sm:w-3/10 lg:w-2/5 mb-16">
            {/* Contact */}
            <div className="bg-[#438349] border-slate-800 rounded-[35%_75%_25%_65%/85%_15%_60%_40%] p-6 mt-6 shadow-lg mb-6">
              <h3 className="text-4xl font-semibold mb-4 !text-[#a9d17c] w-full flex justify-center">Contact</h3>
              <div className="flex w-full justify-center flex-col items-center pb-8">
                <p className="text-sm">
                  Email: bodlea1@cloudfolio.co.nz
                </p>
                <p className="text-sm">
                  Website: angusbodle.nz
                </p>
              </div>
            </div>
            
            {/* Skills */}

            <h3 className="text-3xl font-semibold mb-8">Skills</h3>

            <div className="grid md:grid-rows-3 gap-6">

              <div className="bg-[#fffcfc] border-slate-800 rounded-xl p-6 shadow-lg">
                <h4 className="font-semibold text-xl mb-2">Development</h4>
                <ul className="text-sm space-y-1">
                  <li>JavaScript / TypeScript</li>
                  <li>Next.js</li>
                  <li>Node.js</li>
                  <li>Web APIs</li>
                </ul>
              </div>

              <div className="bg-[#fffcfc] border-slate-800 rounded-xl p-6 shadow-lg">
                <h4 className="font-semibold text-xl mb-2">Infrastructure</h4>
                <ul className="text-sm space-y-1">
                  <li>Linux Servers <sup>(serving this page!)</sup></li>
                  <li>Docker</li>
                  <li>Nginx</li>
                  <li>Networking</li>
                </ul>
              </div>

              <div className="bg-[#fffcfc] border-slate-800 rounded-xl p-6 shadow-lg">
                <h4 className="font-semibold text-xl mb-2">Creative</h4>
                <ul className="text-sm space-y-1">
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
          <section className="w-full mb-16 sm:px-16">
            <h3 className="text-3xl font-semibold mb-8">Experience</h3>
            <div className="flex flex-col sm:flex-row gap-6">  
              <div className="space-y-6 w-full sm:w-1/2">

                <div className="bg-[#fffcfc] border-slate-800 rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold text-xl">Qube Ports NZ</h4>
                  <p className="text-sm font-bold mb-2">IT Operations / Junior Systems Engineer</p>
                  <p className="text-sm">
                    Hands-on IT support across live port environments, working with networks, wireless deployments,
                    CCTV systems, and operational infrastructure in safety-critical, industrial settings.
                  </p>
                </div>


                <div className="bg-[#fffcfc] border-slate-800 rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold text-xl">Te Whatu Ora Tairāwhiti</h4>
                  <p className="text-sm font-bold mb-2">Software Development Intern</p>
                  <p className="text-sm">
                    Completed a structured internship in 2023, leading the development of a new ACC billing system.
                    Focused on designing and implementing a practical software solution to improve efficiency and
                    streamline internal healthcare processes.
                  </p>
                </div>
              </div>


              <div className="space-y-6 w-full sm:w-1/2">
                <div className="bg-[#fffcfc] border-slate-800 rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold text-xl">
                    Developer / Technical Projects
                  </h4>
                  <p className="text-sm font-bold mb-2">
                    Freelance / Personal
                  </p>
                  <p className="text-sm">
                    Built mapping platforms with POIs and wiki integrations,
                    automated data systems, and experimental development projects.
                  </p>
                </div>

                <div className="bg-[#fffcfc] border-slate-800 rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold text-xl">
                    Photography
                  </h4>
                  <p className="text-sm font-bold mb-2">
                    Freelance
                  </p>
                  <p className="text-sm">
                    Landscape, wildlife, sports, and event photography capturing 
                    natural environments and dynamic moments. Produced annual calendars for 3 years - selling in local stores.
                  </p>
                </div>
              </div>
            </div>
          </section>

        <footer className="text-sm text-slate-400">
          © 2026 Angus Bodle
          
        </footer>
        <div className="w-full flex justify-center pt-24">
          <Image
              className="w-20 invert"
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
