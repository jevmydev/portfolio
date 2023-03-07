import { type LinkTypes } from "../../types";
import { navLinks } from "../../mocks/navLinks";

import NavLink from "./NavLink";

interface NavItemsProps {
    children?: JSX.Element;
    updateMenu?: () => void;
}

export const NavItems: React.FC<NavItemsProps> = ({ children, updateMenu }) => {
    return (
        <ul className="flex flex-col flex-wrap items-center w-full gap-2 relative z-10 sm:flex-row">
            {navLinks.map((link: LinkTypes) => {
                const { id } = link;
                return <NavLink key={id} link={link} updateMenu={updateMenu} />;
            })}
            {children}
        </ul>
    );
};

export default NavItems;
