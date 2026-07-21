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
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/odisseuz/curso-zotero",
        },
      ],
      sidebar: [
        {
          label: "Módulo 1",
          items: [
            {
              label: "Introdução, conceitos & planejamento",
              slug: "modulo_1/introducao",
            },
            { label: "Instalação & Configuração", slug: "modulo_1/instalacao" },
          ],
        },
        {
          label: "Módulo 2",
          items: [
            { label: "Inserção de Itens no Zotero", slug: "modulo_2/insercao" },
            { label: "Gestão de Metadados, Etiquetas & Organização", slug: "modulo_2/gestao" },
          ],
        },
        {
          label: "Módulo 3",
          items: [
            {
              label: "Integração com Editores de Texto e Referências",
              slug: "modulo_3/escrita",
            },
          ],
        },
      ],
    }),
  ],
});
