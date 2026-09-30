# Revisão de acessibilidade

Referência: [WCAG 2.1](https://www.w3.org/TR/WCAG21/), com foco nos critérios de nível A e AA relevantes para esta página. A revisão documenta as decisões e o código implementado; não substitui avaliação com tecnologias assistivas nem uma auditoria formal de conformidade.

## Critérios aplicados

- **Estrutura e identificação:** `lang="pt-BR"`, regiões `header`, `nav`, `main` e `footer`, títulos hierárquicos, link de salto, rótulos associados e nome acessível para a navegação.
- **Teclado e foco:** links, campos, botões e elementos `summary` são controles nativos; a ordem segue a leitura; foco recebe contorno visível; não há armadilhas ou atalhos de tecla personalizados.
- **Formulário:** `label`, `required`, tipos de campo e validação nativa; o resultado local usa `role="status"`/`aria-live`; o formulário explica que não envia nem armazena dados.
- **Percepção:** cor não é o único meio de transmitir instrução; ilustração recebe descrição, enquanto ícones decorativos são ocultados da árvore acessível; layout usa unidades relativas e reflow responsivo.
- **Movimento:** a rolagem suave é desativada quando `prefers-reduced-motion: reduce` está ativo.

## Contraste de texto

Razões calculadas pela fórmula de luminância relativa da WCAG 2.1. Texto normal requer pelo menos **4,5:1** (SC 1.4.3); componentes e indicadores gráficos relevantes requerem **3:1** (SC 1.4.11).

| Primeiro plano | Fundo | Razão | Uso |
| --- | --- | ---: | --- |
| `#18383a` | `#fbfaf6` | 12,07:1 | Texto principal |
| `#526569` | `#fbfaf6` | 5,87:1 | Texto secundário |
| `#145b4b` | `#fbfaf6` | 7,65:1 | Links e realces |
| `#ffffff` | `#133b37` | 12,29:1 | Texto em faixas escuras |
| `#18383a` | `#f1c75b` | 7,84:1 | Texto do botão amarelo |
| `#a12a2a` | `#ffffff` | 7,29:1 | Cor de erro, se utilizada |

## Checklist de revisão

- [x] Controles HTML nativos e utilizáveis por teclado.
- [x] Links e botões com propósito identificável.
- [x] Formulário com rótulos, restrições e resposta anunciada.
- [x] Foco visível e preferência por movimento reduzido respeitada.
- [x] Contraste dos pares de texto principais acima do mínimo AA.
- [ ] Leitor de tela e navegadores adicionais: revisão manual ainda necessária antes de uma declaração formal de conformidade.
