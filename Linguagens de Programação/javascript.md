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

## Operadores Aritméticos

- Multiplicação e divisão, depois por soma e subtração
- Parênteses para priorizar uma expressão

```jsx
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4
```

### Operadores Aritméticos em Strings

- É possível verificar se uma variável é NaN ou não com a função isNaN()

```jsx
var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)
```

### Incremento e Decremento

- Mesma coisa para o decremento --decremento

```jsx
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6
```

## Operadores Lógicos

```jsx
&& // and
|| // or
! // not
```

## Comparação

```jsx
(==) // iguais.

(!=) // não iguais.

(===) // iguais e do mesmo tipo.

(!==) // não iguais e/ou não do mesmo tipo

(>) // maior que

(>=) // maior ou igual

(<) // menor que

(<=) // menor ou igual
```

## Boolean

- *false* ou *true*

```jsx
var possuiCurso = true;
var possuiGraduacao = false;
```

## Truthy e Falsy

- !! verifica a expressão

```jsx
// Falsy
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``
```

```jsx
// Truthy
if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({})
```

## Estruturas Condicionais

### Condicionais If e Else

```jsx
var estouTriste = true;

if(estouTriste) {
  console.log('Estou realmente triste');
} else {
  console.log('Não estou triste, olha só');
}
// retorna Estou realmente triste e não executa o else
```

### Condicionais Else If

```jsx
var a = 1,
		b = 2;

if(a < b) {
	console.log('a é menor que b');
} else if (a = b) {
	console.log('a é igual a b');
} else {
	console.log('Não é nenhuma das opções');
}
```
