import { v4 as uuid } from "uuid";
import { GithubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "../elements/Icons";

export const socialLinks = [
    {
        id: uuid(),
        href: "https://github.com/jevmydev",
        title: "Github",
        isActive: true,
        Icon: GithubIcon
    },
    {
        id: uuid(),
        href: "https://www.linkedin.com/in/jevmydev",
        title: "LinkedIn",
        isActive: true,
        Icon: LinkedInIcon
    },
    {
        id: uuid(),
        href: "https://www.instagram.com/jevmydev/",
        title: "Instagram",
        isActive: true,
        Icon: InstagramIcon
    },
    {
        id: uuid(),
        href: "https://twitter.com/jevmydev",
        title: "Twitter",
        isActive: true,
        Icon: TwitterIcon
    }
] as const;
