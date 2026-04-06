// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { 
		enabled: true 
	},
	css: ['./app/assets/css/main.css'],
	vite: {
		plugins: [
			tailwindcss(),
		],
	},
	app: {
		head: {
			link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap' }

			],
		},
  	},
})
