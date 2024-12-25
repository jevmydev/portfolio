import Blur from "../../elements/Blur";
import Link from "../../elements/Link";

export const ProjectsMore = () => {
    return (
        <div className="flex">
            <div className="hidden sm:block">
                <Blur />
            </div>
            <div className="w-full sm:flex sm:justify-center">
                <Link href="https://github.com/jevmydev?tab=repositories" title="Revisa otros proyectos en Github" target="_blank" isActive isCenter>
                    ¡Revisa mis otros proyectos!
                </Link>
            </div>
        </div>
    );
};

export default ProjectsMore;
