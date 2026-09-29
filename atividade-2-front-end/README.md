# Atividade 2 — Desenvolvimento Front-End Para Web

**Projeto demonstrativo:** Rede Solidária, uma plataforma responsiva que conecta pessoas a organizações comunitárias.

## Arquivos

- `index.html` — estrutura semântica da página, navegação, cartões, formulário local e diálogo informativo.
- `styles.css` — sistema de design, grade de 12 colunas, cinco breakpoints, componentes e ilustrações CSS.
- `script.js` — menu móvel e dropdown, validação e resposta local do formulário, diálogo informativo e ano do rodapé.

## Executar

Abra `index.html` em um navegador. O projeto não depende de bibliotecas nem de serviços externos. O formulário é demonstrativo: não envia os dados a um servidor.

## Sistema de design

Cores, escala tipográfica e espaçamentos modulares estão declarados em `:root` no início de `styles.css`. O layout usa CSS Grid para as áreas principais e Flexbox para navegação e alinhamentos internos. Cinco media queries ajustam a página em 1200px, 900px, 680px, 520px e 360px.

A interface inclui navegação com submenu e menu móvel, apresentação da causa, indicadores de impacto, cartões de iniciativas, passos para participar, depoimento, formulário, diálogo informativo e chamadas para ação. Estados de foco visíveis, rótulos de campo, validação visual, texto de retorno com `aria-live`, suporte a teclado e redução de movimento foram considerados.

Os dados de impacto, nomes e contato exibidos são fictícios e servem apenas para demonstrar a interface.

