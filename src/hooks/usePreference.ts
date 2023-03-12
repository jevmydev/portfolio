import { useContext } from "react";
import { PreferenceContext } from "../context/preference";

export const usePreference = () => {
    const preferenceContext = useContext(PreferenceContext);
    if (!preferenceContext) throw new Error("usePreference debe usarse dentro de un PreferenceProvider");

    return preferenceContext;
};
