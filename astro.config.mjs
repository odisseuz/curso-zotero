// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://odisseuz.github.io",
  base: "/curso-zotero",

  integrations: [
    starlight({
      title: "Curso CIPET II",

      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Português',
          lang: 'pt-BR',
        },
        es: {
          label: 'Español',
          lang: 'es-ES',
        },
        en: {
          label: 'English',
          lang: 'en-US',
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/odisseuz/curso-zotero",
        },
      ],
      sidebar: [
        {
          label: 'Módulo 1',
          translations: { es: 'Módulo 1', en: 'Module 1' },
          items: ['modulo_1/introducao', 'modulo_1/instalacao'],
        },
        {
          label: 'Módulo 2',
          translations: { es: 'Módulo 2', en: 'Module 2' },
          items: ['modulo_2/insercao', 'modulo_2/gestao'],
        },
        {
          label: 'Módulo 3',
          translations: { es: 'Módulo 3', en: 'Module 3' },
          items: ['modulo_3/escrita'],
        },
        {
          label: 'Extra',
          items: ['extra/extra_1', 'extra/leituras-e-agradecimentos'],
        },
      ],
    }),
  ],
});
