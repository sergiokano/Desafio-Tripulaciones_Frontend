/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/tailwind-datepicker-react/dist/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                "blue-1": "#033858",
                "blue-2": "#008BA2",
                "blue-3": "#5BC9C6",
                "blue-4": "#C4F9F7",
                "orange-1": "#FA642F",
                "orange-2": "#F28705",
                "orange-3": "#F2CD5B",
                "orange-4": "#FFEEBB",
                black: "#181818",
                "dark-grey": "#282828",
                "dark-grey-2": "#3E3E3E",
                white: "#FBFBFB",
                "neutral-1": "#EEEEEE",
                "neutral-2": "#E2E2E2",
                "neutral-3": "#C7C7C7",
                "neutral-4": "#A0A0A0",
                "neutral-5": "#7D7D7D",
                "neutral-6": "#595959",
                "neutral-7": "#404040",
            },
        },
    },
    plugins: [],
};
