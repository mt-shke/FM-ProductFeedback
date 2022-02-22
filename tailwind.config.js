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
			"s-gray": "#f4f4f8",
			grey: "#647196",
			"s-grey": "#3A4374",
			red: "#d73737",
			"transparent-g": "rgba(58, 67, 116,0.6)",
			transparent: "rgb(0, 0, 0, 0)",
		},
		animation: {
			spinning: " spinning 1s linear infinite",
			wiggle: "wiggle 1s ease-in-out infinite",
			fade: "fadeIn .3s ease-in",
			fade5: "fadeIn .3s ease-out",
			move: "move .5s ease-out",
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
			fadeIn: {
				"0%": {
					opacity: "0",
				},
				"100%": {
					opacity: "1",
				},
			},
			move: {
				"0%": {
					transform: "translate(2rem)",
				},
				"100%": {
					transform: "translate(0)",
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
