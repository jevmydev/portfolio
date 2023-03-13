import { INTERACTIVE_CLASS, INTERACTIVE_ACTIVE_CLASS } from "../constants/stylesClass";
import { type ButtonTypesProps } from "../types";

export const Button: React.FC<ButtonTypesProps> = ({ title, children, onClick }) => {
    const buttonClass = `${INTERACTIVE_CLASS} ${INTERACTIVE_ACTIVE_CLASS} py-2 px-3 `;

    return (
        <button className={buttonClass} title={title} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
