# Contribuição e versionamento

## GitFlow

- `main`: versão estável publicada.
- `develop`: integração das mudanças aprovadas.
- `feature/<assunto>`: trabalho incremental encaminhado por pull request para `develop`.
- `hotfix/<assunto>`: correção urgente derivada da versão estável e sincronizada com `develop`.

Cada pull request descreve contexto, solução e formas de revisão. Evite enviar alterações não relacionadas no mesmo PR. A issue `#1` acompanha os objetivos da Atividade IV.

## Commits semânticos

Use o padrão Conventional Commits: `tipo(escopo): resumo no imperativo`. Tipos usados neste projeto: `feat`, `fix`, `docs`, `perf` e `chore`. Exemplos:

- `feat(activity-4): add production-ready volunteer page`
- `fix(a11y): improve keyboard focus and form feedback`
- `perf(build): minify static assets`
- `docs(release): document version 1.0.0`

## Versionamento semântico

O release `1.0.0` registra a primeira versão estável. Uma correção compatível incrementa PATCH, uma melhoria compatível incrementa MINOR e uma alteração incompatível incrementa MAJOR. A justificativa de cada versão deve constar no `CHANGELOG.md`.

## Revisão do pull request

Antes do merge, confira a estrutura semântica, navegação por teclado, rótulos e mensagens, contraste, links internos, tamanhos dos ativos e instruções de build/deploy. O workflow compila a página para PRs; a implantação só ocorre a partir de `main`.
