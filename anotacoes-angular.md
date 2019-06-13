## Coisas gerais

- Criar projeto: npx @angular/cli new projeto
- A pasta node modules, NUNCA deve ser versionada
  - Ela é gerada a partir do comando npm install
  - Vai na raíz do projeto e roda ele via terminal
- Pra rodar o projeto: `npm start`

  - Ele roda o ng serve

- O node entra na CLI, que automatiza varios processos chatinhos
- Como fazer upload de arquivos: https://www.youtube.com/watch?v=YkvqLNcJz3Y
  - Se quiser fazer com o arrastar e soltar "manda um drag'n drop no tio google"
- O que rege o build do angular é o: https://webpack.js.org/
  - Quem compila o typescript é o babel: https://babeljs.io/
-

## Como o JS funciona

- http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2JsYScpCnNldFRpbWVvdXQoZnVuY3Rpb24gKCkgewoJY29uc29sZS5sb2coJ2JsYTInKQp9LCAyMDAwKQpjb25zb2xlLmxvZygnYmxhMycp!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

## Como o JS evolui

- https://hipsters.tech/evolucao-e-especificacao-do-javascript-moderno/
- https://github.com/tc39/proposals

## Conceitos gerais de programação

- Assina o safari books: https://www.oreilly.com/member/login/?next=%2Fapi%2Fv1%2Fauth%2Fopenid%2Fauthorize%3Fstate%3DbAiSDlJqqSZbIzqIBmQ1ql03LzUrm3zi%26redirect_uri%3Dhttps%3A%2F%2Flearning.oreilly.com%2Fcomplete%2Funified%2F%26scope%3Dopenid%2Bprofile%2Bemail%26client_id%3D235442%26response_type%3Dcode%26login_context%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpbWFnZSI6Imljb25fYWxlcnRfdGVhbC5wbmciLCJtZXNzYWdlIjoiTG9naW4gaXMgbm93IHVuaWZpZWQgYWNyb3NzIE8nUmVpbGx5LiBQbGVhc2UgdXNlIHlvdXIgTydSZWlsbHkgY3JlZGVudGlhbHMgdG8gYWNjZXNzIHlvdXIgT25saW5lIExlYXJuaW5nIGFjY291bnQuIiwibGlua3MiOnsic2lnbl91cCI6eyJ0ZXh0IjoiU3RhcnQgYSBmcmVlIHRyaWFsLiIsImxpbmsiOiJodHRwczovL2xlYXJuaW5nLm9yZWlsbHkuY29tL3JlZ2lzdGVyLyJ9fX0.Nh-qjdUCam7vmBES1j5EKu3cLQMExW_mI66N-VISAM6Q5IWO85Rjk1qXjYFC_lszIam4JZiDt5hXXrW0JZvu-QHej5uveFyWBRxzwMJ9p9i5fMRrF7Z5xsV27ku252-3yVzH7rMsjuRjOP8xVcNZTpOg1a4eK9H-I0NSxCEnTL8UQl4FxuW2d9OAsFW6jMxwVNyxTBbsBVXBncGrcla-b1XSY0ndWWqhfds7g3AqAL2BjlfI-4yKkY3Zu-romtDL2mxwqfM_yO9JGbpr6D3ScDS6k9DySojDaXyZBTIPSbLTemwuQUmcy_VPbYwokNZ4GECg4BRD0W11r0L-090bAA&locale=en

* Procura por Martin Fowler, Uncle Bob
* Clean Code, Mythical Man Month, Clean Architechture...
* Solid para Ninjas: https://www.casadocodigo.com.br/products/livro-oo-solid
* TDD: https://www.casadocodigo.com.br/products/livro-tdd
* TDD em .NET: https://www.casadocodigo.com.br/products/livro-tdd-dotnet
* Refactoring do Martin Fowler: https://www.amazon.com.br/Refatora%C3%A7%C3%A3o-Aperfei%C3%A7oando-Projeto-C%C3%B3digo-Existente-ebook/dp/B019IZK89A?tag=goog0ef-20&smid=A18CNA8NWQSYHH&ascsubtag=go_1366271959_70721127517_351260994638_aud-519888259198:pla-749863555160_c_

