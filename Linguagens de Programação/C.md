# C

Files: https://drive.google.com/file/d/0B-1TnLlQA-iqRlphR2lOR2JLN3NEMU1oaHN3Q2xzd2FtbFRn/view?usp=sharing, https://www.tutorialspoint.com/cprogramming/index.htm, https://www.tutorialspoint.com/c_standard_library/index.htm, https://www.unicamp.br/fea/ortega/info/aula09.htm, https://www.cprogressivo.net/2013/03/Como-gerar-numeros-aleatorios-em-C-com-a-rand-srand-e-seed.html, https://cloud.utfpr.edu.br/index.php/s/812GTTK8CNZtdFU
Tags: linguagem, programação, utfpr

int main () {
    	printf("Hello World!");
    	return 0;
    }

### #include <stdio.h>

- Include é uma diretiva
- Stdio.h é o nome de uma biblioteca
- Dentro da biblioteca Stdio.h existe um código em C
- É como se você dissesse ao C: 'ei, adiciona esse arquivo stdio.h no programa, vou precisar das funções contidas neles'
- O std de 'stdio' é de standard (padrão)
- O io é de input/output (entrada e saída)

### int main () {}

- main ( ) é a função principal, tudo começa a partir dela
- { } : tudo que está dentro é o código da função

## Indentação e comentários

- Comentários são utilizados para descrever o que determinada linha está fazendo ou não
- Indentação é a forma como organizamos nosso código

    // Comentário de uma linha
    
    /* 
    Comentário
    				com
    					várias
    							linhas
    */

## Características das variáveis

- Variável é um espaço de memória reservado
- Armazenamento temporário de informação
- Todo variável possui: tipo, nome, tamanho e valor

## Tipos de variáveis

- int →  inteira "%d"
- float →ponto flutuante "%f"
- double → mais preciso "%lf"
- char → caractere "%c"

## Declaração de variáveis

    int a;

## Modificadores do tipo inteiro

A diferença entre os inteiros está na faixa de valores armazenadas

- short →valores pequenos
- long → cálculos de cunho acadêmico, como cientifico e estatístico. (+RG, CPF)
- unsigned → nunca recebe um valor negativo
- signed → padrão do tipo inteiro

## Entrada e Saída de dados

### printf

Usado para imprimir algo na tela.

    printf("Hello World!");

### scanf

É a nossa entrada de dados.

    scanf("%d", &valor);
    
    scanf("%d %d", &num1, &num2);

## Operadores Aritméticos

- Soma              +
- Subtração       -
- Multiplicação   *
- Divisão            /
- Resto              %
- Atribuição       =
- Igual               ==

## Caracteres de Escape

- \n → quebra uma linha
- \t →tab no momento que está imprimindo
- \\ → imprime uma barra invertida
- \" → imprime aspas duplas
- \' → imprime aspas simples
- \0 → finaliza o texto

## Estrutura Condicional em C

Tomada de decisão, se e senão.

    if (condição) {
    	// código que será executado se for verdadeiro
    }

    if (condição) {
    	// se a condição for verdadeira esse código vai ser executado
    } else {
    		// caso for falsa é esse código que irá executar
    }

## Testes e Comparação

### Operadores relacionais

- == → igualdade → x == y
- > → maior que → x > y
- < → menor que → x < y
- > = → maior ou igual a → x > = y
- < = → menor ou igual a → x < = y
- ! = → diferente de → x ! = y

### Operadores lógicos

- && → e
- ! → negação
- || → ou

## Estrutura de repetição em C

Enquanto, para...

    //repete um mesmo bloco de instrução por um determinado nº de vezes
    while (condição) {
    	(código)
    }

    // iŕa executar pelo menos 1 vez
    Do {
    	(código)
    } while (condição);

    for (declaração; condição; incremento) {
    	(código)
    }

## Switch

Serve para fazer testes condicionais

    switch (opcao) {
    	case opcao1:
    		(comandos)
    		break;
    	case opcao2:
    		(comandos)
    		break;
    	case opcao3:
    		(comandos)
    		break;
    	default
    		(comandos)
    }

## Operadores de incrementos e decremento

- ++ → incremento
- - - → decremento

## Associatividade em C

- Associação da esquerda para a direita.
1. ( )
2. *, /, %
3. +, -
4. <, <=, >, >=
5. ==, !=
- Associação da direita para a esquerda
1. --, ++
2. =, +=, -=, *=, /=, %=

## Instrução break e continue

- *Break* interrompe o laço todo.
- *Continue* interrompe somente um único ciclo.

## Vetores (Arrays)

### Pra que serve?

- Extrair informações de uma grande quantidade de dados,
- Automatizar esse processo.

### Como declarar?

    int idade[10];
    
    float notas[50];

- tipo nome [tamanho];
- O primeiro elemento é sempre o zero.

### Inicialização de vetores

    int numeros[3] = {1, 2, 3};
    
    numeros[0] = 1;
    numeros[1] = 2;
    numeros[2] = 3;
    
    char vogal[] = {...};

- Semelhantes em tipo.
- Estrutura de dados homogênea.

### Referências em vetores

- Primeiro elemento tem índice 0.
- Último tem índice tamanho -1.

    #define MAX 10
    ...
    int i = 7;
    
    float valor[MAX]; //declaração
    
    valor[1] = 6.645; //inicialização
    
    scanf ("%f", &valor[i]); //recebendo
    
    printf ("%f", &valor[i]); //mostrando

