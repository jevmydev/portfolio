import { FavIcon } from "../../elements/Icons";
import { type LinkTypes } from "../../types";
import { navLinks } from "../../mocks/navLinks";

import Link from "../../elements/Link";
import NavLink from "../Header/NavLink";
import ContactSocial from "../Contact/ContactSocial";

export const Footer = () => {
    return (
        <footer className="mt-28 border-t-2 border-t-gray-400">
            <div className="max-w-screen-xl mx-auto pt-28 p-4 flex justify-between">
                <div>
                    <Link href="/" title="Icono de Jeremy Díaz" removeSpacing>
                        <FavIcon />
                    </Link>
                </div>
                <div className="flex flex-col gap-8 items-start">
                    <div>
                        <ContactSocial />
                    </div>
                    <div>
                        <ul className="flex gap-2">
                            {navLinks.map((link: LinkTypes) => {
                                const { id } = link;
                                return <NavLink key={id} link={link} />;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
