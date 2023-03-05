import { SLIDER_SHADOW } from "../../constants/stylesClass";
import { SkillsTypes } from "../../types";
import { skills } from "../../mocks/skills";

import SkillsSliderItem from "./SkillsSliderItem";

export const SkillsSlider = () => {
    const containerSliderClass = `max-w-screen-xl mx-auto pt-28 p-4 relative overflow-hidden ${SLIDER_SHADOW}`;

    return (
        <div>
            <div className={containerSliderClass}>
                <ul className="flex gap-8 animate-slider">
                    {skills.map((skill: SkillsTypes) => {
                        const { id } = skill;
                        return <SkillsSliderItem key={id} skill={skill} />;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SkillsSlider;
