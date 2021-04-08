+++
title = "Github"
sort_by = "date"
template = "docs.html"
page_template = "docs-page.html"
+++

# Github
## Introdução ao Github
O github consegue armazenar os seus repositórios e com ele você tem o controle de versão dos seus arquivos.
## Criando repositório
No próprio github, temos as configurações na parte de criar um novo repositório:
- Nome do repositório
- Descrição do seu projeto
- Público ou Privado
- Pode inicializar com o readme já ou não
- Adicionar gitignore caso queira
- Possui MIT license como opção
## Versionar alterações no servidor
Depois de modificar um arquivo seu com git add e commitar, para enviar essa mudança pro servidor você vai utilizar:
```sh
git push
```
## Baixar a última versão do repositório
Com esse comando, vamos para o servidor e observamos se a versão utilizada localmente está desatualizada, caso esteja, ele baixa a última versão do projeto/repositório.
```sh
git pull
```
## Star, fork e pull request
### Watch
Not Watching: não está observando, será notificado somente se algum participante te @mencionar
Releases Only: notificação de novas versões
Watching: observando
Ignoring: nunca será notificado sobre nada daquele projeto
### Star
Você pode favoritar projetos para fácil acesso posteriormente.
### Fork
O fork pega o projeto e basicamente faz um clone dele, a diferença é que no fork você leva todos o projeto pro seu perfil e aí você consegue versioná-lo.
### Pull Request
Quando você faz um fork do projeto e faz modificações nele, você pode dar um pull request para contribuir com aquele projeto, com isso suas contribuições vão poder ir para o projeto original.
## Issues, milestones, labels
### Issues
É onde você pode relatar os erros que encontrar no projeto.
### Labels
Serve para marcar as issues abertas, como um tipo de tag.
### Milestones
É algo como um release, um filtro a mais, basicamente, uma nova versão.

Você consegue tentar resolver problemas (issues) de outros projetos, no pull resquest, na parte de descrição é só digitar "Close #" e achar o nome da issue.
## Arquivo README
É onde você vai descrevar as funcionalidades do projeto, como usar e coisas do tipo.
## Comandos intermediários e avançados
### Conceitos de branch
- Branch é uma ramificação no projeto que permite que funcionalidades sejam desenvolvidas separadamente sem impactar funcionalidades estáveis no projeto.
- Existem várias branches no repositório e algumas podem não ser utilizadas.
- Merge é você colocar uma branch no branch master, ou seja, implementar pro usuário final.
- As branches permitem que a gente desenvolva as coisas separadamente.
### Alterações não versionadas
Caso você esteja trabalhando em um projeto e tenha arquivos não versionados, quando for mudar de branch o git irá sobrescrever os arquivos e você perderá tudo.

Caso isso aconteça, você pode dar um commit ou apenas desfazer as alterações usando:
```sh
git reset --hard
```
### Mudança de branch
Responsável por listar as branches que nós temos no nosso repositório local:
```sh
git branch
```
Para criar um nova branch localmente:
```sh
git branch nomedabranch
```
- Irá aparecer um "*" na lista de branches para identificar qual branch você está
- Você não pode criar branches com o mesmo nome

Para você ir para a branch que criou ou qualquer outra já existente:
```sh
git checkout nomedabranch
```
Um corta caminho, caso você não queira usar 'git branch' depois 'git checkout':
```sh
git checkout -b nomedabranch
```
### Enviando branch para o repositório
Primeiramente, vamos mudar para a branch que queremos enviar pro repositório, depois, usamos o seguinte comando para fazer a criação da branch lá no servidor e rastrear com a nossa branch local:
```sh
git push --set-upstream origin nomequevocequiser
```
Um corta caminho para o comando acima:
```sh
git push -u origin nomequevocequiser
```
### Atualizando branch
Quando você usa o git clone e baixa um repositório para a sua máquina, só irá aparece a branch master na sua listagem, pois caso haja outras, ela ainda não foram utilizadas por você,  logo não aparecem no histórico.

Para uma branch aparecer na listagem do 'git branch' precisamos dar um 'git checkout nomedabranch'. E, caso uma branch seja criada por outra pessoa depois de você já ter baixado o repositório, basta você atualiza-lo com:
```sh
git pull
```
### Remover branches locais
O comando para remover uma branch é:
```sh
git branch -d nomedabranch
```
- Você não pode remover uma branch que você está checado naquele momento

