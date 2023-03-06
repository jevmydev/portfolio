import { type LinkTypes } from "../../types";
import { navLinks } from "../../mocks/navLinks";

import NavLink from "./NavLink";

interface NavItemsProps {
    children?: JSX.Element;
}

export const NavItems: React.FC<NavItemsProps> = ({ children }) => {
    return (
        <ul className="flex items-center gap-2">
            {navLinks.map((link: LinkTypes) => {
                const { id } = link;
                return <NavLink key={id} link={link} />;
            })}
            {children}
        </ul>
    );
};

export default NavItems;
