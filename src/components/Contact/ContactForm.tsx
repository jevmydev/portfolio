import { useId } from "react";
import { INPUT_CLASS, SUBMIT_INPUT_CLASS } from "../../constants/stylesClass";

export const ContactForm = () => {
    const nameInputId = useId();
    const messageInputId = useId();

    const inputClass = INPUT_CLASS;
    const submitInputClass = SUBMIT_INPUT_CLASS;

    return (
        <form className="flex flex-col gap-4 w-full">
            <label className="flex flex-col gap-2" htmlFor={nameInputId}>
                Email
                <input className={inputClass} id={nameInputId} type="text" placeholder="example@example.com" />
            </label>
            <label className="flex flex-col gap-2" htmlFor={messageInputId}>
                Mensaje
                <textarea className={inputClass} id={messageInputId} placeholder="Me gustó tu portfolio..."></textarea>
            </label>
            <div>
                <input className={submitInputClass} type="submit" />
            </div>
        </form>
    );
};

export default ContactForm;
