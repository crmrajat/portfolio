/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                primary: '#00040f',
                secondary: '#00f6ff',
                dimWhite: 'rgba(255, 255, 255, 0.7)',
                dimBlue: 'rgba(9, 151, 124, 0.1)',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'], // Overriding the default font family
                test: 'Consolas',
            },
            backgroundImage: {
                // Projects gif url
                // p2: "url('/src/assets/a2.gif')",
                chatingale: "url('/src/assets/chatingale.png')",
                musicfox: "url('/src/assets/musicfox.png')",
            },
        },
    },
    plugins: [],
};
