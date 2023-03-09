import { useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import SkillsSlider from "./components/Skills/SkillsSlider";
import ProjectsMore from "./components/Projects/ProjectsMore";
import Blur from "./elements/Blur";

const App = () => {
    useEffect(() => {
        const clickSoundEvent = () => {
            const audio = new Audio("../public/assets/sounds/click.mp3");
            audio.volume = 0.09;
            audio.play();
        };

        window.addEventListener("click", clickSoundEvent);
        return () => window.removeEventListener("click", clickSoundEvent);
    }, []);

    return (
        <>
            <Blur isFullScreen />
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
