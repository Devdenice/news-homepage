import Cards from "@/components/Cards";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Side from "@/components/Side";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-3 overflow-x-clip">
      <Navbar />
      <div className="container md:flex   md:mt-10">
        <Hero />
        <Side />
      </div>
      <Cards />
    </main>
  );
}
