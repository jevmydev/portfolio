import { CircleIcon, FavIcon } from "../../elements/Icons";

import Link from "../../elements/Link";
import NavItems from "../Header/NavItems";
import ContactSocial from "../Contact/ContactSocial";
import Blur from "../../elements/Blur";

export const Footer = () => {
    return (
        <footer className="mt-28 border-t-2 border-t-slate-400/20 text-base">
            <Blur isFullScreen />
            <div className="max-w-screen-xl mx-auto pt-20 p-4 flex gap-8 flex-col justify-start md:justify-between md:flex-row">
                <div className="flex flex-col gap-8 items-start">
                    <div>
                        <Link href="/" title="Icono de Jeremy Díaz" removeSpacing>
                            <FavIcon />
                        </Link>
                    </div>
                    <div>
                        <span className="flex items-center gap-2">
                            Estado
                            <CircleIcon width="w-2" fill="fill-green-800 dark:fill-green-400" stroke="stroke-green-400" />
                            <span className="text-green-800 dark:text-green-400">Normal</span>
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-8 md:items-end">
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
