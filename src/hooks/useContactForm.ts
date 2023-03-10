import { useState } from "react";
import { type FormSpreeTypes, type FormDataTypes } from "../types";
import { postFormSpree } from "../services/formSpree";
import { DEFAULT_FORM_STATUS } from "../constants/defaultsValues";

export const useContactForm = () => {
    const [status, setStatus] = useState(DEFAULT_FORM_STATUS);

    const clearStatus = () => setStatus(DEFAULT_FORM_STATUS);
    const isValidData = ({ email, message }: FormDataTypes) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/.test(email) && /[A-Z]/gi.test(message);

    const postFormReq = async ({ formData }: FormSpreeTypes) => {
        const email = formData.get("email")?.toString() ?? "";
        const message = formData.get("message")?.toString() ?? "";

        if (!formData || !isValidData({ email, message })) {
            setStatus({ message: "Los campos no son válidos.", isError: true });
            return;
        }

        try {
            await postFormSpree({ formData });
            setStatus({ message: "Mensaje recibido correctamente.", isError: false });
        } catch (err) {
            setStatus({ message: `Post formspree ${err}`, isError: true });
            throw new Error(`Post formspree ${err}`);
        }
    };

    return { status, clearStatus, postFormReq };
};
