# Curso CIPET II — Gestão Bibliográfica com Zotero

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![Conteúdo: CC BY 4.0](https://img.shields.io/badge/conte%C3%BAdo-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Código: MIT](https://img.shields.io/badge/c%C3%B3digo-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Read in English:** [README.md](./README.md)

Minicurso aberto e multilíngue de introdução à gestão de referências bibliográficas com o **Zotero**, elaborado para o II CIPET.

**Material publicado:** <https://odisseuz.github.io/curso-zotero/>

## Conteúdo do curso

- **Módulo 1** — Introdução, conceitos e planejamento; instalação e configuração.
- **Módulo 2** — Inserção de itens no Zotero; metadados, etiquetas e organização de pastas.
- **Módulo 3** — Integração com editores de texto e referências.
- **Extra** — Recursos adicionais e agradecimentos.

## Idiomas

O português é o idioma principal e é servido na raiz (`/`). Os outros idiomas usam prefixos de caminho: `/es/` (espanhol) e `/en/` (inglês). Toda página criada em `src/content/docs/` precisa de uma equivalente nas pastas `es/` e `en/` para aparecer nesses idiomas.

## Desenvolvimento local

Requer Node.js 22 ou superior.

```bash
git clone https://github.com/odisseuz/curso-zotero.git
cd curso-zotero
npm install
npm run dev
```

Como o `base` está definido como `/curso-zotero` no `astro.config.mjs`, o servidor de desenvolvimento responde em <http://localhost:4321/curso-zotero/> — e não na raiz `/`.

Para gerar e inspecionar a versão de produção:

```bash
npm run build    # gera dist/
npm run preview  # serve dist/ localmente
```

### Ambiente Nix (opcional)

O repositório inclui um `shell.nix` com Node.js 22, `gh`, `git` e o editor Zed. Com o Nix instalado:

```bash
nix-shell
```

## Estrutura do projeto

```text
astro.config.mjs       # configuração do Starlight: locales, sidebar, site e base
src/content/docs/      # conteúdo em português (idioma principal, servido em /)
src/content/docs/es/   # conteúdo em espanhol (servido em /es/)
src/content/docs/en/   # conteúdo em inglês (servido em /en/)
src/assets/            # imagens referenciadas pelas páginas
public/                # arquivos estáticos copiados sem alteração para a raiz do site
```

## Deploy

Executado automaticamente pelo `.github/workflows/deploy.yml` a cada push na branch `main`, publicando no GitHub Pages via `withastro/action`.

## Licença

- **Conteúdo e imagens:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — consulte [LICENSE-CONTENT.md](./LICENSE-CONTENT.md).
- **Código-fonte:** [MIT](./LICENSE).
