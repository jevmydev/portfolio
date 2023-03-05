import { FavIcon } from "../../elements/Icons";

import Link from "../../elements/Link";
import Nav from "./Nav";

export const Header = () => {
    return (
        <header className="fixed z-20 w-full backdrop-blur-md">
            <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
                <Link href="/" title="Icono de Jeremy Díaz" removeSpacing>
                    <FavIcon />
                </Link>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
