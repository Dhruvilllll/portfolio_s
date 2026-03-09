"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Expertise from "../components/Expertise";
import GithubActivity from "../components/GithubActivity";
import Community from "../components/Community";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-darkBg">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <div className="bg-mesh" />
          <Navbar />
          
          <section id="hero">
            <Hero />
          </section>

          <ScrollReveal>
            <section id="skills">
              <Skills />
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="projects">
              <Projects />
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="expertise">
              <Expertise />
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="GithubActivity">
              <GithubActivity />
            </section>
          </ScrollReveal>

          {/* <ScrollReveal>
            <section id="community">
              <Community />
            </section>
          </ScrollReveal> */}

          <ScrollReveal>
            <section id="contact">
              <Contact />
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="footer">
              <Footer />
            </section>
          </ScrollReveal>
        </>
      )}
    </main>
  );
}