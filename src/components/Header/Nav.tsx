import { ConfigIcon, MenuIcon } from "../../elements/Icons";

import Button from "../../elements/Button";
import NavItems from "./NavItems";

export const Nav = () => {
    return (
        <nav className="flex gap-2">
            <div className="flex items-center fixed z-20 m-4 -top-[150vh] left-0 w-full h-screen bg-semi-dark sm:m-0 sm:static sm:w-auto sm:h-auto sm:block sm:bg-transparent">
                <NavItems />
            </div>
            <div>
                <ul className="flex flex-wrap items-center gap-2 relative z-30">
                    <li>
                        <Button title="Configura tus preferencias">
                            <ConfigIcon />
                        </Button>
                    </li>
                    <li className="sm:hidden">
                        <Button title="Abrir menú">
                            <MenuIcon />
                        </Button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
