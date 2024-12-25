interface ProjectsTypes {
    id: string;
    title: string;
    picture: string;
    href: string;
    repository: string;
    description: string;
    skills: Array<SkillsTypes>;
}

export interface LinkTypes {
    id: string;
    href: string;
    title: string;
    isActive: boolean;
}

export interface LinkTypesProps {
    href: string;
    target?: string;
    title: string;
    removeSpacing?: boolean;
    isActive?: boolean;
    isCenter?: boolean;
    children: JSX.Element | string;
    onClick?: () => void;
}

export interface SocialLinkTypes extends LinkTypes {
    Icon: ({ width, height, stroke }: SkillsIconProps) => JSX.Element;
}

export interface SkillsTypes {
    id: string;
    title: string;
    Icon: ({ width, height, fill }: SkillsIconProps) => JSX.Element;
}

interface SkillsIconProps {
    width?: string;
    height?: string;
    fill?: string;
    stroke?: string;
}

export interface ButtonTypesProps {
    title: string;
    children: JSX.Element | string;
    onClick?: () => void;
}

export interface FormDataTypes {
    email: string;
    message: string;
}

export interface FormSpreeTypes {
    formData: FormData;
}

export interface FormSpreeOptions {
    method: string;
    body: BodyInit<object> | null | undefined;
    headers: HeadersInit;
}

export interface FormStatusTypes {
    message: string;
    isError: boolean;
}

export interface PreferenceTypes {
    sound: boolean;
    scheme: string;
}

export interface PreferenceAllTypes {
    preference: PreferenceTypes;
    isPreferenceOpen: boolean;
    updatePreference: () => void;
    updateSchemePreference: () => void;
    updateSoundPreference: () => void;
    updateSystemScheme: () => void;
}

export interface HolidaysTypes {
    date: string;
    message: string;
}
