import { useState } from "react";
import { MENU_OPEN_BODY_CLASS } from "../constants/stylesClass";

export const useMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const updateMenu = () => {
        const newIsMenuOpen = !isMenuOpen;

        if (newIsMenuOpen) document.body.classList.add(...MENU_OPEN_BODY_CLASS);
        else document.body.classList.remove(...MENU_OPEN_BODY_CLASS);

        setIsMenuOpen(newIsMenuOpen);
    };

    return { isMenuOpen, updateMenu };
};
