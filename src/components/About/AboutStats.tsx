import AboutStatsItem from "./AboutStatsItem";

export const AboutStats = () => {
    return (
        <div className="flex flex-wrap gap-4 lg:justify-end">
            <AboutStatsItem stat="2+" description="Años Desarrollando" />
            <AboutStatsItem stat="24+" description="Repositorios" />
            <AboutStatsItem stat="500+" description="Contribuciones" />
            <AboutStatsItem stat="99.99%" description="Focus" />
        </div>
    );
};

export default AboutStats;
