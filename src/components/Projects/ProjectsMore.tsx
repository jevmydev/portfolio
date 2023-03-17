import Blur from "../../elements/Blur";
import Link from "../../elements/Link";

export const ProjectsMore = () => {
    return (
        <div className="flex">
            <Link href="https://github.com/jevmydev?tab=repositories" title="Revisa otros proyectos en Github" target="_blank" isActive>
                ¡Revisa otros proyectos!
            </Link>
            <Blur />
        </div>
    );
};

export default ProjectsMore;
