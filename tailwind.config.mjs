/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background' : '#FF7979',
				'accent-1' : '#38CC8B',
				'accent-2' : '#5E54A4',
				'secondary' : '#3D3B48',
				'muted' : '#BAB7D4',
			},
			backgroundImage: {
				'background-mobile': "url('/src/images/bg-intro-mobile.png')",
				'background-desktop': "url('/src/images/bg-intro-desktop.png')",
			},
			boxShadow: {
				'primary' : '0px 8px 0px 0px rgba(0, 0, 0, 0.15)',
				'button' : '0px -4px 0px 0px rgba(0, 0, 0, 0.09) inset',
			},
		},
	},
	plugins: [],
}
