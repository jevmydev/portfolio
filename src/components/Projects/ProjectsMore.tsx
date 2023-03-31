import Blur from "../../elements/Blur";
import Link from "../../elements/Link";

export const ProjectsMore = () => {
    return (
        <div className="flex">
            <div className="hidden sm:block">
                <Blur />
            </div>
            <Link href="https://github.com/jevmydev?tab=repositories" title="Revisa otros proyectos en Github" target="_blank" isActive>
                ¡Revisa otros proyectos!
            </Link>
        </div>
    );
};

export default ProjectsMore;
