import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "desktop": { min: "768px" },
        "mobile": { max: "767px" }
      },
      fontFamily: {
        montSerrant_regular: ['Montserrant-Regular', 'sans-serif'],
        montSerrant_semibold: ['Montserrant_SemiBold', 'sans-serif'],
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
        cinza_claro: "#D9D9D9",
        cinza_escuro: "#161616",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        popup: "popup 0.2s ease-in"
      },
      keyframes: {
        popup: {
					'0%': { "scale": "0", "opacity": "0" },
					'100%': { "scale": "1", "opacity": "1" }
				},
      }
    },
  },
  plugins: [],
};
export default config;
