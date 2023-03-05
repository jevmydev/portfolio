import { INTERACTIVE_CLASS, INTERACTIVE_ACTIVE_CLASS } from "../constants/stylesClass";
import { ButtonTypesProps } from "../types";

export const Button: React.FC<ButtonTypesProps> = ({ title, children, onClick }) => {
    const buttonClass = `py-2 px-3 ${INTERACTIVE_CLASS} ${INTERACTIVE_ACTIVE_CLASS}`;

    return (
        <button className={buttonClass} title={title} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
