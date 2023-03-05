import { SUBTITLE_CLASS } from "../../constants/stylesClass";

export const About = () => {
    const subtitleClass = SUBTITLE_CLASS;

    return (
        <section id="about">
            <div className="max-w-screen-xl mx-auto pt-28 p-4">
                <h2 className={subtitleClass}>Sobre mí</h2>
                <div className="pt-28 flex justify-between">
                    <div className="max-w-xl w-1/2 flex flex-col gap-2">
                        <p>
                            Comencé mi aprendizaje de <strong className="text-primary-blue">forma autodidacta</strong> utilizando diversos recursos como tutoriales, directos, blogs, lecturas y
                            proyectos personales.
                        </p>
                        <p>
                            Desde entonces, he estado constantemente <strong className="text-primary-blue">desarrollando</strong> y <strong className="text-primary-blue">mejorando</strong> mis
                            habilidades.
                        </p>
                        <p>
                            Me siento muy cómodo en este ámbito profesional y <strong className="text-primary-blue">disfruto compartiendo mis conocimientos </strong> y aprendiendo de los demás.
                        </p>
                    </div>
                    <div className="w-1/2 flex justify-center items-center">
                        <span className="text-9xl">👋❤️</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
