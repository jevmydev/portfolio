export const DEFAULT_FORM_STATUS = { message: "", isError: false };
export const DEFAULT_PREFERENCE = {
    sound: false,
    scheme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
};
