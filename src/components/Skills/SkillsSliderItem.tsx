import { type SkillsTypes } from "../../types";

interface SkillsSliderItemProps {
    skill: SkillsTypes;
}

export const SkillsSliderItem: React.FC<SkillsSliderItemProps> = ({ skill }) => {
    const { title, Icon } = skill;

    return (
        <li>
            <div className="flex items-center gap-2 whitespace-nowrap flex-shrink-0">
                <Icon />
                <span>{title}</span>
            </div>
        </li>
    );
};

export default SkillsSliderItem;
