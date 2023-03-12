import { createContext } from "react";
import { usePreferenceConfig } from "../hooks/usePreferenceConfig";
import { type PreferenceAllTypes } from "../types";

interface PreferenceProviderProps {
    children: JSX.Element;
}

export const PreferenceContext = createContext<PreferenceAllTypes | null>(null);

export const PreferenceProvider = ({ children }: PreferenceProviderProps) => {
    const { preference, isPreferenceOpen, updateSchemePreference, updateSoundPreference, updatePreference } = usePreferenceConfig();

    return (
        <PreferenceContext.Provider value={{ preference, isPreferenceOpen, updateSchemePreference, updateSoundPreference, updatePreference }}>
            {children}
        </PreferenceContext.Provider>
    );
};
