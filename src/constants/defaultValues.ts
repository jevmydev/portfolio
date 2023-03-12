export const DEFAULT_FORM_STATUS = { message: "", isError: false };
export const DEFAULT_PREFERENCE = {
    sound: true,
    scheme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
};
