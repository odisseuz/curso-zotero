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
                    label: 'Módulo 1',
                    items: [
                        // Caminho: pasta/arquivo
                        { label: 'Introdução, conceitos & planejamento', slug: 'modulo_1/introducao' },
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