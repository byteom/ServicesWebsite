module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8',
        secondary: '#f97316',
        tertiary: '#4ade80',
      },
      animation: {
        'scroll': 'scroll 20s linear infinite',
        'color-change': 'colorChange 10s ease-in-out infinite',
      },
      keyframes: {
        colorChange: {
          '0%, 100%': { backgroundColor: '#1d4ed8' },
          '25%': { backgroundColor: '#f97316' },
          '50%': { backgroundColor: '#4ade80' },
          '75%': { backgroundColor: '#9333ea' },
        },
      },
    },
  },
  plugins: [],
};
