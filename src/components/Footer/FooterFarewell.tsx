import { GRADIENT_CLASS } from "../../constants/stylesClass";

export const FooterFarewell = () => {
    const date = new Date();
    const formattedDate = new Intl.DateTimeFormat("es-ES", {
        weekday: "long"
    }).format(date);

    return (
        <p>
            <span className="dark:text-primary-blue block">Feliz {formattedDate}</span>
            <span className={`font-bold ${GRADIENT_CLASS}`}>Return: 04-12-2023</span>
        </p>
    );
};

export default FooterFarewell;
