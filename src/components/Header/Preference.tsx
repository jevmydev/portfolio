import { CheckedIcon, DeviceIcon, MoonIcon, MuteIcon, SoundIcon, SunIcon } from "../../elements/Icons";
import { usePreference } from "../../hooks/usePreference";

import Button from "../../elements/Button";

export const Preference = () => {
    const { preference, updateSchemePreference, updateSoundPreference, updateSystemScheme } = usePreference();
    const { sound, scheme } = preference;

    const isSchemeDark = scheme === "dark";
    const isSchemeDarkTitle = isSchemeDark ? "Modo claro" : "Modo oscuro";

    return (
        <div className="flex flex-col gap-8 w-44">
            <div className="flex flex-col gap-2">
                <label className="flex items-center justify-between">
                    <span className="flex gap-2">
                        {sound ? <SoundIcon /> : <MuteIcon />}
                        Sonido
                    </span>
                    <input className="hidden peer" type="checkbox" checked={sound} onChange={updateSoundPreference} />
                    <div className="w-5 h-5 flex justify-center items-center rounded border border-slate-400/20 transition peer-checked:bg-primary-blue">
                        <CheckedIcon sound={sound} />
                    </div>
                </label>
            </div>
            <div className="flex flex-col pt-2 gap-2 border-t-2 border-t-slate-400/20">
                <Button title={isSchemeDarkTitle} onClick={updateSchemePreference}>
                    <>
                        {isSchemeDark ? <SunIcon /> : <MoonIcon />}
                        {isSchemeDarkTitle}
                    </>
                </Button>
                <Button title="Sistema" onClick={updateSystemScheme}>
                    <>
                        <DeviceIcon />
                        Sistema
                    </>
                </Button>
            </div>
        </div>
    );
};

export default Preference;
