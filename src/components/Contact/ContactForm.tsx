import { useId } from "react";
import { INPUT_CLASS, SUBMIT_INPUT_CLASS } from "../../constants/stylesClass";
import { useContactForm } from "../../hooks/useContactForm";

export const ContactForm = () => {
    const { status, clearStatus, postFormReq } = useContactForm();
    const { message, isError } = status;

    const nameInputId = useId();
    const messageInputId = useId();

    const inputClass = INPUT_CLASS;
    const submitInputClass = SUBMIT_INPUT_CLASS;
    const statusClass = isError ? "text-red-400" : "text-green-400";

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        postFormReq({ formData });

        e.currentTarget.reset();
    };

    const handleChange = () => clearStatus();

    return (
        <form className="flex flex-col gap-4 w-full" method="POST" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-2" htmlFor={nameInputId}>
                Email
                <input className={inputClass} id={nameInputId} name="email" type="text" placeholder="example@example.com" onChange={handleChange} />
            </label>
            <label className="flex flex-col gap-2" htmlFor={messageInputId}>
                Mensaje
                <textarea className={inputClass} id={messageInputId} name="message" placeholder="Me gustó tu portfolio..." onChange={handleChange}></textarea>
            </label>
            <div className="h-20">
                {message && <span className={`block mb-2 ${statusClass}`}>{message}</span>}
                <input className={submitInputClass} type="submit" />
            </div>
        </form>
    );
};

export default ContactForm;
