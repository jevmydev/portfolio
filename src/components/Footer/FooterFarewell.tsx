export const FooterFarewell = () => {
    const date = new Date();
    const formattedDate = new Intl.DateTimeFormat("es-ES", {
        weekday: "long"
    }).format(date);

    return <span className="dark:text-primary-blue">Feliz {formattedDate}</span>;
};

export default FooterFarewell;
