# Javascript
------------------------------------------------------------------------

Linguagem de programação interpretada

# Hello World!

```jsx
console.log('Hello Wordl!');
```

# Introdução

Qual o melhor lugar para colocar o seu script? Você pode coloca-lo em qualquer lugar, como no body, no head. Normalmente as pessoas gostam de colocar o script como último elemento, antes de fechar a tag body, por questão de carregamento da página.

```jsx
<script src="script.js"></script>
```

## Variáveis

Responsáveis por guardar dados na memória.

- Pode iniciar com *let o*u *var*
- Caso tenha um valor fixo, pode criar uma constante com *const*
- Não precisamos definir o tipo da variável
- Palavra Chave → Nome → Valor

```jsx
var nome = 'Leticia';
let idade = 18;
const querAprender = true;

var pessoas = ['Diego', 'Gabriel', 'Lucas'];
```

### Vírgula

- Você pode usar vírgula para criar mais de uma variável

```jsx
var nome = 'Leticia',
		idade = 18,
		querAprender = true;
```

### Variável sem valor

- Você também pode declarar e não atribuir nenhum valor inicialmente

```jsx
var semValor;
// retorna undefined
```

### Nome das variáveis

- Case sensitive
- Camel case
- Não pode usar palavras reservadas

## Tipos de dados

- São primitivos, exceto os objetos.

```jsx
var nome = 'Leticia'; // String
var idade = 18; // Number
var possuiFaculdade = false; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object
```

### Verificando o tipo de dado

```jsx
var idade = 18;
console.log(typeof idade);
// retorna number
```

### Strings

Você consegue:

1. somar uma tring
2. concatenar palavras
3. somar números com strings

```jsx
var nome = 'Leticia';
var sobrenome = 'Leonardo';
var nomeCompleto = nome + ' ' + sobrenome;
```

```jsx
var coposAgua = 5;
var frase = 'Leticia bebeu ' + coposAgua + ' copos de água';
```

### Template String

- Expressões / variáveis dentro de ${}

```jsx
var coposAgua = 1000;
var frase1 = 'Leticia bebeu ' + coposAgua + ' copos de água';
// Utilizando Template String
var frase2 = `Leticia bebeu ${coposAgua} copos de água`; 
```
