import { SUBTITLE_CLASS } from "../../constants/stylesClass";
import { ExternalLinkIcon, GithubIcon } from "../../elements/Icons";
import { type SkillsTypes, type ProjectsTypes } from "../../types";

import SkillsSliderItem from "../Skills/SkillsSliderItem";
import Link from "../../elements/Link";

interface ProjectsItemProps {
    project: ProjectsTypes;
    isPictureRightOrder: boolean;
}

export const ProjectsItem: React.FC<ProjectsItemProps> = ({ project, isPictureRightOrder }) => {
    const { title, picture, href, repository, description, skills } = project;
    const subtitleClass = SUBTITLE_CLASS;

    const orderPicture = isPictureRightOrder ? "order-2" : "order-0";

    return (
        <article className="flex items-center justify-between">
            <div className="flex flex-col gap-8 order-1">
                <header className="flex items-end gap-8">
                    <h3 className={subtitleClass}>{title}</h3>
                    <div className="flex gap-2">
                        <Link href={href} title={`Visita ${title}`} target="_blank" isActive>
                            <>
                                <ExternalLinkIcon />
                                Visitar
                            </>
                        </Link>
                        <Link href={repository} title={`Repositorio de ${title}`} target="_blank">
                            <>
                                <GithubIcon />
                                Repositorio
                            </>
                        </Link>
                    </div>
                </header>
                <div className="flex flex-col gap-8 max-w-md">
                    <p>{description}</p>
                </div>
                <div className="max-w-md text-sm">
                    <ul className="flex flex-wrap gap-4">
                        {skills.map((skill: SkillsTypes) => {
                            const { id } = skill;
                            return <SkillsSliderItem key={id} skill={skill} />;
                        })}
                    </ul>
                </div>
            </div>
            <aside className={orderPicture}>
                <picture>
                    <img className="aspect-video rounded-md object-cover max-w-md" src={picture} alt={`Imagen del proyecto de ${title}`} loading="lazy" decoding="async" />
                </picture>
            </aside>
        </article>
    );
};

export default ProjectsItem;
