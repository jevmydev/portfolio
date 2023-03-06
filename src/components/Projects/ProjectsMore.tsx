import Link from "../../elements/Link";

export const ProjectsMore = () => {
    return (
        <div className="max-w-screen-xl mx-auto pt-28 p-4 flex">
            <Link href="https://github.com/jevmydev?tab=repositories" title="Revisa otros proyectos en Github" target="_blank" isActive>
                ¡Revisa otros proyectos!
            </Link>
        </div>
    );
};

export default ProjectsMore;
