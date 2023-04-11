export const INTERACTIVE_CLASS = "font-medium flex gap-2 items-center justify-start transition rounded hover:text-slate-800 hover:bg-slate-400/20 dark:hover:text-slate-200 active:scale-95" as const;
export const INTERACTIVE_ACTIVE_CLASS = "text-primary-blue saturate-200 bg-slate-800 hover:bg-slate-400/20" as const;

export const GRADIENT_CLASS = "text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-primary-pink" as const;

export const TITLE_CLASS = `${GRADIENT_CLASS} font-bold text-center tracking-tight text-7xl sm:text-8xl xl:text-9xl` as const;
export const SUBTITLE_CLASS = "font-bold text-center tracking-tight text-3xl text-black dark:text-white sm:text-4xl xl:text-6xl" as const;
export const SUBTITLE_COLOR_CLASS = `${GRADIENT_CLASS} tracking-tight font-bold text-5xl sm:text-8xl xl:text-9xl` as const;

export const INPUT_CLASS = "w-full outline-none py-2 px-4 bg-transparent text-slate-800 dark:text-slate-200 border-2 border-slate-400/20 rounded transition-colors focus:bg-slate-400/20" as const;

export const SUBMIT_INPUT_CLASS = `${INTERACTIVE_CLASS} ${INTERACTIVE_ACTIVE_CLASS} py-2 px-4 cursor-pointer justify-center w-full sm:w-auto sm:justify-start` as const;

export const SLIDER_SHADOW_CLASS =
    "before:bg-gradient-to-r before:from-semi-white dark:before:from-semi-dark before:to-transparent before:absolute before:z-10 before:w-24 before:h-full before:left-0 before:top-0 after:bg-gradient-to-l after:from-semi-white dark:after:from-semi-dark after:to-transparent after:absolute after:z-10 after:w-24 after:h-full after:right-0 after:top-0" as const;

export const MENU_OPEN_BODY_CLASS = ["overflow-hidden", "sm:overflow-auto"] as const;
