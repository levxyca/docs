# Javascript
------------------------------------------------------------------------

Linguagem de programação interpretada

# Hello World!

```jsx
console.log('Hello World!');
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

### Switch

```jsx
var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}
```

## Funções

- Bloco de código que pode ser executado e reutilizado
- Parênteses () executam uma função
- Ao criar uma função, você pode definir parâmetros
- Ao executar uma função, você pode passar argumentos
- Separar por vírgula cada parâmetro
- Se não executarmos a função nada que estiver dentro dela vai acontecer
- Quando não definimos o return, ela irá retornar *undefined*
- Pode retornar qualquer tipo de dado e até outras funções
- JS 'move' todas as funções declaradas para a memória

```jsx
function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(4) // 16
areaQuadrado(5) // 25
areaQuadrado(2) // 4
```

```jsx
// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

imc(60, 1.50) // g0 e 1.50 são os argumentos
```

### Argumentos podem ser funções

- Geralmente são funções que ocorrem após algum evento
- Anônimas são aquelas em que o nome da função não é definido
- function() {} ou () => {}

```jsx
addEventListener('click', function() {
  console.log('Clicou');
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima
```

### Escopo

Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.

### Escopo Léxico

Funções conseguem acessar variáveis que foram criadas no contexto pai, por exemplo, quando temos uma função dentro de outra função.

## Objetos

- Conjunto de variáveis e funções, que são chamadas de propriedades e métodos
- **This** irá fazer uma referência ao próprio objeto
- O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo

```jsx
var pessoa = {
  nome: 'Leticia',
  idade: 18,
}

pessoa.nome; // 'Leticia'
pessoa.idade; // 18

//DOT NOTATION SET
pessoa.idade = 19;
pessoa.idade; //19

//ADICIONAR PROPRIEDADES E MÉTODOS
pessoa.possuiFaculdade = true;
```

### Métodos

- É uma propriedade que possui uma função no local do seu valor
- Abreviação de **area: function() {}** para **area() {}**, no ES6+

```jsx
var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
}

quadrado.lados; // 4
quadrado.area(5); // 25
```
## Arrays e Loops

### Array

Servem para guardarmos diferentes valores em uma única variável

```jsx
var frutas = ['Banana', 'Abacaxi', 'Maça'];

videoGames[0] // Banana
videoGames[2] // Maça
```

### For Loop

Fazem algo repetidamente até que uma condição seja atingida.

```jsx
for (var n = 0; n < 10; n++) {
  console.log(n);
}
// Retorna de 0 a 9 no console
```

### While Loop

```jsx
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console
```

### Arrays e Loops

```jsx
var frutas = ['Banana', 'Abacaxi', 'Maça'];
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
```

### Break

Faz com que o loop pare.

### forEach

Executa uma função para cada item da Array.

```jsx
var frutas = ['Banana', 'Abacaxi', 'Maça'];
frutas.forEach(function(fruta) {
  console.log(fruta);
});
// O argumento item será atribuído dinamicamente
```

## Atribuição e Ternário

### Comentários

```jsx
// Comentário de uma linha

/*
Comentário
com diversas
linhas
*/
```

### Operadores de atribuição abreviados

```jsx
x += y;
x -= y;
x *= y;
x /= y;
x %= y;
x **= y;
```

### Operador Ternário

Abreviação com *if* e *else*

```jsx
var numero = 1;
var verificaNumero = (numero >= 2) ? 'É maior' : 'Não é maior';
console.log(podeBeber) // Pode beber

// condição ? true : false
```

## Escopo

- Variáveis declaradas dentro de funções não são acessadas fora das mesmas.
- Declarar variáveis sem a palavra chave *var*, *const* ou *let*, cria uma variável global.
- Variáveis criadas com *var*, vazam o bloco.
- *let* e *const* respeitam o escopo de bloco.
- {} criam um escopo de bloco.

# DOM

## Introdução

É uma interface que representa documentos HTML e XML através de objetos

### Window e Document

- Principais objetos do DOM
- window é objeto global

```jsx
window.alert('Isso é um alerta');
alert('Isso é um alerta'); // Funciona

document.querySelector('h1'); // Seleciona o primeiro h1
document.body; // Retorna o body
```

### Node

- Toda tag html é representada pelo objeto Element
- Element é um tipo de objeto Node

```jsx
const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo
```

## Seleção de elementos

- **getElementById** seleciona e retorna elementos do DOM
- **getElementsByClassName** e **getElementsByTagName** selecionam e retornam uma lista de elementos do DOM (automaticamente atualizada)
- **querySelector** retorna o primeiro elemento que combinar com o seu seletor CSS
- **querySelectorAll** retorna todos os elementos compatíveis com o seletor CSS em uma NodeList (estática)
- **HTMLCollection** e **NodeList** são array-like, parecem uma array mas não são. O método de Array **forEach()** por exemplo, existe apenas em NodeList.
