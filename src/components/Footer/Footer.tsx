import { CircleIcon, FavIcon } from "../../elements/Icons";

import Link from "../../elements/Link";
import NavItems from "../Header/NavItems";
import ContactSocial from "../Contact/ContactSocial";

export const Footer = () => {
    return (
        <footer className="mt-28 border-t-2 border-t-gray-400/20 text-base">
            <div className="max-w-screen-xl mx-auto pt-28 p-4 flex justify-between">
                <div className="flex flex-col gap-8 items-start">
                    <div>
                        <Link href="/" title="Icono de Jeremy Díaz" removeSpacing>
                            <FavIcon />
                        </Link>
                    </div>
                    <div>
                        <span className="flex items-center gap-2">
                            Estado
                            <CircleIcon width="w-2" fill="fill-green-400" stroke="stroke-green-400" />
                            <span className="text-green-400">Normal</span>
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-8 items-end">
                    <div>
                        <ContactSocial />
                    </div>
                    <div>
                        <NavItems />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
