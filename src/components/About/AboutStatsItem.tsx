interface AboutStatsItemProps {
    stat: string;
    description: string;
}

export const AboutStatsItem = ({ stat, description }: AboutStatsItemProps) => {
    const statClass = "text-5xl text-gray-800 dark:text-gray-200";

    return (
        <div className="flex flex-col gap-2 p-4 border-2 border-gray-400/20 rounded">
            <span className={statClass}>{stat}</span>
            <span>{description}</span>
        </div>
    );
};

export default AboutStatsItem;
