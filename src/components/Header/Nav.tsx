import { ConfigIcon } from "../../elements/Icons";
import { type LinkTypes } from "../../types";
import { navLinks } from "../../mocks/navLinks";

import NavLink from "./NavLink";
import Button from "../../elements/Button";

export const Nav = () => {
    return (
        <nav>
            <ul className="flex items-center gap-2">
                {navLinks.map((link: LinkTypes) => {
                    const { id } = link;
                    return <NavLink key={id} link={link} />;
                })}

                <li>
                    <Button title="Configura tus preferencias">
                        <ConfigIcon />
                    </Button>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
