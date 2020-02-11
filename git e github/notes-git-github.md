# Git
---------
Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.
## Funcionalidades
### Histórico
- Alternar entre as versões
- Saber que existe um "plano B" caso as alterações não deem certo
### Trabalho em equipe
- Desenvolvimento em paralelo em diferentes ambientes
### Ramificação
- Possibilidade de criar várias versões a partir de um ponto
- Juntar as funcionalidades/mudanças após finalizadas
### Rastreabilidade
- Identificar em que ponto a mudança foi feita
- Identificar o responsável pela mudança
## Tipos de controle de versão
### Centralizado
- Servidor centralizado que possui todo o histórico
- Padrão durante muitos anos
### Distribuído
- Cada computador possui uma cópia do repositório
    - Alterações rápidas e locais
    - Réplica de repositórios caso o central se perca
## Comandos Básicos
### Configurações do usuário
```sh
git config --global user.name "Seu nome"
git config --global user.email "Seu email"
```
Caso queira ver se as suas configurações estão corretas, você pode listar elas:
```sh
git config --list
```
### Criação de um repositório local
Primeiro, crie uma pasta para o projeto e em seguida entre na pasta via comando no terminal.
```sh
cd nomedapasta/
```
Para listar o que tem na pasta via comando:
```sh
dir
```
Inicializando o repositório:
```sh
git init
```
Caso precise forçar a listagem de arquivos ocultos:
```sh
dir -a
```
Após a criação do repositório, ele vai mostrar um master que é uma branch, ou também pode ser chamada de ramificação.

"Master" é a branch principal do projeto quando um repositório é criado.

Nesse primeiro momento, como só temos ela, ela é nossa branch base e a partir dela podemos criar novas branches.

Quando listamos os arquivos ocultos, encontramos um arquivo ".git" que guarda todas as informações do repositório, como se fosse um banco de dados.

Ainda é válido ressaltar que o repositório não precisa estar vazio para ser inicializado. Caso queira iniciar um já coma rquivos dentro é só seguir mesmos passos de anteriormente.

A partir do momento que você inicializa o repositório já se pode começar a versionar o seu projeto.

### Versionamento - Adicionando Alterações
Você precisa falar pro git quais os arquivos que você quer versionar.

Para ver qual é o estado dos seus arquivos:
```sh
git status
```
Untracked file significa que aquele arquivo não está sendo rastreado.

Para adicionar um arquivo para ser restreado:
```sh
git add nomedoarquivo
```
Caso queira fazer isso com mais arquivos, por exemplo, com todos os arquivos da pasta, temos três opções:
```sh
git add --all
git add -A
git add .
```
### Versionamento - Salvando alterações
Commit é você salvar uma nova versão do seu banco de dados local no seu git.
```sh
git commit -m "Insira a mensagem explicando o que foi feito aqui"
```
### Funcionamento do git
#### Working Directory
Seria o local dos arquivos, no caso, a pasta local no seu computador.
 - Arquivos
    - Modificados
    - Excluídos
    - Adicionados

Para ir pro próximo estágio:
```sh
git add
```
#### Stagind Area (Staged)
Arquivos adicionados e preparados para serem versionados.

Próximo estágio:
```sh
git commit
```
#### Comitted
Os arquivos estão salvos.
### Visualizando alterações
Diz as diferenças que ocorreram no seu repositório de trabalho e nas alterações que você tem commitado:
```sh
git diff
```
Para ver as diferenças no modo de preparação antes de commitar:
```sh
git diff --cached
```
### Histórico de alterações
Comando usado para ver o histórico de todos os commits que foram feitos no seu projeto:
```sh
git log
```
As modificações são listadas sempre das mais recentes para as mais antigas.

O número gigante que aparece escrito após o commit no git log é um tipo de id única para o seu commit, esse número é gerado aleatóriamente e mais tarde nós poderemos usar ele.

O HEAD aponta a sua última modificações em uma branch.

O git log tem muitas configurações, vale a pena pesquisar mais. Por exemplo, o comando a baixo mostra todas as modificações em uma linha e é interessante pra quando você tem muitos commits.
```sh
git log --oneline
```
### Usando commits anteriores
Para usar as modificações anteriores vamos utilizar aquele número escrito após o commit no git log.
```sh
git checkout insiranumero
```
Como esse número é muito grande você pode digitar somente os 6 primeiros, pois estes são únicos.

