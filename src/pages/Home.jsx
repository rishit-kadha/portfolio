import Alert from "@/components/Sections/Alert";
import ContactMeSection from "@/components/Sections/ContactMeSection";
import Header from "@/components/Sections/Header";
import LandingSection from "@/components/Sections/LandingSection";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import Footer from "@/components/Sections/Footer";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Header id="header" />
      <LandingSection id="landing" />
      <ProjectsSection id="projects" />
      <ContactMeSection id="contact" />
      <Footer id="footer" />
      <Alert id="alert" />
    </div>
  );
};

export default Home;