## Matrizes (Vetores Multidimensionais)

### Como declarar?

    <tipo_de_dado> <nome_matriz> [tam_1][tam_2]...[tam_n];

- Exemplo de matriz 2x5.

    float matriz[2][5];
    // 2 = linha e 5 = coluna

### Como inicializar?

- Cada linha entre chaves { }
- Separar por vírgula.

    float matriz[2][5] = { {1, 2, 3, 4, 5};
    											 {1, 3, 7, 8, 9};
    											 {6, 5, 4, 7, 1} }

## Funções em C

- Rotinas ou subprogramas.
- Funções pré-definidas.
- Funções do usuário.

### Como declarar?

    tipo_de_retorno nome_da_funcao (lista_de_parametros) {
    	codigo_da_funcao
    }

### Chamada da função

    nome_da-funcao (lista_de_argumentos)

### Protótipo de uma função

- A função é declarada após a main ( ).
- Antes do main ( ) apenas o protótipo.

    int teste (int a);
    
    int main () {
    	int a = 1;
    	...
    }
    
    int teste (int a) {
    	...
    	return a;
    }

### Tipos de função

- **Sem retorno, sem parâmetro**

    void minhaMedia (void) {
    	float num1 = 3.45,
    				num2 = 96.55,
    				med 0;
    	med = (num1 + num2)/2.0;
    	printf ("Media = %f", med);
    }

    void main () {
    	...
    	minhaMedia();
    }

- **Com retorno, sem parâmetro**

    float minhaMedia (void) {
    	float num1 = 3.45,
    				num2 = 96.55,
    				med 0;
    	med = (num1 + num2)/2.0;
    	return med;
    }

    void main () {
    	float var 0;
    	...
    	var = minhaMedia();
    	printf ("Media = %f", med);
    }

- **Sem retorno, com parâmetro**

    void minhaMedia(float a, float b) {
    	float med = 0;
    	med = (a + b)/2.0;
    	printf("Media = %f", med);
    }

    void main () {
    	float num1 = 3.45,
    				num2 = 96.55;
    	...
    	minhaMedia(num1, num2);
    }

- **Com retorno, com parâmetro**

    float minhaMedia(float a, float b) {
    	float med = 0;
    	med = (a + b)/2.0;
    	return(med);
    }

    void main () {
    	float num1 = 3.45,
    				num2 = 96.55,
    				var = 0;
    	...
    	var = minhaMedia(num1, num2);
    	printf("Media = %f", var);
    }

## Strings

### O que é uma string?

- Vetor de caracteres.
- Delimitador: \0

### Como declarar e inicializar

    char nome_da_string[tamanho];

- \0 também fará parte da string.
- Sempre coloque +1 no tamanho.
- O C coloca automaticamente o \0 ao final da string.

    char curso[] = "C Progressivo";
    
    char curso[0] = 'C';
    
    char curso[14] = "C Progressivo";
    
    char curso[14] = {'C', '', 'P', ...};
    
    //diferentes formas de inicializar uma string

### Escrevendo strings

- **puts**
    1. simples
    2. força mudança de linha

    puts (nome_da_string);

- **printf**
    1. versátil
    2. mescla strings com variáveis

    printf ("O cliente %s chegou.", nome);

### Lendo strings

- **scanf**
    1. só recebe uma única palavra
    2. não usa o & antes do no da variável
    3. não controla quantidade de caracteres recebido em relação ao tamanho declarado

    scanf ("%s", nome_da_string);

- **gets**
    1. específica para receber dados do tipo string
    2. também não controla a quantidade de caracteres recebidos em relação ao tamanho declarado

    gets (nome_da_string);

- **fgets**
    1. não tem as restrições anteriores
    2. 3 argumentos
    3. tamanho -1
    4. stdin (padrão para teclado)

    fgets (<var_string>, <tam_nx>, <stream>);

### Funções para manipulação de strings

Para usá-las é preciso do <string.h>

- **strcpy**
    1. copia uma string para outra

    strcpy (<string_destino>, <string_fonte>);

- **strcat**
    1. concatena duas strings

    strcat (<string_juntada>, <string_fonte>);

- **strcmp**
    1. compara duas strings e retorna um valor
        1. < 0 se a primeira vier alfabeticamente antes
        2. 0 se as strings forem iguais
        3. > 0 se a primeira vier alfabeticamente depois
    2. diferencia letras maiúsculas e minusculas

    strcmp (<strig1>, <string2>);

- **stricmp**
    1. idem ao anterior porém *não diferencia* letras maiúsculas e minusculas

    stricpm (<string1>, <string2>);

- **strlen**
    1. retorna um inteiro
    2. nº de caracteres da string
    3. não conta o \0

    strlen (<string1>);

## Struct

- Estrutura de dados heterogênea
- Agrupa vários tipos de variáveis

    struct nome_do_tipo {
    	tipo campo1;
    	tipo campo2;
    		...
    }

### Como declarar variável deste tipo

    struct nomedotipo nomevari;

### Operador de acesso

- " . "
- Para acessar basta colocar um ponto após o nome que você escolheu para a struct.

    nomestruct.nomelemento

### Typedef

    typedef tipo_existente nome_que_vc_escolheu

### Struct para Função

    void nomefunção(struct nomestruct parâmetro)

### Estruturas Aninhadas

- Membros de uma struct podem ser outra struct.