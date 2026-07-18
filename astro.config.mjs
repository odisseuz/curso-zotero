// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Curso CIPET II',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/odisseuz/curso-zotero' }],
			sidebar: [
				{
					label: 'Módulos',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Parte 1', slug: 'modulos/parte_1' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
