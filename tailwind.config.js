/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,css,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				body: "#521919",
				header: "#2d0e0e",
			},
			colors: {
				"primary-gray": "#111111",
				"favorite-button": "#ff7c93",
			},
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
			screens: {
				xs: "320px",
			},
			animation: {
				load: "load 1s infinite linear",
			},
			keyframes: {
				load: {
					"0%": { boxShadow: "20px 0 #fff2, -20px 0 #fff", background: "#fff2" },
					"33%": {
						boxShadow: "20px 0 #fff2, -20px 0 #fff2",
						background: "#fff",
					},
					"66%": {
						boxShadow: "20px 0 #fff, -20px 0 #fff2",
						background: "#fff2",
					},
					"100%": {
						boxShadow: "20px 0 #fff2, -20px 0 #fff",
						background: "#fff2",
					},
				},
			},
		},
	},
	plugins: [],
};
