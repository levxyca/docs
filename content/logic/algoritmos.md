+++
title = "algoritmos"
+++

# Algoritmos

# Introdução

- Algoritmos são um conjunto de comandos que resultam uma sucessão finita de ações.
- Servem para resolver um problema.

## Descrição de algoritmos

### Narrativa

- Especifica seus passos verbalmente.
- Linguagem natural, prolixa e imprecisa.
- Comentários, detalhes.

### Fluxograma

- Graficamente.
- Lógica do algoritmo, passos individuais e interconexões.
- Linhas indicam a ordem e sentido.

### Linguagem Algorítmica

- Simplificada.
- Descreve o algoritmo.
- Pseudocódigo, portugol.

### Método Top-Down

- Solução de problemas em decomposição sistemática.
- Proposta Geral →Subproblema1 e Subproblema2

## Desenvolvimento Estruturado

- Refinamentos sucessivos.
- Comandos e estrutura de controle.
- Entrada de dados → Processamento → Saída

### Casos de teste

- Descreve uma condição a ser testada.
- Valores de entrada, restrições e resultados esperados.
- *Boa prática:* indicar várias possibilidades de entrada e saídas esperadas.

### Teste de mesa

- Processo manual validador.
- Utilizado quando não se tem uma ferramenta automatizada.
- Rastreamento do algoritmo.

# Fundamentos

## Constantes e variáveis

### Definição de constante

- Valor fixo.
- Numérica (23, (3,14), -15).
- Lógica (verdadeiro, falso).
- Literal ou caractere ("Mensagem", "José", "1234", "23/09/55").

### Definição de variável

- Espaço de memória.
- Varia.
- Identificador (nome da variável).

### Formação de identificadores

- Um ou mais caracteres.
- Primeiro: letra.
- Seguintes: letras, nºs ou traço inferior.

### Escolha de nomes para variáveis

- Significativos.

### Forma de declaração de variáveis

```
lista-de-identificadores: nome-do-tipo
```

- Lista de Identificadores
    1. Nome para as variáveis
    2. Separados por vírgula
- Nome do tipo
    1. Inteiro
    2. Real
    3. Lógico
    4. Caractere

### Declaração de variáveis

- É uma instrução para indicar o tipo e associar o identificador com o respectivo espaço de memória.
- Somante valores do mesmo tipo.

### Convenções

- Identificadores com letras maiúsculas
- Palavra chave com letras minúsculas e grifadas, com significado próprio.
- Palavra chave é diferente de identificadores.

### Comentários

- É um texto.
- " // "

## Expressões Aritméticas

- Formada por operadores aritméticos e operandos que são constantes/variáveis do tipo numérico.

### Operadores Aritméticos

- Multiplicação *
- Divisão /
- Adição +
- Subtração -
- Divisão inteira \
- Resto da divisão %
- Potenciação ^

### Precedência (Prioridade)

1. Multiplicação, divisão
2. Adição, subtração
- Níveis de parênteses podem quebrar a precedência.
- *Associatividade* "esquerda para direita".

### Funções Prédefinidas

- Abs(EA) → Valor absoluto
- Exp(EAx,EAy) →EAx (base) elevado a EAy (expoente)
- Int(EA) → Parte inteira
- Log(EA) → Logaritmo na base 10
- LogN(EA) → Logaritmo neperiano (base e)
- Quad(EA) →Quadrado
- RaizQ(EA) → Raiz Quadrada

## Expressões Lógicas

### Operadores Relacionais

- Comparação entre dois valores do mesmo tipo
- Resulta sempre em um valor lógico.
    1. = igual a
    2. < > diferente de
    3. < menor que
    4. > maior que
    5. < menor que
    6. < = menor ou igual a
    7. > = maior ou igual a

### Precedência

1. Aritméticos
2. Relacionais

### Operadores Lógicos

- e (and) → conjunção
- ou (or) → disjunção
- nao (not) → negação

### Precedência dos operadores

1. Aritmético
2. Relacional
3. Nao
4. E
5. Ou

## Expressões Literais

- É diversificada.

### Operador de concatenação de literais

- + → concatenação

## Comando de Atribuição

### Identificador ← Expressão

- Identificador: nome da variável.
- Expressão: Aritmética, lógica ou literal.

## Comandos de entrada e saída

### Entrada

- Recebe valores do usuário e atribui as variáveis da lista.

```
leia (lista-de-identificadores)
```

### Saída

- Escreve no dispositivo de saída o conteúdo das expressões.

```
escreva (lista-de-expressões)
//ou
escreval (lista-de-expressões)
```

# Estrutura Sequencial

- *Algoritmo* é a palavra chave do ínicio.
- *Fimalgoritmo* é o fim do algoritmo.
- *Var* é onde declaramos as variáveis.
- *Inicio* é a seção de comandos.
- Os comandos são executados em sequência linear, de cima para baixo.

### Forma da estrutura sequencial

```
Algoritmo "semnome"

Var
	d1
	d2
	.
	.
	.
	dn

Inicio
	c1
	c2
	.
	.
	.
	cn

Fimalgoritmo
```

# Estrutura Condicional

- Permite a escolha do grupo de comando a ser executado.

