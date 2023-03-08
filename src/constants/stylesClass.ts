export const INTERACTIVE_CLASS = "flex gap-2 items-center justify-start transition-colors rounded-md hover:text-gray-200 hover:bg-gray-400/20" as const;
export const INTERACTIVE_ACTIVE_CLASS = "text-primary-blue bg-gray-800 filter saturate-200 backdrop-blur-md hover:bg-gray-400/20" as const;

export const GRADIENT_CLASS = "text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-primary-pink" as const;

export const TITLE_CLASS = `font-bold text-gray-200 text-center ${GRADIENT_CLASS} text-7xl sm:text-8xl xl:text-9xl` as const;
export const SUBTITLE_CLASS = "font-bold text-gray-200 text-center text-3xl sm:text-4xl xl:text-6xl" as const;
export const SUBTITLE_COLOR_CLASS = `${SUBTITLE_CLASS} ${GRADIENT_CLASS} text-5xl sm:text-8xl xl:text-8xl flex` as const;

export const INPUT_CLASS = "w-full outline-none py-2 px-4 bg-transparent text-gray-200 border-2 border-gray-400/20 rounded-md transition-colors focus:bg-gray-400/20" as const;

export const SUBMIT_INPUT_CLASS = `${INTERACTIVE_CLASS} ${INTERACTIVE_ACTIVE_CLASS} py-2 px-4 cursor-pointer` as const;

export const SLIDER_SHADOW =
    "before:bg-gradient-to-r before:from-semi-dark before:to-transparent before:absolute before:z-10 before:w-24 before:h-full before:left-0 before:top-0 after:bg-gradient-to-l after:from-semi-dark after:to-transparent after:absolute after:z-10 after:w-24 after:h-full after:right-0 after:top-0" as const;
