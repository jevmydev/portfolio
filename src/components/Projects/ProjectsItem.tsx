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

    const orderPictureClass = isPictureRightOrder ? "w-full sm:w-auto sm:order-2" : "w-full sm:w-auto sm:order-0";

    return (
        <article className="flex flex-col gap-8 items-center justify-between sm:flex-row">
            <div className="flex gap-8 order-1 flex-col w-full sm:w-auto">
                <header className="flex flex-col items-start gap-8 xl:flex-row xl:items-end">
                    <h3 className={subtitleClass}>{title}</h3>
                    <div className="flex flex-wrap gap-2">
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
            <aside className={orderPictureClass}>
                <picture>
                    <img className="aspect-video rounded-md object-cover w-full sm:max-w-md" src={picture} alt={`Imagen del proyecto de ${title}`} loading="lazy" decoding="async" />
                </picture>
            </aside>
        </article>
    );
};

export default ProjectsItem;
