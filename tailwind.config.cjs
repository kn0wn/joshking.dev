/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			grey: '#f6f6f6',
			red: '#FF0022'
		},
		fontFamily: {
			mono: ['Poppins', 'monospace']
		},
		extend: {}
	},
	plugins: []
};
