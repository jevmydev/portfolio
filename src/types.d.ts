export interface LinkTypes {
    id: string;
    href: string;
    title: string;
    isActive: boolean;
}

export interface SocialLinkTypes extends LinkTypes {
    Icon: ({ width, height, stroke }: SocialLinkIconProps) => JSX.Element;
}

interface SocialLinkIconProps {
    width?: string;
    height?: string;
    stroke?: string;
}

interface SkillsIconProps {
    width?: string;
    height?: string;
    fill?: string;
}

export interface SkillsTypes {
    id: string;
    title: string;
    Icon: ({ width, height, fill }: SkillsIconProps) => JSX.Element;
}

interface ProjectsTypes {
    id: string;
    title: string;
    picture: string;
    href: string;
    repository: string;
    description: string;
    skills: Array<SkillsTypes>;
}

export interface LinkTypesProps {
    href: string;
    target?: string;
    title: string;
    removeSpacing?: boolean;
    isActive?: boolean;
    children: JSX.Element | string;
}

export interface ButtonTypesProps {
    title: string;
    children: JSX.Element | string;
    onClick?: () => void;
}
