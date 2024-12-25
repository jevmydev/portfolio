/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**"],
    theme: {
        extend: {
            fontFamily: {
                inter: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
            },
            backgroundColor: {
                "semi-dark": "rgb(10 12 14)",
                "semi-white": "rgb(245 247 249)",
                "primary-blue": "rgb(96 175 252)"
            },
            textColor: {
                "primary-blue": "rgb(96 175 252)"
            },
            gradientColorStops: {
                "primary-purple": "rgb(133 39 227)",
                "primary-pink": "rgb(255 0 128)",
                "semi-dark": "rgb(10 12 14)",
                "semi-white": "rgb(245 247 249)"
            }
        },
        animation: {
            slider: "slider 20s linear infinite alternate",
            arrow: "arrow 1.5s ease-in-out infinite",
            greeting: "greeting 2s linear infinite alternate",
            fadeIn: "fadeIn 1.5s ease"
        },
        keyframes: {
            slider: {
                from: {
                    transform: "translateX(6rem)"
                },
                to: {
                    transform: "translateX(-50%)"
                }
            },
            arrow: {
                from: {
                    transform: "translateY(-.2rem)",
                    opacity: "0"
                },
                "80%": {
                    opacity: "1"
                },
                to: {
                    transform: "translateY(.2rem)",
                    opacity: "0"
                }
            },
            greeting: {
                "10%": {
                    transform: "rotate(-10deg)"
                },
                "20%": {
                    transform: "rotate(10deg)"
                },
                "30%": {
                    transform: "rotate(-10deg)"
                },
                "40%": {
                    transform: "rotate(10deg)"
                },
                "50%": {
                    transform: "rotate(-10deg)"
                }
            },
            fadeIn: {
                "0%": {
                    opacity: "0"
                },
                "100%": {
                    opacity: "1"
                }
            }
        }
    },
    plugins: []
};
