import Image from "next/image";

export default function Projects() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          src="/logo.png"
          alt="My Logo"
          width={200}
          height={200}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-s text-7xl font-semibold leading-15 tracking-tight text-black dark:text-zinc-50">
            AT Some Point, there will be a list of projects here
          </h1>
        </div>
      </main>
    </div>
  );
}