Quando você ver "Detached HEAD" significa que a gente pegou nosso checkout e foi para um lugar diferente do HEAD.

Para sair do commit antigo:
```sh
git checkout nomedabranch
git checkout master
```
### Desfazendo alterações
Para desfazer as alterações feitas no git, podemos voltar o arquivo para o commit anterior:
```sh
git checkout nomedoarquivo
```
Entretanto, isso não funciona para arquivos adicionados, ou seja, arquivos novos no projeto.

Quando tmos muitos arquivos modificados, fica inviável usar o método acima, como solução podemos usar um comando para desfazer as alterações de todos os arquivos que estão na sua branch, onde você consegue voltar ao estado inicial:
```sh
git reset --hard
```
Dessa forma você volta diretamente sem precisar de uma confirmação, como um atalho, mas também pode-se fazer da seguinte forma:
```sh
git reset
git reset --hard
```
### Desfazendo alterações não rastreadas
Para forçar a remoção de arquivos que foram adicionados:
```sh
git clean -f
```
O git clean também possui várias opções de comandos que vale a pena conferir.
### Ignorando arquivos
Em certas situações vamos ter arquivos aos quais não queremos que sejam versionados, como arquivos gerados durante uma execução, para ignorar esses arquivos vamos criar um arquivo da extensão git ignore.

No windows:
```sh
ren a.txt .gitignore
```
Dentro do arquivos .gitignore nós podemos usar alguns padrões para falar para o git excluir arquivos de um certo tipo. Por exemplo:
"nomedoarquivo.extensão" - para excluir um arquivo específico
"*.extensão" - para excluir do versionamento todos os arquivos deste tipo
"nomedapasta/*.extensão" - para ecluir todos os arquivos deste tipo que estão dentro da pasta "x"

No mac/linux:
Use mv.
### Clonando repositório
Para clonar um repositório utilizaremos o git clone, que funciona não só em urls remotas como em arquivos locais.
```sh
git clone nomedapastaclonada/ nomedanovapasta
git clone url
```
## Git hub
### Introdução ao Github
O github consegue armazenar os seus repositórios e com ele você tem o controle de versão dos seus arquivos.
### Criando repositório
No próprio github, temos as configurações na parte de criar um novo repositório:
- Nome do repositório
- Descrição do seu projeto
- Público ou Privado
- Pode inicializar com o readme já ou não
- Adicionar gitignore caso queira
- Possui MIT license como opção
### Versionar alterações no servidor
Depois de modificar um arquivo seu com git add e commitar, para enviar essa mudança pro servidor você vai utilizar:
```sh
git push
```
### Baixar a última versão do repositório
Com esse comando, vamos para o servidor e observamos se a versão utilizada localmente está desatualizada, caso esteja, ele baixa a última versão do projeto/repositório.
```sh
git pull
```
### Star, fork e pull request
#### Watch
Not Watching: não está observando, será notificado somente se algum participante te @mencionar
Releases Only: notificação de novas versões
Watching: observando
Ignoring: nunca será notificado sobre nada daquele projeto
#### Star
Você pode favoritar projetos para fácil acesso posteriormente.
#### Fork
O fork pega o projeto e basicamente faz um clone dele, a diferença é que no fork você leva todos o projeto pro seu perfil e aí você consegue versioná-lo.
#### Pull Request
Quando você faz um fork do projeto e faz modificações nele, você pode dar um pull request para contribuir com aquele projeto, com isso suas contribuições vão poder ir para o projeto original.
### Issues, milestones, labels
#### Issues
É onde você pode relatar os erros que encontrar no projeto.
#### Labels
Serve para marcar as issues abertas, como um tipo de tag.
#### Milestones
É algo como um release, um filtro a mais, basicamente, uma nova versão.

Você consegue tentar resolver problemas (issues) de outros projetos, no pull resquest, na parte de descrição é só digitar "Close #" e achar o nome da issue.
### Arquivo README
É onde você vai descrevar as funcionalidades do projeto, como usar e coisas do tipo.
## Comandos intermediários e avançados
### Conceitos de branch
- Branch é uma ramificação no projeto que permite que funcionalidades sejam desenvolvidas separadamente sem impactar funcionalidades estáveis no projeto.
- Existem várias branches no repositório e algumas podem não ser utilizadas.
- Merge é você colocar uma branch no branch master, ou seja, implementar pro usuário final.
- As branches permitem que a gente desenvolva as coisas separadamente.