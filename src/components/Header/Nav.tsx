import { ConfigIcon, MenuIcon } from "../../elements/Icons";
import { useMenu } from "../../hooks/useMenu";

import Button from "../../elements/Button";
import NavItems from "./NavItems";

export const Nav = () => {
    const { isMenuOpen, updateMenu } = useMenu();

    const isMenuOpenNavClass = isMenuOpen ? "top-0" : "-top-[150vh]";
    const isMenuOpenTitle = isMenuOpen ? "Cerrar menú" : "Abrir menú";

    return (
        <nav className="flex gap-2">
            <div className={`flex items-center fixed z-20 p-4 ${isMenuOpenNavClass} left-0 w-full h-screen bg-semi-dark sm:p-0 sm:static sm:w-auto sm:h-auto sm:block sm:bg-transparent`}>
                <NavItems updateMenu={updateMenu} />
            </div>
            <div className="relative">
                <ul className="flex flex-wrap items-center gap-2 relative z-30">
                    <li>
                        <Button title="Configura tus preferencias">
                            <ConfigIcon />
                        </Button>
                    </li>
                    <li className="sm:hidden">
                        <Button title={isMenuOpenTitle} onClick={updateMenu}>
                            <MenuIcon isChange={isMenuOpen} />
                        </Button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
