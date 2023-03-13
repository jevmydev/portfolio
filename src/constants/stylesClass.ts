export const INTERACTIVE_CLASS = "flex gap-2 items-center justify-start transition-colors rounded hover:text-gray-800 hover:bg-gray-400/20 dark:hover:text-gray-200" as const;
export const INTERACTIVE_ACTIVE_CLASS = "text-primary-blue filter saturate-200 bg-gray-800 hover:bg-gray-400/20" as const;

export const GRADIENT_CLASS = "text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-primary-pink" as const;

export const TITLE_CLASS = `${GRADIENT_CLASS} font-bold text-center text-7xl sm:text-8xl xl:text-9xl` as const;
export const SUBTITLE_CLASS = "font-bold text-center text-3xl text-gray-800 dark:text-gray-200 sm:text-4xl xl:text-6xl" as const;
export const SUBTITLE_COLOR_CLASS = `${GRADIENT_CLASS} font-bold text-5xl sm:text-8xl xl:text-9xl` as const;

export const INPUT_CLASS = "w-full outline-none py-2 px-4 bg-transparent text-gray-800 dark:text-gray-200 border-2 border-gray-400/20 rounded transition-colors focus:bg-gray-400/20" as const;

export const SUBMIT_INPUT_CLASS = `${INTERACTIVE_CLASS} ${INTERACTIVE_ACTIVE_CLASS} py-2 px-4 cursor-pointer` as const;

export const SLIDER_SHADOW_CLASS =
    "before:bg-gradient-to-r before:from-semi-white dark:before:from-semi-dark before:to-transparent before:absolute before:z-10 before:w-24 before:h-full before:left-0 before:top-0 after:bg-gradient-to-l after:from-semi-white dark:after:from-semi-dark after:to-transparent after:absolute after:z-10 after:w-24 after:h-full after:right-0 after:top-0" as const;

export const MENU_OPEN_BODY_CLASS = ["overflow-hidden", "sm:overflow-auto"] as const;
