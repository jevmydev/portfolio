import { useState, useEffect, useMemo } from "react";
import { DEFAULT_PREFERENCE } from "../constants/defaultValues";
import { getStorage, setStorage } from "../storage/local";
import { type PreferenceTypes } from "../types";

export const usePreferenceConfig = () => {
    const [isPreferenceOpen, setIsPreferenceOpen] = useState(false);

    const [preference, setPreference] = useState(() => {
        const preferenceFromStorage = getStorage({ key: "preference", isJSON: true });
        const newPreference = preferenceFromStorage ?? DEFAULT_PREFERENCE;

        if (newPreference.scheme === "dark") {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.add("scheme-dark");
        }

        return newPreference;
    });

    const updatePreference = () => setIsPreferenceOpen(!isPreferenceOpen);

    const updateSoundPreference = () =>
        setPreference((prevState: PreferenceTypes) => ({
            ...prevState,
            sound: !preference.sound
        }));

    const updateSchemePreference = () => {
        const isDarkScheme = preference.scheme === "dark";

        setPreference((prevState: PreferenceTypes) => ({
            ...prevState,
            scheme: isDarkScheme ? "light" : "dark"
        }));
    };

    const updateSystemScheme = () => {
        setPreference((prevState: PreferenceTypes) => ({
            ...prevState,
            scheme: DEFAULT_PREFERENCE.scheme
        }));
    };

    const sound = useMemo(() => {
        const sound = new Audio("/assets/sounds/click.mp3");
        sound.volume = 0.09;

        return sound;
    }, []);

    useEffect(() => {
        const isDarkScheme = preference.scheme === "dark";

        document.documentElement.classList.toggle("dark", isDarkScheme);
        document.documentElement.classList.toggle("scheme-dark", isDarkScheme);
    }, [preference.scheme]);

    useEffect(() => {
        const clickSoundEvent = () => sound.play();

        if (preference.sound) window.addEventListener("click", clickSoundEvent);
        else window.removeEventListener("click", clickSoundEvent);

        return () => window.removeEventListener("click", clickSoundEvent);
    }, [preference.sound]);

    useEffect(() => setStorage({ key: "preference", value: preference }), [preference]);

    return { preference, isPreferenceOpen, updateSchemePreference, updateSoundPreference, updateSystemScheme, updatePreference };
};
