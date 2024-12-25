import { useState } from "react";
import { type HolidaysTypes } from "../../types";
import { holidays } from "../../mocks/holidays";
import { GRADIENT_CLASS } from "../../constants/stylesClass";

import Confetti from "react-confetti";

export const FooterFarewell = () => {
    const [confettiVisible, setConfettiVisible] = useState(false);
    const classConfettiVisible = confettiVisible ? "visible animate-fadeIn" : "invisible hidden";
    const handleConfetti = () => setConfettiVisible(!confettiVisible);

    const date = new Date();
    const todayDate = `${date.getDate().toString().padStart(2, "0")}-${(date.getMonth() + 1).toString().padStart(2, "0")}`;

    const formattedDate = new Intl.DateTimeFormat("es-ES", {
        weekday: "long"
    }).format(date);

    const holiday = holidays.find((holiday: HolidaysTypes) => holiday.date === todayDate);
    const message = holiday ? holiday.message : `¡Feliz ${formattedDate}!`;

    return (
        <div>
            <p>
                <span className="dark:text-primary-blue block">{message}</span>
                <button className={`font-bold ${GRADIENT_CLASS}`} onClick={handleConfetti}>
                    By Jeremy Díaz
                </button>
            </p>
            <div className={`${classConfettiVisible} fixed top-0 left-0 -z-30`}>
                <Confetti width={window.innerWidth} height={window.innerHeight} run={confettiVisible} />
            </div>
        </div>
    );
};

export default FooterFarewell;
