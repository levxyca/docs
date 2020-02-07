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