import { type LinkTypes } from "../../types";

import Link from "../../elements/Link";

interface NavLinkProps {
    link: LinkTypes;
}

export const NavLink: React.FC<NavLinkProps> = ({ link }) => {
    const { href, title, isActive } = link;

    return (
        <li className="block w-full sm:w-auto">
            <Link href={href} title={title} isActive={isActive}>
                {title}
            </Link>
        </li>
    );
};

export default NavLink;
