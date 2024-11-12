import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montSerrant_regular:['Montserrant-Regular', 'sans-serif'],
        montSerrant_semibold:['Montserrant_SemiBold', 'sans-serif'],
        montSerrant_bold: ['Montserrant_Bold', 'sans-serif']
      },
      aspectRatio: {
        'square': '1 / 1',  // Adiciona 'aspect-square' para proporção 1:1 (quadrado)
        '16/9': '16 / 9',   // Exemplo de uma proporção 16:9
        '4/3': '4 / 3',     // Exemplo de uma proporção 4:3
        '1/2': '1 / 2',     // Proporção 3:2
        '3/4': '3/4',
        '3/5': '3/5'
      },
      colors: {
        redblack: '#123456',
        rosa: '#DF78ED',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