## Testes e2e

- https://www.cypress.io/
-

## Definição de coisas de API

- HTTP Como trafegar os dados
- API rest: usando o que está definido no HTTP para trocar informacao
- Seguir o padrão de retorno: HATEOAS

## Regex

- https://regex101.com/

## Sobre CSS

- https://www.youtube.com/watch?v=5PS6ku8NzIE&list=PLirko8T4cEmx5eBb1-9j6T6Gl4aBtZ_5x

## Para criar APIs falsas

- https://github.com/typicode/json-server

## Lances sobre Arrays e o this no JS

- function()

  - this, tem contexto dinâmico
  - O this muda, de acordo com o objeto no contexto de execução

- () => // arrow function
  - this, é o this do contexto de criação

```js
function forEach(funcao) {
  const arr = this;

  for (let i = 0; i <= arr.length; i++) {
    funcao(arr[i], index, arr);
  }
}

function map(funcao) {
  const arr = this;
  const novoArray = [];

  for (let i = 0; i <= arr.length; i++) {
    novoArray.push(funcao(arr[i], index, arr));
  }

  return novoArray;
}
```

## Livros

- [...]
- https://www.youtube.com/watch?v=9w3o9NHXqu0
- https://www.amazon.com.br/Clean-Code-Handbook-Software-Craftsmanship-ebook/dp/B001GSTOAM?tag=goog0ef-20&smid=A18CNA8NWQSYHH&ascsubtag=go_1686871380_65779544836_327582895583_aud-580930410671:pla-778262135724_c_
- https://www.amazon.com.br/Codificador-Limpo-Bob-Martin/dp/8576086476?tag=goog0ef-20&smid=A1A2NHLUIZ4QWG&ascsubtag=go_1494986073_58431735035_285514469186_pla-566080525912_c_

## Deploy

- Pegar a ideia de mapear todos os requests pro index.html: https://blog.caelum.com.br/como-preparar-uma-aplicacao-react-para-o-deploy/
  - Automatizar com o circleci pode ser uma boa

## Organizar CSS

- https://blog.alura.com.br/criando-componentes-css-com-padrao-bem/

## Auto ajuda

- http://sou.gohorseprocess.com.br/a-piramide-go-horse/

## Componente

<!-- // Component: Objeto, Tela, uma Classe, uma parte que encapsula um... uma função uma... funcionalidade -->

- Trazer uma estrutura de componentes pra Web
  - Separar de forma mais reusavel
    - HTML, CSS e JavaScript (logicas)
  -

## Modelo de pensar do angular:

- jQuery
  - Orientado a DOM (Document Object model)
- Frameworks modernos
  - Orientado a dados

## Links uteis da documentação

- https://angular.io/api/common/NgClass
- Como o angular funciona: https://medium.com/reverse-engineering-angular/angular-deep-dive-zone-js-how-does-it-monkey-patches-various-apis-9cc1c7fcc321

## Processos

- Code Review: https://hipsters.tech/pull-requests-e-code-review-hipsters-64/
-

## Exercicio 01

- Acessar: https://github.com/caelum/projeto-js45/tree/master/01/src
  - pasta: projeto-js45/01/src/
  - logo: clica no botão "Raw"
- Importar os arquivos, menos a parte do header
  (deixar aparecendo o inbox soon no app.component.html)
- Criar o tal do Header

## Exercicio 02

### Usuario

    - Clica no botao do menu
    - Expande o menu

### Dev

- [x] Botao do HTML tem que existir
- [x] Registrar um event listener: 'click'
  - [x] Sempre que houver um click adicionar headerGlobal\_\_menuArea--active
  - [x] Se já existir a classe headerGlobal\_\_menuArea--active tem que remover

## Exericico 03

- Form de enviar emails
  - componente enviar email
    - from
    - to
    - subject
    - body
    - attchment
    - button
-
