# Projeto Avaliação Java/Angular

Esta aplicação web tem como objetivo o lançamento de notas e faltas por bimestre para determinar a situação final dos alunos de uma escola.

### Escopo
Criar um projeto Java/Angular que possibilite o lançamento de notas e faltas de alunos por bimestre.
- Permite visualizar a lista de alunos seguido das notas e a situação final
- Visualizar a frequência escolar de cada aluno
- Inserir notas e faltas por bimestre
- Visualizar o boletim escolar de cada aluno
- Cadastrar um novo aluno


## Tecnologias e Linguagens utilizadas
- Nodejs
- Angular CLI
- Java(Quarkus)
- HTML/CSS/JavaScript
- Typescript
- PostgreSQL
- VSCode

## Pré-requisitos
Para utilizar o projeto corretamente é pré-requisito ter o Node.js instalado (versão 12.x ou acima) e o seu gerenciador de pacote favorito na versão mais atual. Caso você ainda não tenha instalado o pacote @angular/cli, instale-o via npm ou yarn.

Instalando com npm:

```npm i -g @angular/cli@12```

Antes de executar a instalação é necessário verificar as dependências do seu projeto, algumas delas precisam estar de acordo com a versão do Angular (elas podem ser encontradas no arquivo package.json localizado na raiz da aplicação).

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

## Instalação
- Baixe ou clone este repositório usando ```git clone https://github.com/JhonathanRibeiro/avaliacao-java-angular.git```
- Dentro do diretório 'avaliacao-java-angular', instale as dependências usando ```npm install```

## Como executar
- Execute ng serve para executar a versão de desenvolvimento. Depois acesse ```http://localhost:4200/```
- Para executar o servidor de endpoints de API, em um outro terminal na mesma pasta execute ```npm run json-server```. A API poderá ser acessada via ```http://localhost:3000/```

## Como compilar/construir
- Execute ```ng build``` para buildar o projeto. Para buildar a versão de produção adicione a flag ```--prod```. Os arquivos serão armazenados do diretório ```dist```.



