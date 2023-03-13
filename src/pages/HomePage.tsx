import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

import Blur from "../elements/Blur";
import SkillsSlider from "../components/Skills/SkillsSlider";

const HomePage = () => {
    return (
        <>
            <Blur isFullScreen />
            <Header />
            <main>
                <Hero />
                <SkillsSlider />
                <Projects />
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
