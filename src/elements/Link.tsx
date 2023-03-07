import { INTERACTIVE_CLASS, INTERACTIVE_ACTIVE_CLASS } from "../constants/stylesClass";
import { type LinkTypesProps } from "../types";

export const Link: React.FC<LinkTypesProps> = ({ href, title, target, removeSpacing, isActive, onClick, children }) => {
    const activeClass = isActive ? INTERACTIVE_ACTIVE_CLASS : "";
    const removeSpacingClass = !removeSpacing ? "py-2 px-3" : "";

    const linkClass = `${activeClass} ${removeSpacingClass} ${INTERACTIVE_CLASS}`.trim();

    return (
        <a className={linkClass} href={href} title={title} target={target} onClick={onClick} rel="noopener noreferrer">
            {children}
        </a>
    );
};

export default Link;
