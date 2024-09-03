import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import OutTeam from "@/components/OutTeam";

export default function Home() {
  return (
    <main className="relative">
      <div className="sticky top-0 h-[768px] flex flex-col items-center justify-center">
        <Hero />
      </div>
      <div className="sticky top-0 h-[768px] flex flex-col items-center justify-center bg-indigo-600 text-white">
        <OutTeam />
      </div>
      <div className="sticky top-0 h-[768px] flex flex-col items-center justify-center bg-purple-600 text-white">
        <OutTeam />

      </div>
      <div className="sticky top-0 h-[768px] flex flex-col items-center justify-center bg-neutral-800 text-white">
        <OutTeam />

      </div>
    </main>
  );
}
