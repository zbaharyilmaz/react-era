  1. pnpm install -D tailwindcss
  2. npx tailwindcss init
  3. /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
4. css ye ekle. 
@tailwind base;
@tailwind components;
@tailwind utilities;
5. npm run start