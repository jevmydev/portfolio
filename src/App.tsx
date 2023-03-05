import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import SkillsSlider from "./components/Skills/SkillsSlider";
import ProjectsMore from "./components/Projects/ProjectsMore";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <SkillsSlider />
                <Projects />
                <ProjectsMore />
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default App;
