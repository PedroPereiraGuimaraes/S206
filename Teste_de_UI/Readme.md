## Lista de Exercício - Teste de UI 🚀
### Questões 📒
- Utilizando todo conhecimento obtido durante as aulas, desenvolva nomínimo 6 casos de teste para algumwebsiteda sua escolha (Pelo menos 1 caso devesernegativo). Atente-se para as seguintes informações:

    - Recomenda-sea utilização da ferramenta cypress.
    - Nãoé permitido utilizar os websites já testados durante as aulas ou presentesno repositório da disciplina (globalsqa e testpages).
    - O código deve ser capaz de gerar o relatório final de testes. O relatório pode ser o mochawesomeou algum outro que forneça as informações relevantes para o teste.
    - O exercício deve ser entregue via GitHub. Com um README adequado que forneça informações relevantes (Ex: Como executar o projeto e obter o relatóriode testes).
 
### Projeto criado 🤓
- Foi criado um pacote de testes para a página da ```Wikipedia```, os testes criados a partir da página foram:
    ```
    ✅  Tentando criar conta com nome já usado
    ✅  Deve exibir o título da página principal corretamente
    ✅  Deve realizar uma pesquisa e verificar os resultados
    ✅  Deve verificar se o botao de contato existe
    ✅  Deve verificar se um cabeçalho contém um texto específico
    ✅  Deve verificar se o histórico de edições existe
    ✅  Deve verificar se o ícone de discussão existe
    ✅  Deve verificar se um rodapé contém um link específico
    ```
        


### Como rodar os testes 🧪
- Acese o Git Bash e digite o seguinte comando:
    ```
    ./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
    ```
- Os testes serão feitos e salvos no HTML na pasta: 
    ```
    cypress/reports
    ```
### Feito por 🔎
```
Pedro Pereira Guimarães - GEC - 1666
```
