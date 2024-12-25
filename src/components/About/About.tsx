import Strong from "../../elements/Strong";
import AboutStats from "./AboutStats";

import { SUBTITLE_COLOR_CLASS } from "../../constants/stylesClass";

export const About = () => {
    const subtitleClass = SUBTITLE_COLOR_CLASS;

    return (
        <section id="about">
            <div className="max-w-screen-xl mx-auto pt-28 p-4">
                <h2 className={subtitleClass}>Sobre mí</h2>
                <div className="pt-20 flex gap-8 flex-col justify-start items-start lg:justify-between lg:flex-row">
                    <div className="max-w-xl flex flex-col gap-2">
                        <p>
                            Comencé mi aprendizaje de <Strong>forma autodidacta</Strong> utilizando diversos recursos como tutoriales, directos, blogs, lecturas y proyectos personales.
                        </p>
                        <p>
                            Desde entonces, he estado constantemente <Strong>desarrollando</Strong> y <Strong>mejorando</Strong> mis habilidades.
                        </p>
                        <p>
                            Me siento muy cómodo en este ámbito profesional y <Strong>disfruto compartiendo mis conocimientos</Strong> y aprendiendo de los demás.
                        </p>
                    </div>
                    <div>
                        <AboutStats />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
