import { ConfigIcon } from "../../elements/Icons";

import Button from "../../elements/Button";
import NavItems from "./NavItems";

export const Nav = () => {
    return (
        <nav>
            <NavItems>
                <li>
                    <Button title="Configura tus preferencias">
                        <ConfigIcon />
                    </Button>
                </li>
            </NavItems>
        </nav>
    );
};

export default Nav;
