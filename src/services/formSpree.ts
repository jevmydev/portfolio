import { FORMSPREE_URL } from "../constants/api";
import { FormSpreeOptions, FormSpreeTypes } from "../types";

export const postFormSpree = async ({ formData }: FormSpreeTypes) => {
    const options: FormSpreeOptions = {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json"
        }
    };

    return await fetch(FORMSPREE_URL, options);
};
