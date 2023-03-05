import { v4 as uuid } from "uuid";
import {
    BashIcon,
    CSSIcon,
    EsbuildIcon,
    EslintIcon,
    GitIcon,
    HTMLIcon,
    JavaScriptIcon,
    NPMIcon,
    PNPMIcon,
    PrettierIcon,
    PythonIcon,
    ReactIcon,
    SassIcon,
    SublimeTextIcon,
    TailwindIcon,
    TypeScriptIcon,
    ViteIcon,
    VSCIcon,
    WebPackIcon
} from "../elements/SkillsIcons";

export const skills = [
    {
        id: uuid(),
        title: "HTML",
        Icon: HTMLIcon
    },
    {
        id: uuid(),
        title: "CSS",
        Icon: CSSIcon
    },
    {
        id: uuid(),
        title: "Sass",
        Icon: SassIcon
    },
    {
        id: uuid(),
        title: "TailwindCSS",
        Icon: TailwindIcon
    },
    {
        id: uuid(),
        title: "JavaScript",
        Icon: JavaScriptIcon
    },
    {
        id: uuid(),
        title: "TypeScript",
        Icon: TypeScriptIcon
    },
    {
        id: uuid(),
        title: "React",
        Icon: ReactIcon
    },
    {
        id: uuid(),
        title: "Git",
        Icon: GitIcon
    },
    {
        id: uuid(),
        title: "Bash",
        Icon: BashIcon
    },
    {
        id: uuid(),
        title: "NPM",
        Icon: NPMIcon
    },
    {
        id: uuid(),
        title: "PNPM",
        Icon: PNPMIcon
    },
    {
        id: uuid(),
        title: "Vite",
        Icon: ViteIcon
    },
    {
        id: uuid(),
        title: "esbuild",
        Icon: EsbuildIcon
    },
    {
        id: uuid(),
        title: "Webpack",
        Icon: WebPackIcon
    },
    {
        id: uuid(),
        title: "ESlint",
        Icon: EslintIcon
    },
    {
        id: uuid(),
        title: "Prettier",
        Icon: PrettierIcon
    },
    {
        id: uuid(),
        title: "Python",
        Icon: PythonIcon
    },
    {
        id: uuid(),
        title: "Visual Studio Code",
        Icon: VSCIcon
    },
    {
        id: uuid(),
        title: "Sublime Text",
        Icon: SublimeTextIcon
    }
] as const;
