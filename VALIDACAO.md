# Validação HTML

As páginas foram enviadas individualmente, por upload, ao [Nu Html Checker do W3C](https://validator.w3.org/nu/), versão vnu 26.9.7.

| Arquivo | Resultado final |
|---|---|
| index.html | Sem erros ou avisos |
| projetos.html | Sem erros ou avisos |
| cadastro.html | Sem erros ou avisos após correção |

Mensagem retornada nas três verificações finais: “Document checking completed. No errors or warnings to show.”

No cadastro, a primeira verificação rejeitou `autocomplete="tel-national"` no campo de telefone. O atributo foi substituído por `autocomplete="tel"` e o arquivo foi reenviado, obtendo resultado sem erros ou avisos.

A validação verifica a conformidade do HTML. Não equivale a uma auditoria completa de acessibilidade, testes de interação ou validação de dados no servidor. O formulário permanece demonstrativo e não envia nem armazena dados.

