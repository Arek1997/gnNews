/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Ubuntu', 'sans-serif'],
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				md: '2rem',
				lg: '4rem',
			},
		},

		screens: {
			sm: '578px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			'2xl': '1400px',
		},
	},
	plugins: [require('prettier-plugin-tailwindcss')],
	plugins: [require('daisyui')],

	daisyui: {
		themes: ['dark'],
	},
};
