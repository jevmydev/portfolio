import { useState } from "react";
import { isMenuOpenBodyClass } from "../constants/stylesClass";

export const useMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const updateMenu = () => {
        const newIsMenuOpen = !isMenuOpen;

        if (newIsMenuOpen) document.body.classList.add(...isMenuOpenBodyClass);
        else document.body.classList.remove(...isMenuOpenBodyClass);

        setIsMenuOpen(newIsMenuOpen);
    };

    return { isMenuOpen, updateMenu };
};
