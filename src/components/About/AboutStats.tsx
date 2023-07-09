import AboutStatsItem from "./AboutStatsItem";

export const AboutStats = () => {
    return (
        <div className="flex flex-wrap gap-4 lg:justify-end">
            <AboutStatsItem stat="+2" description="Años desarrollando" />
            <AboutStatsItem stat="+30" description="Repositorios" />
            <AboutStatsItem stat="+600" description="Contribuciones" />
            <AboutStatsItem stat="99.99%" description="Focus" />
        </div>
    );
};

export default AboutStats;
