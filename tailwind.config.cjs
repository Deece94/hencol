/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {},
        colors: {
            "dark-blue": "#090D46",
            "light-red": "#ff3c3c",
            "dark-red": "#d91f1f",
        },
    },
    plugins: [],
};
