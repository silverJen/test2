import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import Flow from "@/components/Flow";
import TechStack from "@/components/TechStack";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <UseCases />
      <Flow />
      <TechStack />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
