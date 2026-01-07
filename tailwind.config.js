/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'deep-space': '#0a0a1a',
                'nebula-purple': '#4c1d95',
                'star-blue': '#bae6fd',
                'galaxy-pink': '#ec4899',
            },
            backgroundImage: {
                'galaxy-gradient': 'radial-gradient(circle at center, #1e1b4b 0%, #000000 100%)',
            }
        },
    },
    plugins: [],
}