### Simples

```
se condição entao
	sequência-de-comandos
fimse
```

### Composta

```
se condição entao
	sequência-A-de-comandos
senao
	sequência-B-de-comandos
fimse
```

### Encadeada (ou Aninhada)

```
se condição entao
	sequencia-de-comandos
senao
	se condição entao
		sequencia-de-comandos
	senao
		sequencia-de-comandos
fimse
```

### Múltipla

```
escolha expressão
caso exp11, exp12...
	comandos
caso exp21, exp22...
	comandos
caso exp 31, exp 32...
	comandos
outrocaso
	comandos
fimescolha
```

# Estrutura de Repetição

- Permite que uma sequência de comandos seja executada repetidamente.
- Também chamada de *laço* ou *loop*.
- Estrutura de repetição com contador e com condicional.

## Estrutura de repetição com Condicional

### Enquanto

- Teste no início.
- Será executada a cn zero ou mais vezes.

```
enquanto expressão-lógica faca
	c1
	c2
	.
	.
	.
	cn
fimenquanto
```

### Repita

- Teste no final.
- Será executada uma ou mais vezes.

```
repita
	comandos
ate expressão-lógica
```

## Estrutura de repetição com Contador

```
para variável de valor-inicial ate valor-limite [passo incremento] faca
	comandos
fimpara
```

## Comandos Interrompa

- As três estruturas aceitam o seu uso.
- Causa uma saída imediata do loop.
- Não é uma boa prática.

```
interrompa
```

# Variáveis Compostas Homogêneas                Vetores e Matrizes

## Vetor

- Unidimensional.
- Uma dimensão.

## Matriz

- Multidimensional.
- Duas dimensões.

## Forma de declaração de variáveis

### Vetor

```
lista-de-identificadores: vetor[V1..V2] de nome-do-tipo
```

### Matriz

```
lista-de-identificadores: vetor[V1..V2, V3..V4] de nome-do-tipo
```

### Estrutura básica para se percorrer uma matriz

```
para I de 1 ate 3 faca
	para J de 1 ate 3 faca
		leia (M[I, J])
	fimpara
fimpara
```

# Modularização                                              Funções e Procedimentos

## Módulos

- Devem ter um tamanho limitado.
- Executa uma única função bem definida.
- É constituído por comandos que operam sobre um conjunto de objetos globais ou locais.

### Objetos Globais

- Podem ser usados em módulos internos ao módulo no qual foram declaradas.

### Objetos Locais

- Não possuem qualquer significado fora do módulo em que foi declarado.

## Procedimentos

- Não retorna valor.

### Declaração do procedimento

```
procedimento nome([var] lista-de-parâmetros)

Var
	declaração-das-variáveis-locais-do-procedimento

Inicio
	sequencia-de-comandos-do-procedimento

fimprocedimento
```

### Chamada de procedimento

- Os argumentos devem concordar em número, ordem e tipo com os parâmetros.

```
nome-do-procedimento (lista-de-argumentos)
```

### Exemplo de procedimento

```
Algoritmo "Números em ordem crescente"

Var
	N1, N2, N3: inteiro

procedimento TROCA(var A, B: inteiro)
	Var
		AUX: inteiro
	Inicio
		AUX <- A
		A <- B
		B <- AUX
fimprocedimento

Inicio
leia(N1, N2, N3)
se (N1 > N2) ou (N1 > N3) entao
	se N2 < N3 entao
		TROCA(N1, N2)
	senao
		TROCA(N1, N3)
	fimse
fimse
se N2 > N3 entao
	TROCA(N1, N3)
fimse
escreval(N1, N2, N3)

fimalgoritmo
```

### Classificação dos parâmetros

- *Entrada* → valores estabelecidos fora do procedimento e não podem ser modificados dentro do procedimento.
- *Saída* → valores estabelecidos dentro do procedimento.
- *Entrada-Saída* →valores estabelecidos fora do procedimento mas podem ser alterados dentro dele.

### Passagem de parâmetros

- *Por valor* → as alteração em parâmetros dentro do procedimento não refretem no argumento associado.
- *Por referência* → alteração no parâmetro corresponde à alteração no argumento associado.

## Funções

- Retorna valor.

### Declaração de função

```
funcao nome([var] lista-de-parametros): tipo-de-retorno

Var
	declaração-de-variáveis

Inicio
	sequência-decomandos
	retorne valor-de-retorno

fimfuncao
```

### Chamada de função

- Os argumentos devem concordar em número, ordem e tipo com os parâmetros.

```
variável <- nome-da-funcao (argumentos)
```

### Exemplo

```
Algoritmo "Arranjos e Combinações"

Var
	N, P: inteiro
	A, C: real

funcao FATORIAL(N: inteiro): inteiro
Var
	FAT, I: inteiro
Inicio
	se N = 0 entao
		retorne 1 //0!=1
	senao
		se N = 1 entao
			retorne 1 //1!=!
		senao
			FAT <- 1
			para I de 2 ate N faca
				FAT <- FAT * I
			fimpara
			retorne FAT //N!=1.2.3..N
		fimse
	fimse
fimfuncao

Inicio
leia(N, P)
A <- FATORIAL(N)...
...
```