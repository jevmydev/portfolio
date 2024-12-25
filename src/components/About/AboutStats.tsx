import AboutStatsItem from "./AboutStatsItem";

export const AboutStats = () => {
    return (
        <div className="grid grid-rows-3 grid-cols-2 gap-4">
            <AboutStatsItem stat="+3" description="Años de Dev" />
            <AboutStatsItem stat="+30" description="Repositorios" />
            <AboutStatsItem stat="+800" description="Contribuciones" />
            <AboutStatsItem stat="+28" description="Proyectos webs" />
            <AboutStatsItem stat="Especialidad" description="Frontend" isFullWidth />
        </div>
    );
};

export default AboutStats;
