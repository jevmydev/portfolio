import { SUBTITLE_CLASS } from "../../constants/stylesClass";
import { projects } from "../../mocks/projects";
import { ProjectsTypes } from "../../types";

import ProjectsItem from "./ProjectsItem";

export const Projects = () => {
    const subtitleClass = SUBTITLE_CLASS;

    return (
        <section id="projects">
            <div className="max-w-screen-xl mx-auto pt-28 p-4">
                <h2 className={subtitleClass}>Proyectos</h2>
                <div className="flex flex-col gap-28 pt-28">
                    {projects.map((project: ProjectsTypes, index) => {
                        const { id } = project;
                        const isPictureRightOrder = index % 2 === 0;

                        return <ProjectsItem key={id} project={project} isPictureRightOrder={isPictureRightOrder} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
