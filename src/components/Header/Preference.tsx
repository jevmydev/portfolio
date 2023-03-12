import { MoonIcon, MuteIcon, SoundIcon, SunIcon } from "../../elements/Icons";
import { usePreference } from "../../hooks/usePreference";

import Button from "../../elements/Button";

export const Preference = () => {
    const { preference, updateSchemePreference, updateSoundPreference } = usePreference();
    const { sound, scheme } = preference;

    const isSchemeDark = scheme === "dark";
    const isSchemeDarkTitle = isSchemeDark ? "Modo claro" : "Modo oscuro";

    return (
        <div className="flex flex-col gap-8 w-44">
            <div className="flex flex-col gap-2">
                <label className="flex justify-between">
                    <span className="flex gap-2">
                        {sound ? <SoundIcon /> : <MuteIcon />}
                        Sonido
                    </span>
                    <input type="checkbox" checked={sound} onChange={updateSoundPreference} />
                </label>
            </div>
            <div className="flex flex-col pt-2 gap-2 border-t-2 border-t-gray-400/20">
                <Button title={isSchemeDarkTitle} onClick={updateSchemePreference}>
                    <>
                        {isSchemeDark ? <SunIcon /> : <MoonIcon />}
                        {isSchemeDarkTitle}
                    </>
                </Button>
            </div>
        </div>
    );
};

export default Preference;
