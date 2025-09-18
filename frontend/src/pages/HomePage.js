import React, { useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MacronutrientsSection from "../components/MacronutrientsSection";
import RecipesSection from "../components/RecipesSection";
import WorkoutSection from "../components/WorkoutSection";
import HydrationSection from "../components/HydrationSection";
import Footer from "../components/Footer";

const HomePage = () => {
  useEffect(() => {
    // Initialize AOS animations when component mounts
    const initAOS = () => {
      if (window.AOS) {
        window.AOS.init({
          duration: 600,
          easing: 'ease-in-out',
          once: true
        });
      }
    };

    // Add AOS script if not already loaded
    if (!document.querySelector('link[href*="aos.css"]')) {
      const aosCSS = document.createElement('link');
      aosCSS.rel = 'stylesheet';
      aosCSS.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
      document.head.appendChild(aosCSS);
    }

    if (!window.AOS) {
      const aosScript = document.createElement('script');
      aosScript.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
      aosScript.onload = initAOS;
      document.body.appendChild(aosScript);
    } else {
      initAOS();
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MacronutrientsSection />
        <RecipesSection />
        <WorkoutSection />
        <HydrationSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;