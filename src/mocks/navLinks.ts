import { v4 as uuid } from "uuid";

export const navLinks = [
    {
        id: uuid(),
        href: "/#hero",
        title: "Inicio",
        isActive: false
    },
    {
        id: uuid(),
        href: "/#projects",
        title: "Proyectos",
        isActive: false
    },
    {
        id: uuid(),
        href: "/#about",
        title: "Sobre mí",
        isActive: false
    },
    {
        id: uuid(),
        href: "/#contact",
        title: "Contacto",
        isActive: false
    }
] as const;
