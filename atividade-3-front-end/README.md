# Rede Solidária — Atividade 3 Front-End

Aplicação de página única para descobrir oportunidades de voluntariado, preencher uma demonstração de interesse e salvar inscrições no próprio navegador.

## Abrir

Abra `html/index.html` em um navegador moderno. O projeto usa módulos JavaScript nativos; alguns navegadores podem exigir um servidor local simples para carregar módulos ES. Não é necessário instalar dependências.

## Pastas

- `html/`: documento semântico e ponto de entrada.
- `css/`: estilos responsivos, estados de foco e formulários.
- `imagens/`: marca em SVG.
- `js/app.js`: inicialização, estado e composição das telas.
- `js/modules/`: roteamento, templates, eventos, validação e persistência.

## Funcionalidades

- Rotas por hash para início/oportunidades, inscrições e participação.
- Cartões criados com a API DOM e `textContent` para inserir conteúdo com segurança.
- Formulário com validação de nome, e-mail e causa, erros associados aos campos e foco no primeiro campo inválido.
- Inscrição em oportunidade com persistência em `localStorage`.
- Navegação adaptável com menu móvel, indicação de rota ativa e suporte a teclado.
- Os dados de demonstração são fictícios. O formulário não transmite dados a servidor algum.

## Bibliotecas externas

Não foram adicionadas dependências JavaScript: os recursos nativos atendem ao escopo e mantêm a execução simples. A fonte opcional é carregada do Google Fonts; a interface tem fontes de sistema como alternativa.
