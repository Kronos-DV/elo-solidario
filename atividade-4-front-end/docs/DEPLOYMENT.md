# Build e publicação

O build não depende de serviço externo nem de pacote de terceiros. `npm run build` gera `dist/`, comprime HTML/CSS/JavaScript, mantém os módulos e cria um manifesto com contagem de arquivos e tamanho total. Os SVG são vetoriais e não há fontes ou imagens remotas.

O workflow `.github/workflows/deploy-activity-4.yml` recompila a aplicação e prepara um artefato Pages com a página inicial existente e as quatro experiências em diretórios próprios. O job de deploy usa GitHub Pages e só publica após alteração aprovada na branch padrão.

Para concluir a ativação no GitHub, a origem de publicação do repositório precisa estar definida como **GitHub Actions** em Settings → Pages. A URL fica sob `/atividade-4-front-end/`. O workflow não altera o domínio personalizado nem encaminha dados de formulário; o site é uma demonstração estática.

## Manutenção

1. Instale uma versão suportada de Node.js.
2. Execute `npm run build`.
3. Sirva `dist/` localmente para conferir os caminhos relativos.
4. Envie a alteração em uma branch `feature/` e abra PR para `develop`.
5. Após a revisão e integração do release em `main`, acompanhe o workflow e a URL gerada pelo ambiente `github-pages`.
