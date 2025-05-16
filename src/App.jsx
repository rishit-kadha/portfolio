import LandingSection from "./components/Sections/LandingSection";
import ProjectsSection from "./components/Sections/ProjectsSection";
import ContactMeSection from "./components/Sections/ContactMeSection";
import Header from "./components/Sections/Header";
import Footer from "./components/Sections/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="landing">
          <LandingSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="contact">
          <ContactMeSection />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
