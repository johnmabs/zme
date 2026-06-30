import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import WhyChooseUs from "@/components/WhyChooseUs";
import Method from "@/components/Method";
import Projects from "@/components/Projects";
import StatsCounter from "@/components/StatsCounter";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <WhyChooseUs />
        <Method />
        <Projects />
        <StatsCounter />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
