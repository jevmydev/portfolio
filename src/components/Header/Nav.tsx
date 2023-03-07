import { useState } from "react";
import { ConfigIcon, MenuIcon } from "../../elements/Icons";

import Button from "../../elements/Button";
import NavItems from "./NavItems";

export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isMenuOpenNavClass = isMenuOpen ? "top-0" : "";
    const isMenuOpenBodyClass = ["overflow-hidden", "sm:overflow-auto"];

    const updateMenu = () => {
        const newIsMenuOpen = !isMenuOpen;

        if (newIsMenuOpen) document.body.classList.add(...isMenuOpenBodyClass);
        else document.body.classList.remove(...isMenuOpenBodyClass);

        setIsMenuOpen(newIsMenuOpen);
    };

    return (
        <nav className="flex gap-2">
            <div className={`flex items-center fixed z-20 p-4 ${isMenuOpenNavClass} -top-[150vh] left-0 w-full h-screen bg-semi-dark sm:p-0 sm:static sm:w-auto sm:h-auto sm:block sm:bg-transparent`}>
                <NavItems updateMenu={updateMenu} />
            </div>
            <div>
                <ul className="flex flex-wrap items-center gap-2 relative z-30">
                    <li>
                        <Button title="Configura tus preferencias">
                            <ConfigIcon />
                        </Button>
                    </li>
                    <li className="sm:hidden">
                        <Button title="Abrir menú" onClick={updateMenu}>
                            <MenuIcon />
                        </Button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
