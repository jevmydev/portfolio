import { type LinkTypes } from "../../types";

import Link from "../../elements/Link";

interface NavLinkProps {
    link: LinkTypes;
    updateMenu?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ link, updateMenu }) => {
    const { href, title, isActive } = link;

    return (
        <li className="block border-b-2 border-gray-400/20 w-full sm:w-auto sm:border-0">
            <Link href={href} title={title} isActive={isActive} onClick={updateMenu}>
                {title}
            </Link>
        </li>
    );
};

export default NavLink;
