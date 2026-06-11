/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "forest", "corporate", "lemonade"], // Solo estos 4 temas
    darkTheme: "forest", // Tema oscuro por defecto
    base: true,
    styled: true,
    utils: true,
    logs: false,
    themeRoot: ":root",
  },
}