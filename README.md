# Elo Solidário

Site acessível de uma ONG fictícia, desenvolvido como projeto acadêmico com apoio de IA. Feito com HTML5, CSS e JavaScript puros, sem instalação de dependências.

## Abrir e estudar

1. Abra esta pasta no VS Code, ou abra `elo-solidario.code-workspace`.
2. Abra `index.html` no navegador com um duplo clique.
3. Estude primeiro os arquivos HTML, depois `assets/css/style.css` e, por último, `assets/js/formulario.js`.

## Organização

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
└── elo-solidario.code-workspace
```

## Funcionalidades

- Navegação entre as três páginas e link para pular ao conteúdo.
- Agrupamentos com `fieldset` e `legend`; rótulos associados aos campos.
- Campos obrigatórios, formato de e-mail, padrões de CPF, telefone e CEP.
- Máscaras de digitação, cálculo dos dígitos verificadores do CPF e bloqueio de data futura.
- Imagens responsivas em JPG e WebP com texto alternativo.
- Layout adaptado para telas menores.

O formulário não envia nem armazena dados. Use informações fictícias nos testes. O CPF tem apenas seus dígitos verificadores conferidos; telefone e CEP têm o formato conferido, sem consulta de existência. Não há pagamentos reais.

## Imagem

Cena ilustrativa gerada com a ferramenta integrada de imagens por IA: voluntários organizando alimentos em caixas para doação. Não representa uma ação real. Foram produzidas versões comprimidas de 1200 × 800 e 600 × 400 pixels em JPG e WebP.

## Verificação

Foram conferidos os caminhos locais, identificadores, rótulos e funções de máscara/CPF. Isso não equivale à certificação de acessibilidade. A validação oficial no W3C ainda precisa ser realizada: envie separadamente os três HTML em https://validator.w3.org/#validate_by_upload.

Teste no navegador: campos vazios, CPF com dígitos incorretos, telefones de 10 e 11 dígitos, CEP incompleto, edição no meio do campo e data futura. Navegue usando Tab para conferir o foco.

## Entrega por link

Um repositório público no GitHub permite consultar e baixar o código completo. O link do repositório é para o código; hospedar a página navegável exige um serviço como GitHub Pages.
