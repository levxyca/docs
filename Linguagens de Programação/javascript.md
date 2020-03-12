# Javascript
----------------------------------------------------------------
# Introdução
Qual o melhor lugar para colocar o seu script?
Você pode coloca-lo em qualquer lugar, como no body, no head. Normalmente as pessoas gostam de colocar o script como último elemento, antes de fechar a tag body, por questão de carregamento da página.
~~~html
<script> </script>
~~~
## Variáveis
- Não precisamos definir o tipo da variável
~~~javascript
    var nome = "Diego";
    var idade = 23;
    var peso = 80.5;
    var humano = true;

    var alunos = ['Diego', 'Gabriel', 'Lucas'];
    
    var aluno = {
        nome: 'Diego',
        idade: 23,
        peso: 80.5,
        humano: true
    };
~~~
## Operações matemáticas
~~~javascript
var soma = x + y;
var multiplicacao = x * y;
var subtracao = x - y;
var divisao = x / y;
var restodadiv = x % y;
~~~
~~~javascript
x = x + 3; 
x += 3; //faz o mesmo que o comando acima
//incremento, podemos trocar para qualquer operador e podemos trocar o 3 por qualquer outra variável também
~~~
## Funções
~~~javascript
    function soma(numero1, numero2) {
        var resultado = numero1 + numero2;
        return resultado;
    }
    var resultado = soma(1, 2);
    // soma = nome da função
    // () = parâmetros
    // { } = corpo da função
    // a última linha é a execução da função
~~~
## Condicionais
~~~javascript
function retornaSexo(sexo) {
    // M, F
    // Masculino, Feminino
    // === verifica além do valor, o tipo 
    if (sexo === 'M'){
        return 'Masculino';
    } else if (sexo === 'F') {
        return 'Feminino';
    } else {
        return 'Outro';
    }
}
    
var resultado = retornaSexo('F');
console.log(resultado);
~~~
~~~javascript
function retornaSexo(sexo) {
    switch (sexo) {
        case 'M':
            return 'Masculino';
        case 'F':
            return 'Feminino';
        default:
            return 'Outro';
    }
}
    
var resultado = retornaSexo('F');
console.log(resultado);
~~~
## Operadores Lógicos
~~~javascript
&& //AND
|| //OR
!== ou != //NOT (=== ==)
~~~
## Condição Ternária
~~~javascript
    var sexo = 'M';
    
    if (sexo == "M") {
        return 'Masculino';
    } else {
        return 'Feminino';
    }
    //a forma abaixo faz a mesma coisa mas com o código reduzido
    //só podemos usar isso quando temos apenas duas condições a ser testadas
    var return (sexo == 'M') ? 'Masculino' : 'Feminino';
~~~
## Estruturas de repetição
~~~javascript
    for (var i = 0; i <= 100; i++) {
        console.log(i);
    }
~~~
~~~javascript
    j = 0;
    while (j <= 100) {
        console.log(j);
        j++;
    }
~~~
## Intervalo e timeout
~~~javascript
    function exibeAlgo() {
        console.log('Hello World');
    }
    // o código abaixo faz com que a função acima seja repetida a cada 1s
    //a medida é em milisegundos
    setInterval(exibeAlgo, 1000);
~~~
~~~javascript
    function exibeAlgo() {
        console.log('Hello World');
    }
    // esse executa a função apenas uma vez mas com um delay de 1s
    setTimeout(exibeAlgo, 1000);
~~~
## Dica: para verificar se um vetor contém um valor, utilize o método indexOf.
~~~javascript
array.indexOf(elementoDePesquisa, [pontoInicial = 0])
~~~
#### elementoDePesquisa
Elemento a ser pesquisado no array. 
#### pontoInicial
O índice para iniciar a procura. Se o índice for maior ou igual ao tamanho do array, é retornado -1 e signfica que o item não será procurado. Se o pontoInicial é fornecido com um número negativo,  é tomado como deslocamento da extremidade do array. Nota: se o pontoInicial fornecido é negativo, a procura no array acontece de frente para trás. Se o pontoInicial fornecido é 0, então o array inteiro será pesquisado. Padrão: 0 (pesquisa em todo array). 
# Manupulando a DOM
## Eventos inline
~~~html
<html>
    <head>
        <title>Curso Javascript</title>
    </head>
    <body>
        <div id="app">
            <button onclick="mostraAlerta()">Me pressione</button>
        </div>
        <script>
            function mostraAlerta() {
                alert('Botão foi clicado');
            }
        </script>
    </body>
</html>
~~~
## Trabalhando com a DOM
- Formas de buscar nosso input element:
~~~html
<html>
    <head>
        <title>Curso Javascript</title>
    </head>
    <body>
        <div id="app">
            <input type="text" name="nome" id="nome" />
            <button class="botao">Adicionar</button>
        </div>
        <script>
            var inputElement = document.getElementById('nome');

            console.log(inputElement);
        </script>
    </body>
</html>
~~~
~~~javascript
var inputElement = document.getElementById('nome');
var inputElement = document.getElementsByTagName('input'); //ou
var inputElement = document.getElementsByTagName('input')[0];
var inputElement = document.getElementsByClassName('nome');
~~~
- Forma mais utilizada
~~~html
<html>
    <head>
        <title>Curso Javascript</title>
    </head>
    <body>
        <div id="app">
            <input type="text" name="nome" />
            <button class="botao">Adicionar</button>
        </div>
        <script>
            var inputElement = document.querySelector('div#app input');

            console.log(inputElement);
        </script>
    </body>
</html>
~~~
## Lidando com elementos
