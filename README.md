# Elo Solidário

Projeto acadêmico de um site para uma ONG fictícia, desenvolvido com HTML5, CSS e JavaScript. O objetivo é praticar a organização de páginas, a estrutura semântica e a criação de um formulário que oriente o preenchimento.

O desenvolvimento contou com apoio de IA durante o aprendizado. A organização é fictícia e não recebe doações ou cadastros reais.

## Contexto acadêmico e aprendizado

Este projeto faz parte da disciplina de **Desenvolvimento Web Frontend**, com foco em **HTML5**, do curso de Análise e Desenvolvimento de Sistemas. O foco de estudo é compreender a estrutura das páginas, a organização semântica do conteúdo, a navegação por links, o uso de imagens e a construção de formulários com rótulos e agrupamentos.

CSS e JavaScript complementam a apresentação e o comportamento do site. O projeto foi desenvolvido com apoio de IA; os recursos implementados servem como material de estudo e revisão, sem representar domínio independente de todos esses conceitos.

O acompanhamento dos estudos está em [Jornada de programação](https://github.com/Kronos-DV/jornada-programacao). O Elo Solidário permanece neste repositório próprio, separado dos exercícios introdutórios de JavaScript.

## O que o projeto apresenta

| Página | Conteúdo |
| --- | --- |
| [Início](index.html) | Apresentação da ONG, missão, imagem ilustrativa e contatos de exemplo. |
| [Projetos](projetos.html) | Iniciativas de alimentação e educação, voluntariado e campanhas de doação. |
| [Cadastro](cadastro.html) | Formulário demonstrativo dividido em dados pessoais, contato e endereço. |

## Como abrir

1. Baixe o repositório em **Code → Download ZIP** e extraia a pasta, ou clone-o com Git.
2. Abra a pasta no VS Code. O arquivo `elo-solidario.code-workspace` também pode ser usado.
3. Abra `index.html` no navegador.

Não é necessário instalar dependências ou iniciar um servidor.

## Estrutura

```text
elo-solidario/
├── index.html
├── projetos.html
├── cadastro.html
├── assets/
│   ├── css/style.css
│   └── js/formulario.js
├── imagens/
│   ├── voluntarios.jpg
│   ├── voluntarios.webp
│   ├── voluntarios-600.jpg
│   └── voluntarios-600.webp
├── README.md
├── VALIDACAO.md
└── elo-solidario.code-workspace
```

## Formulário e acessibilidade

Os campos estão agrupados com `fieldset` e `legend`, e cada campo possui um rótulo associado. As páginas incluem navegação consistente, link para pular ao conteúdo, foco visível e imagens com texto alternativo.

O formulário utiliza campos obrigatórios, verificação do formato de e-mail, bloqueio de data futura e máscaras de CPF, telefone e CEP. O JavaScript também confere os dígitos verificadores do CPF.

**Máscara e validação têm funções diferentes:** a máscara organiza a digitação; a validação verifica as regras definidas. A conferência do CPF não consulta uma base oficial, e telefone e CEP são verificados apenas quanto ao formato.

Nenhum dado é enviado ou armazenado. Use informações de teste ao explorar o formulário.

## Verificações realizadas

- Três páginas verificadas no **Nu Html Checker do W3C, versão 26.9.7**, sem erros ou avisos no resultado final.
- Caminhos locais, identificadores e associações entre rótulos e campos conferidos.
- Funções de máscara e cálculo dos dígitos do CPF verificadas com testes locais.

O [relatório de validação](VALIDACAO.md) registra os resultados e a correção realizada. A validação HTML não substitui uma auditoria completa de acessibilidade ou testes de interação.

## Recursos de imagem

A cena de voluntários organizando alimentos foi gerada por IA e não representa uma ação real. A pasta `imagens` contém versões JPG e WebP, nas dimensões de 1200 × 800 e 600 × 400 pixels.

## Para continuar aprendendo

A sequência sugerida de estudo é: estrutura dos arquivos HTML, estilos em CSS e comportamento do formulário em JavaScript. Entre os próximos exercícios estão testar a navegação por teclado, editar valores no meio dos campos e compreender como uma futura validação no servidor complementaria a do navegador.
