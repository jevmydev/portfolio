import { useEffect, useState } from "react";
import { FavIcon } from "../../elements/Icons";

import Link from "../../elements/Link";
import Nav from "./Nav";

export const Header = () => {
    const [isHeaderBlurred, seatIsHeaderBlurred] = useState(false);
    const classIsHeaderBlurred = isHeaderBlurred ? "backdrop-blur-md " : "";

    useEffect(() => {
        const handleScroll = () => {
            const hasScrolled = window.scrollY > 0;
            seatIsHeaderBlurred(hasScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`${classIsHeaderBlurred}fixed z-20 w-full animate-fadeIn`}>
            <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
                <div className="relative z-30">
                    <Link href="/" title="Icono de Jeremy Díaz" removeSpacing>
                        <FavIcon />
                    </Link>
                </div>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
