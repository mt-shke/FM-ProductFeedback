module.exports = {
	content: ["./src/**/*.{tsx, js}"],
	theme: {
		fontFamily: {
			jost: ["Jost", "sans-serif"],
		},
		colors: {
			purple: "#AD1FEA",
			blue: "#4661E6",
			"s-blue": "#62BCFA",
			orange: "#F49F85",
			dark: "#4661E6",
			white: "#FFFFFF",
			black: "#000000",
			"s-white": "#F7F8FD",
			gray: "#F2F4FF",
			grey: "#647196",
			"s-grey": "#3A4374",
			red: "#d73737",
			transparent: "rgb(0, 0, 0, 0)",
		},
		animation: {
			spinning: " spinning 1s linear infinite",
			wiggle: "wiggle 1s ease-in-out infinite",
		},
		keyframes: {
			spinning: {
				"0%": {
					transform: " rotate(0deg)",
				},
				"100%": {
					transform: "rotate(360deg)",
				},
			},
			wiggle: {
				"0%, 100%": {
					transform: "rotate(-90deg)",
				},
				"50%": {
					transform: "rotate(90deg)",
				},
			},
		},
		extend: {
			fontSize: {
				xs: ["12px", "18px"],
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
