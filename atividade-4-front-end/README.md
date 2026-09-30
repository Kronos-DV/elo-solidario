# Rede Solidária — Atividade 4

Versão de produção da aplicação demonstrativa de voluntariado. Esta etapa consolida o projeto com versionamento, documentação, acessibilidade e preparação para publicação. Os formulários são somente demonstrativos: não enviam nem guardam dados.

## Requisitos

- Node.js 20 ou superior para gerar o build.
- Navegador moderno para visualizar a versão publicada.

## Desenvolvimento e build

```sh
npm run build
python -m http.server 8000 --directory dist
```

Abra `http://localhost:8000`. Não há dependências de execução nem pacotes para instalar. O build copia os arquivos necessários, comprime HTML/CSS/JavaScript, preserva módulos nativos e gera um manifesto de tamanho em `dist/build-manifest.json`.

## Estrutura

```text
html/index.html               documento semântico de origem
css/styles.css                estilos responsivos e acessíveis
imagens/                      marca e ilustração vetorial otimizada
js/app.js                     validação local do formulário
scripts/build.mjs             build local sem dependências externas
docs/ACCESSIBILITY.md         checklist e critérios revisados
docs/CONTRIBUTING.md          fluxo GitFlow e revisão
docs/DEPLOYMENT.md            publicação e manutenção
```

## Acessibilidade

A interface oferece link para pular ao conteúdo, regiões e títulos semânticos, rótulos associados, validação nativa, estados de foco visíveis, links descritivos, suporte a teclado e respeito a `prefers-reduced-motion`. Os pares de cores principais excedem o contraste mínimo AA documentado em `docs/ACCESSIBILITY.md`.

## Versionamento

Versão `1.0.0`. A estratégia de branches, commits, pull requests e release está em `docs/CONTRIBUTING.md` e `CHANGELOG.md`.

## Publicação

O fluxo GitHub Actions em `.github/workflows/deploy-activity-4.yml` prepara o site para GitHub Pages. Depois que Pages estiver habilitado com origem GitHub Actions, a aplicação será publicada em `/atividade-4-front-end/`; os caminhos dos projetos anteriores são preservados. As instruções e condições estão em `docs/DEPLOYMENT.md`.
