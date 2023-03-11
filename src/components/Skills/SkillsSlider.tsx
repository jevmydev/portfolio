import { SLIDER_SHADOW_CLASS } from "../../constants/stylesClass";
import { type SkillsTypes } from "../../types";
import { skills } from "../../mocks/skills";

import SkillsSliderItem from "./SkillsSliderItem";

export const SkillsSlider = () => {
    const containerSliderClass = `${SLIDER_SHADOW_CLASS} max-w-screen-xl mx-auto pt-28 p-4 relative overflow-hidden`;

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
