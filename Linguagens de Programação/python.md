# Python
---------------------------------------------
Curso usado: Python para zumbis

- Programar == Lógica + Sintaxe
- Python == foco em Lógica Básica de programação

## Começando com o básico
### Hello World em Python
~~~python
print ('Hello World!')
~~~
- Letras maiusculas e minusculas em python são comandos diferentes, atente-se a isso.
### Operações básicas
~~~python
2 + 2 Adição
3 * 4 Multiplicação
3 / 2 Divisão
2 ** 10 Exponenciação
2 % 3 Resto da Divisão
~~~
### Observando tipos de classes
~~~python
type(42)
type(3.1223)
type('Hello')
...
~~~
### Variáveis
~~~python
a = 42
b = 'Hello'
~~~
~~~python
id(a)
id(42)
id('abacate')
id(b)
~~~
- As variáveis em python são todas objetos
~~~python
2 * a
c = a + 3
~~~
~~~python
a = 2
b = 3
print (a + b)
~~~
~~~python
a = 'abacate'
b = ' e banana'
print (a + b)
~~~
- Em python as strings podem ser somadas
- Uma dica interessante, muitas vezes nós não sabemos todas as possibilidades que temos com aquele elemento, para isso , nós podemos digitar, por exemplo: dir('abacate') e ele vai nos listar vários comandos que podemos usar
- Também podemos pedir uma colinha pra saber o que um comando faz, então seguindo o exemplo acima: help('abacate'.upper), no upper você troca por qualquer outra comando que queira.
### Operadores relacionais e lógicos
Esses operadores nos ajudam a fazer comparações e igualdade entre as variáveis.
#### Relacionais
~~~python
a > b | Maior que
a < b | Menor que
a == b | Igual a
a != b | Diferente de
a >= b | Maior ou igual
a <= b | Menor ou igual
~~~
#### Lógicos
~~~python
a >= 6 and b <= 20 | As duas condições precisam ser verdadeiras
a == 42 or b == 42 | Uma das condições precisam ser verdadeiras
~~~
### Imprimindo nossos dados na tela
#### Marcadores
~~~python
a = 42
print ('O número é', a)
~~~
~~~python
a = 42
print ('O número', a, 'é muito legal')
~~~
- Quando temos essa situações de colocar uma variável para ser impressa no meio, é legal utilizar os marcadores
~~~python
a = 42
print ('O número %d é muito legal' %a)
~~~
~~~python
%d | Inteiro
%s | String
%f | Float
%.2f | Para escolher o número de casas que vai mostrar na tela
~~~
### Entendendo conceitos sobre linguagem dinâmica e tipagem forte
#### Dinâmica, forte e múltipla
- Quando nós temos uma varivável que assumir types diferentes, nós chamamos de variável dinâmicamente tipada, que é o caso do python
- A linguagem também é fortemente tipada, pois nós temos uma checagem onde só podemos, por ezxmplo, somas variáveis de um mesmo type.
- Por fim, ela é múltipla, pois por exemplo, em C, se quisermos trocar o valor de a para b e vice versa, nós iremos precisar de uma variável auxiliar, já em python, podemos fazer apenas: a, b = b, a
#### Teste de mesa ou Simulação
- É executar algo passo a passo, no caso, linha a linha.
### Entrada de dados
~~~python
nome = input ('Digite o seu nome: ')
print (nome)
~~~
~~~python
n1 = int(input ('Digite o primeiro número: '))
n2 = int(input ('Digite o segundo: '))
print (n1 + n2)
~~~
### Comentários
Para fazer comentários em python utilizamos a '#'
## Estruturas de controle
### Condições
#### If
~~~python
if a > b:
    pass
~~~
#### Else
~~~python
if a > b:
    pass
else:
    pass
~~~
#### Elif
~~~python
if a > b:
    pass
elif a < b:
    pass
elif a = b:
    pass
else:
    pass
~~~
### Repetições
#### While
~~~python
x = 1
while x <= 3:
    print (x)
    x = x + 1
~~~
#### Contadores
~~~python
x = 1
x = x + 1
~~~
#### Acumuladores
A diferença entre um contador e um acumulador é que nos contadores o valor adicionado é constante e, nos acumuladores, variável.
~~~python
n = 1
soma = 0
while n <= 10:
    x = int(input("Digite o %d número: " %n))
    soma = soma + x
    n = n  + 1
print ("Soma: %d" %soma)
~~~
#### Break
~~~python
soma = 0
while True:
    x = int(input("Digite o número (0 sai): "))
    if x == 0:
        break
    soma = soma + x
print ("Soma: %d" %soma)
~~~
#### Repetições aninhadas
- Exemplo com as tabuadas de 1 a 10:
~~~python
tabuada = 1
while tabuada <= 10:
    n = 1
    print ("Tabuada %d" %tabuada)
    while n <= 10:
        print ("%d x %d = %d" %(tabuada, n, tabuada * n))
        n = n + 1
    tabuada = tabuada + 1
~~~