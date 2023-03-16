interface AboutStatsItemProps {
    stat: string;
    description: string;
}

export const AboutStatsItem = ({ stat, description }: AboutStatsItemProps) => {
    const statClass = "font-medium text-5xl text-slate-800 dark:text-slate-200";

    return (
        <div className="flex flex-col gap-2 p-4 border-2 border-slate-400/20 rounded">
            <span className={statClass}>{stat}</span>
            <span>{description}</span>
        </div>
    );
};

export default AboutStatsItem;
