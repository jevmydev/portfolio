interface AboutStatsItemProps {
    stat: string;
    description: string;
    isFullWidth?: boolean;
}

export const AboutStatsItem = ({ stat, description, isFullWidth }: AboutStatsItemProps) => {
    const statClass = "font-medium text-5xl text-black dark:text-white";
    const isFullWidthClass = isFullWidth ? "col-span-2" : "";

    return (
        <>
            <div className={`${isFullWidthClass} w-full flex items-center flex-col gap-2 p-4 border-2 border-slate-400/20 rounded`}>
                <span className={statClass}>{stat}</span>
                <span className="whitespace-nowrap">{description}</span>
            </div>
        </>
    );
};

export default AboutStatsItem;
