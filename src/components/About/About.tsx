import { SUBTITLE_COLOR_CLASS } from "../../constants/stylesClass";

export const About = () => {
    const subtitleClass = SUBTITLE_COLOR_CLASS;

    return (
        <section id="about">
            <div className="max-w-screen-xl mx-auto pt-28 p-4">
                <h2 className={subtitleClass}>Sobre mí</h2>
                <div className="pt-20 flex gap-8 flex-col justify-start items-start sm:items-center sm:justify-between sm:flex-row">
                    <div className="max-w-xl flex flex-col gap-2">
                        <p>
                            Comencé mi aprendizaje de <strong className="text-gray-200">forma autodidacta</strong> utilizando diversos recursos como tutoriales, directos, blogs, lecturas y proyectos
                            personales.
                        </p>
                        <p>
                            Desde entonces, he estado constantemente <strong className="text-gray-200">desarrollando</strong> y <strong className="text-gray-200">mejorando</strong> mis habilidades.
                        </p>
                        <p>
                            Me siento muy cómodo en este ámbito profesional y <strong className="text-gray-200">disfruto compartiendo mis conocimientos </strong> y aprendiendo de los demás.
                        </p>
                    </div>
                    <div className="flex justify-end items-center -order-1 sm:order-1">
                        <span className="text-9xl">❤️</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
