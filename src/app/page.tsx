import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import Certifications from "@/components/Certifications";
import References from "@/components/References";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Certifications />
        <Leadership />
        <References />
      </main>
      <Footer />
    </div>
  );
}
