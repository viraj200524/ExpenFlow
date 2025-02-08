/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {fontFamily: {
      'playfair': ['Playfair Display', 'serif'], // Add Playfair Display
      'kode-mono': ['Kode Mono', 'monospace'],   // Add Kode Mono
      'micro-5': ['Micro 5', 'sans-serif'],      // Add Micro 5
      'ubuntu-mono': ['Ubuntu Mono', 'monospace'], // Add Ubuntu Mono
    },},
  },
  plugins: [],
}
