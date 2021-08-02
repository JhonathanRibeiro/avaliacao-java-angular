# Projeto Avaliação Java/Angular

Esta aplicação web tem como objetivo o lançamento de notas e faltas por bimestre para determinar a situação final dos alunos de uma escola.

### Escopo
Criar um projeto Java/Angular que possibilite o lançamento de notas e faltas de alunos por bimestre.
- Permite visualizar a lista de alunos
- Visualizar a frequência escolar de cada aluno
- Inserir notas e faltas por bimestre
- Visualizar o boletim escolar de cada aluno

## Tecnologias e Linguagens utilizadas
- Nodejs
- Angular CLI
- HTML/CSS/JavaScript
- Typescript
- Json-Server
- VSCode

## Pré-requisitos
Para utilizar o projeto corretamente é pré-requisito ter o Node.js instalado (versão 12.x ou acima) e o seu gerenciador de pacote favorito na versão mais atual. Caso você ainda não tenha instalado o pacote @angular/cli, instale-o via npm ou yarn.

Instalando com npm:

```npm i -g @angular/cli```

## Instalação
- Baixe ou clone este repositório usando ```git clone https://github.com/JhonathanRibeiro/avaliacao-java-angular.git```
- Dentro do diretório 'avaliacao-java-angular', instale as dependências usando ```npm install```

### JSON-Server
O JSON Server é um pacote npm que permite simular uma API e isso facilita muito o desenvolvimento de aplicações. Com ele nós vamos simular um banco de dados e por meio de um URL, será possível testar requisições. Para instalar, execute o comando ```npm install -g json-server``` em seguida, nevegue até o diretório do projeto, dentro do diretório ```src/assets``` irá conter o arquivo JSON que iremos utilizar como base de dados, ```db.json```. Dentro do diretório, execute o comando ```json-server --watch db.json```, após executar esse comando deveremos ter uma API REST rodando em http://localhost:3000/alunos. Com isto estamos prontos. :)
![image](https://user-images.githubusercontent.com/37172038/127853849-b16d0a92-634f-4b76-8a7a-bc8d2492bcf7.png)


## Como executar
- Execute ```ng serve``` para startar a versão de desenvolvimento. Depois acesse ```http://localhost:4200/```. 

Veja abaixo a lista de dependências e as versões compatíveis, elas devem ser conferidas e se necessário, ajustadas no projeto.
```
"dependencies": {
    "@angular/animations": "^12.0.5",
    "@angular/common": "~12.0.4",
    "@angular/compiler": "~12.0.4",
    "@angular/core": "~12.0.4",
    "@angular/forms": "~12.0.4",
    "@angular/material": "^12.1.3",
    "@angular/platform-browser": "~12.0.4",
    "@angular/platform-browser-dynamic": "~12.0.4",
    "@angular/router": "~12.0.4",
    "rxjs": "~6.6.0",
    "tslib": "^2.1.0",
    "zone.js": "~0.11.4"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~12.0.4",
    "@angular/cdk": "^12.1.3",
    "@angular/cli": "~12.0.4",
    "@angular/compiler-cli": "~12.0.4",
    "@angular/flex-layout": "^12.0.0-beta.34",
    "@types/jasmine": "~3.6.0",
    "@types/node": "^12.11.1",
    "jasmine-core": "~3.7.0",
    "karma": "~6.3.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage": "~2.0.3",
    "karma-jasmine": "~4.0.0",
    "karma-jasmine-html-reporter": "^1.5.0",
    "typescript": "~4.2.3"
  }
```
## Visão geral
Após instalar e executar o projeto, ao acessar o mesmo você irá ser direcionado para a tela principal da aplicação:
![image](https://user-images.githubusercontent.com/37172038/127805230-3cb51617-9679-4192-a26f-79b0e6492804.png)

Observe que existe apenas um link no menu de navegação a esquerda, que representa a tela atual, as outras telas poderão ser acessadas por meio dos botões de ações que são exibidos ao passar o mouse pela listagem dos alunos:
![image](https://user-images.githubusercontent.com/37172038/127805351-709ec419-4270-4c74-8c01-e03be9009663.png)

O primeiro ícone irá redirecionar para a tela do boletim escolar, onde será possível visualizar as notas separadas por bimestres, a nota final, frequência escolar e a situação do aluno:
![image](https://user-images.githubusercontent.com/37172038/127805443-e8169406-36fe-4957-b624-aa59723e7dcf.png)
obs.Cada um dos alunos possui uma das situações possíveis conforme as condições propostas no roteiro do projeto

O segundo ícone irá redirecionar para a tela de lançamento de notas e faltas, onde será possível atualizar as notas e faltas dos alunos separados por bimestre:
![image](https://user-images.githubusercontent.com/37172038/127805620-ce59e4a9-c53b-4d52-99f0-464abc3d18a0.png)