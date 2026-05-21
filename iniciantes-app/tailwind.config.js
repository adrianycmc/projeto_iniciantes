/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',      // Azul forte
        secondary: '#0891b2',    // Ciano
        accent: '#10b981',       // Verde
        success: '#059669',      // Verde escuro
        warning: '#f59e0b',      // Laranja
        background: '#ffffff',   // Branco
        text: '#1f2937',        // Cinza escuro
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
