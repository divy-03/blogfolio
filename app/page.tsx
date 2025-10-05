import Hero from "@/components/Hero";
import MagicBento from "@/components/MagicBento";

export default function Home() {
  return (
    // <div className="home w-screen h-screen flex items-center justify-center relative">
    <div>
      <Hero />
      <section className="w-screen min-h-screen flex flex-col items-center justify-center relative">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl pt-8 font-bold font-(family-name:--monocraft)">My Projects</h2>
        </div>
        <MagicBento />
      </section>
    </div>
  );
}
