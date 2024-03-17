import HeroSection from "@/src/common/components/hero";
import AboutSection from "@/src/module/about/about";
import Contact from "@/src/module/contact/Contact";
import Education from "@/src/module/education/education";
import Experience from "@/src/module/experience/experience";
// import GithubGraph from "@/src/module/github/GithubGraph";
import Projects from "@/src/module/projects/projects";
import Skills from "@/src/module/skills/skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      {/* <GithubGraph /> */}
      <Contact />
    </>
  );
}
