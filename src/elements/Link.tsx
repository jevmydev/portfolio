import { INTERACTIVE_CLASS, INTERACTIVE_ACTIVE_CLASS } from "../constants/stylesClass";
import { type LinkTypesProps } from "../types";

export const Link: React.FC<LinkTypesProps> = ({ href, title, target, removeSpacing, isActive, isCenter, onClick, children }) => {
    const activeClass = isActive ? INTERACTIVE_ACTIVE_CLASS : "hover:text-slate-800";
    const centerClass = isCenter ? "justify-center" : "justify-start";
    const removeSpacingClass = !removeSpacing ? "py-2 px-3" : "";

    const linkClass = `${activeClass} ${centerClass} ${removeSpacingClass} ${INTERACTIVE_CLASS}`.trim();

    return (
        <a className={linkClass} href={href} title={title} target={target} rel="noopener noreferrer" onClick={onClick}>
            {children}
        </a>
    );
};

export default Link;
