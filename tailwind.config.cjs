/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**"],
    theme: {
        extend: {
            fontFamily: {
                system: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
            },
            backgroundColor: {
                "semi-dark": "rgb(10 12 14)",
                "semi-white": "rgb(245 247 249)"
            },
            textColor: {
                "primary-blue": "rgb(55 155 255)"
            },
            gradientColorStops: {
                "primary-purple": "rgb(121 40 202)",
                "primary-pink": "rgb(255 0 128)",
                "semi-dark": "rgb(10 12 14)",
                "semi-white": "rgb(245 247 249)"
            }
        },
        animation: {
            slider: "slider 20s linear alternate infinite",
            arrow: "arrow 1.5s ease-in-out infinite",
            greeting: "greeting 2s linear infinite alternate"
        },
        keyframes: {
            slider: {
                from: {
                    transform: "translate(0)"
                },
                to: {
                    transform: "translateX(-100%)"
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
            }
        }
    },
    plugins: []
};
