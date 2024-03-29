import { SUBTITLE_COLOR_CLASS } from "../../constants/stylesClass";

import ContactForm from "./ContactForm";
import ContactSocial from "./ContactSocial";

export const Contact = () => {
    const subtitleClass = SUBTITLE_COLOR_CLASS;

    return (
        <section id="contact">
            <div className="max-w-screen-xl mx-auto pt-28 p-4">
                <h2 className={subtitleClass}>Contacto</h2>
                <div className="pt-20 flex flex-col gap-8 items-start justify-start sm:flex-row sm:items-center sm:justify-between">
                    <div className="max-w-md flex flex-col gap-8">
                        <p>Gracias por llegar hasta aquí.</p>
                        <p>Puedes contactar conmigo a través de mis redes sociales o rellenando el formulario.</p>
                        <div className="flex flex-wrap w-full max-w-xl items-center gap-2">
                            <ContactSocial />
                        </div>
                    </div>
                    <div className="w-full max-w-xl">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
