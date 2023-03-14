import { ConfigIcon, MenuIcon } from "../../elements/Icons";
import { useMenu } from "../../hooks/useMenu";
import { usePreference } from "../../hooks/usePreference";

import Button from "../../elements/Button";
import NavItems from "./NavItems";
import Preference from "./Preference";

export const Nav = () => {
    const { isMenuOpen, updateMenu } = useMenu();
    const { isPreferenceOpen, updatePreference } = usePreference();

    const isPreferenceOpenClass = isPreferenceOpen ? "top-12" : "-top-[200vh]";
    const isMenuOpenNavClass = isMenuOpen ? "top-0" : "-top-[200vh]";
    const isMenuOpenTitle = isMenuOpen ? "Cerrar menú" : "Abrir menú";

    return (
        <nav className="flex gap-2">
            <div
                className={`${isMenuOpenNavClass} flex items-center fixed z-20 p-4 left-0 w-full h-screen bg-semi-white dark:bg-semi-dark sm:p-0 sm:static sm:w-auto sm:h-auto sm:block sm:bg-transparent dark:sm:bg-transparent`}
            >
                <NavItems updateMenu={updateMenu} />
            </div>
            <div className="relative">
                <ul className="flex flex-wrap items-center gap-2 relative z-30">
                    <li>
                        <Button title="Configura tus preferencias" onClick={updatePreference}>
                            <ConfigIcon />
                        </Button>
                    </li>
                    <li className="sm:hidden">
                        <Button title={isMenuOpenTitle} onClick={updateMenu}>
                            <MenuIcon isChange={isMenuOpen} />
                        </Button>
                    </li>
                </ul>
                <div className={`${isPreferenceOpenClass} absolute -z-10 mt-2 p-4 right-0 border-2 border-slate-400/20 bg-semi-white dark:bg-semi-dark rounded`}>
                    <Preference />
                </div>
            </div>
        </nav>
    );
};

export default Nav;
