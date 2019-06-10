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
    - [x] Sempre que houver um click adicionar headerGlobal__menuArea--active 
    - [x] Se já existir a classe headerGlobal__menuArea--active tem que remover

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
