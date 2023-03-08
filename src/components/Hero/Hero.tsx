import { SUBTITLE_CLASS, TITLE_CLASS } from "../../constants/stylesClass";
import { ArrowDownIcon, GithubIcon, LinkedInIcon } from "../../elements/Icons";

import Link from "../../elements/Link";

export const Hero = () => {
    const titleClass = TITLE_CLASS;
    const subtitleClass = SUBTITLE_CLASS;

    return (
        <section id="hero">
            <div className="max-w-screen-xl mx-auto pt-20 p-4 h-screen flex flex-col gap-8 justify-center items-center text-center">
                <div className="flex flex-col gap-2">
                    <h1 className={titleClass}>Jeremy Díaz</h1>
                    <h2 className={subtitleClass}>Frontend Developer</h2>
                </div>
                <div className="max-w-md">
                    <p>
                        Llevo más de dos años desarrollando experiencias de usuario atractivas y funcionales. <span className="animate-greeting inline-block">👋</span>
                    </p>
                </div>
                <div className="flex gap-2">
                    <Link href="https://github.com/jevmydev" title="Github" target="_blank" isActive>
                        <>
                            <GithubIcon />
                            Github
                        </>
                    </Link>
                    <Link href="https://www.linkedin.com/in/jevmydev" title="LinkedIn" target="_blank">
                        <>
                            <LinkedInIcon />
                            LinkedIn
                        </>
                    </Link>
                </div>
                <div className="absolute bottom-0 animate-arrow">
                    <Link href="/#projects" title="Explora">
                        <ArrowDownIcon />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
