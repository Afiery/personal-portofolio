import About from "@/components/about";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <About />
      <Education />
      <Experience />
      <Projects />
    </div>
  );
}
