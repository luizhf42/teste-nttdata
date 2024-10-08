/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,css,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				body: "#521919",
				header: "#2d0e0e",
			},
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
			screens: {
				xs: "320px",
			},
		},
	},
	plugins: [],
};