Caso o git não deixe você remover a branch pedindo uma validação ou algo do tipo, você pode força-lo a fazer isso com:
```sh
git branch -D nomedabranch
```
### Remover branches remotas
Para fazer remoção de uma branch que está no servidor, utilizamos:
```sh
git push --delete origin nomedabranch
```
### Renomear branch
Para renomear uma branch local, caso você esteja na branch que você quer fazer isso:
```sh
git branch -m novonome
```
Caso não:
```sh
git branch -m nomedabranch novonome
```
### Mesclando alterações
Para mesclar usamos o comando 'merge', que significa integrar a branch atual com a branch master, esse comando trás todas as alterações e já faz o commit se não tiver conflitos.
```sh
git checkout master
git merge nomedabranch
```
### Resolvendo conflitos usando o kdiff3
Kdiff3 é uma ferramenta gráfica que pode auxiliar nossa resolução de conflitos. Para utiliza-lo, primeiramente, usaremos um comando que faz com que suas ferramentas gráficas sejam abertas baseadas nas suas configurações pelo git:
```sh
git mergetool
```
Para fazer a configuração do kdiff3:
```sh
git config --global --add merge.tool kdiff3
git config --global --add mergetool.kdiff3.path "local onde foi instalado arquivo"
git config --global --add mergetool.kdiff3.trustExitCode false
```
### Pull Request
É uma requisição de mudança que você cria, ou seja, você pede para que essas mudanças sejam integradas a branch master daquele projeto, no caso, alguém irá revisar, autorizar antes de mergiar, assim evitando erros.
### Criação e listagem de tag (Release)
- Tag é um ponteiro que marca um commit específico
- Isso é importante pois alguns commits são chave durante o desenvolvimento de algo
- Um exemplo: marcar o commit que deu a versão estável de um projeto

Para fazer a criação da tag:
```sh
git tag -a nomedatag -m "Insira sua mensagem aqui"
```
Para fazer listagem das tag:
```sh
git tag
```
### Enviando tag para o repositório
```sh
git push origin nomedatag
```
### Utilizando tags
```sh
git checkout nomedatag
```
### Removendo tags
Local:
```sh
git tag -d nomedatag
```
Servidor:
```sh
git push --delete origin nomedatag
```
### Tag em commit antigos
1 opção:
- Pegar o seu commit
```sh
git log --oneline
git checkout númerodocommit
git tag -a nomedatag -m "Insira sua mensagem"
git push origin nomedatag
```
2 opção:
- Especificar o número do commit
```sh
git tags -a nomedatag numerodocommit
```
### Stash - Uso e criação
- Serve para quando você não quer desfazer uma mudança mas também não quer commitar ainda
- Basicamente, você vai pegar essas mudanças e guardar na memória
```sh
git stash
```
### Stash - Listando e removendo
Para criar o stash com comentário:
```sh
git stash save "Insira sua mensagem aqui"
```
Para listar:
```sh
git stash list
```
Para usar a stash:
```sh
git stash apply
```
- Lembrando que ele sempre pega o primeiro e executa a mudança

Para aplicar e remover:
```sh
git stash pop
```
Caso você queira poegar outro que não seja o primeiro:
```sh
git stash pop stash@{númeroquevcquer}
git stash drop stash@{númeroquevcquer}
```
### Desfazendo Commits
```sh
git reset --hard HEAD~ncommitpvoltar
```
- Não tem como desfazer um commit que está no servidor, caso precise de algo do tipo você trá que versionar o projeto e depois voltar

Permite combinar alterações na área de staging com o commit anterior em vez de criar um commit novo:
```sh
git commit --amend
```
### Fetch
Esse comando é executado junto com o 'git merge' e com o 'git pull', ele é quem trás as atualizações do servidor pro seu repositório local.
```sh
git fetch
```
Para aplicar as alterações:
```sh
git merge
```
- Basicamente são os comandos que o git pull executa.
### Rebase
É usado quando você quer ter um histórico mais linear do projeto. Basicamente ele pega os commits de uma branch e aplica em outra de forma linear.
```sh
git rebase master
```
## Utilidades
### Alias
É um comando de abreviação para usar os comandos do git de forma diferente. Exemplos:
```sh
git config --global alias.s status
git status
git s
```
```sh
git config --global alis.p pull
git pull
git p
```
Para deletar, exemplo:
```sh
git config --global --unset alis.s
```
### Remote
É um comando que mostra qual a url que está associada ao projeto que você está trabalhando
```sh
git remote -v
```
### Grep
É um filtro que a gente consegue executar junto com algum comando.
## Ferramentas gráficas
- *Sourcetree*
- *Gitkraken*