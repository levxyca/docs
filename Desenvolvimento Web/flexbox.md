# Fundamentos do Flexbox

## Display Flex

O Flexbox está dividido em dois grupos: Flex Container e Flex Item.

```css
display: flex;
```

- Quando você adiciona o flex em um elemento, ele virá um flex container e o que tive dentro dele vira flex item.
- O Flexbox respeita o conteúdo.

# Flex Container

## Flex Direction

- Define a direção dos flex itens.
- Por padrão ele é row (linha).

```css
flex-direction: row;
// Os itens ficam em linha

flex-direction: row-reverse;
// Os itens ficam em linha reversa, ou seja 3, 2, 1.

flex-direction: column;
// Os itens ficam em uma única coluna, um embaixo do outro.

flex-direction: column-reverse;
// Os itens ficam em uma única coluna, um embaixo do outro, 
porém em ordem reversa: 3, 2 e 1.
```

## Flex Wrap

- Define se os itens devem quebrar ou não a linha
- Por padrão eles não quebram (nowrap)

```css
flex-wrap: nowrap;
// Valor padrão, não permite a quebra de linha.

flex-wrap: wrap;
// Quebra a linha assim que um dos flex itens não puder mais ser compactado.

flex-wrap: wrap-reverse;
// Quebra a linha assim que um dos flex itens não puder mais ser compactado. 
A quebra é na direção contrária, ou seja para a linha acima.
```

## Flex Flow

- Atalho para as propriedades flex-direction e flex-wrap

```css
flex-flow: row nowrap;
// Coloca o conteúdo em linha e não permite a quebra de linha.

flex-flow: row wrap;
// Coloca o conteúdo em linha e permite a quebra de linha.

flex-flow: column nowrap;
// Coloca o conteúdo em coluna e não permite a quebra de linha.
```

## Justify Content

- Alinha os itens flex no container de acordo com a direção.

```css
justify-content: flex-start;
// Alinha os itens ao início do container.

justify-content: flex-end;
// Alinha os itens ao final do container.

justify-content: center;
// Alinha os itens ao centro do container.

justify-content: space-between;
// Cria um espaçamento igual entre os elementos. 
Mantendo o primeiro grudado no início e o último no final.

justify-content: space-around;
// Cria um espaçamento entre os elementos. 
Os espaçamentos do meio são duas vezes maiores que o inicial e final.
```

## Align Items

- Alinha os flex itens de acordo com o eixo do container
- O alinhamento é diferente para quando os itens estão em colunas ou linhas

```css
align-items: stretch;
// Valor padrão, ele que faz com que os flex itens cresçam igualmente.

align-items: flex-start;
// Alinha os itens ao início.

align-items: flex-end;
// Alinha os itens ao final.

align-items: center;
// Alinha os itens ao centro.

align-items: baseline;
// Alinha os itens de acordo com a linha base da tipografia.
```

## Align Content

- Alinha as linhas do container em relação ao eixo vertical

```css
align-content: stretch;
// Valor padrão, ele que faz com que os flex itens cresçam igualmente na vertical.

align-content: flex-start;
// Alinha todas as linhas de itens ao início.

align-content: flex-end;
// Alinha todas as linhas de itens ao final.

align-content: center;
// Alinha todas as linhas de itens ao centro.

align-content: space-between;
// Cria um espaçamento igual entre as linhas. 
Mantendo a primeira grudada no topo e a última no bottom.

align-content: space-around;
// Cria um espaçamento entre as linhas. 
Os espaçamentos do meio são duas vezes maiores que o top e bottom.
```

# Flex Item

## Flex Grow

- Habilidade de um flex item crescer
- Por padrão o valor é zero

```css
flex-grow: número;
// Basta definir um número

flex-grow: 0;
// Obedece o width do elemento ou o flex-basis.
```

## Flex Basis

- tamanho inicial do flex item antes da distribuição do espaço restante

```css
flex-basis: auto;
// Esse é o padrão, ele faz com que a largura da base seja igual a do item. 
Se o item não tiver tamanho especificado, o tamanho será de acordo com o conteúdo.

flex-basis: unidade;
// Pode ser em %, em, px e etc.

flex-basis: 0;
// Se o grow for igual ou maior que 1, 
ele irá tentar manter todos os elementos com a mesma largura, 
independente do conteúdo (por isso 0 é o valor mais comum do flex-basis). 
Caso contrário o item terá a largura do seu conteúdo.
```

## Flex Shrink

- Define a capacidade de redução de tamanho do item.

```css
flex-shrink: 1;
// Valor padrão, permite que os itens tenham os seus tamanhos 
(seja esse tamanho definido a partir de width ou flex-basis) 
reduzidos para caber no container.

flex-shrink: 0;
// Não permite a diminuição dos itens, assim um item com flex-basis: 300px; 
nunca diminuirá menos do que 300px, mesmo que o conteúdo não ocupe todo esse espaço.

flex-shrink: número;
// Um item com shrink: 3 diminuirá 3 vezes mais que um item com 1.
```

## Flex

- Atalho para as propriedades flex-grow, flex-shrink e flex-basis
- Para melhor consistência entre os browsers, é recomendado utilizar a propriedade flex ao invés de cada propriedade separada

```css
flex: 1;
// Define flex-grow: 1; flex-shrink: 1; e flex-basis: 0; 
(em alguns browsers define como 0%, pois estes ignoram valores sem unidades, 
porém a função de 0 e 0% é a mesma.)

flex: 0 1 auto;
// Esse é o padrão, 
se você não definir nenhum valor de flex ou para as outras propriedades separadas, 
o normal será flex-grow: 0, flex-shrink: 1 e flex-basis: auto.

flex: 2;
// Define exatamente da mesma forma que o flex: 1; 
porém neste caso o flex-grow será de 2, o flex-shrink continuará 1 e o flex-basis 0.

flex: 3 2 300px;
// flex-grow: 3, flex-shrink: 2 e flex-basis: 300px;
```

## Order

- Modifica a ordem dos flex itens
- Sempre do menor para o maior

```css
order: número;
// Número para modificar a ordem padrão. Pode ser negativo.

order: 0;
// 0 é o valor padrão e 
isso significa que a ordem dos itens será a ordem apresentada no HTML. 
Se você quiser colocar um item do meio da lista no início da mesma, 
sem modificar os demais, o ideal é utilizar um valor negativo para este item, 
já que todos os outros são 0.
```

## Align Self

- Serve para definirmos o alinhamento específico de um único flex item dentro do nosso container

```css
align-self: auto;
// Valor inicial padrão. 
Vai respeitar o que for definido pelo align-items no flex-container.

align-self: flex-start;
// Alinha o item ao início.

align-self: flex-end;
// Alinha o item ao final.

align-self: center;
// Alinha o item ao centro.

align-self: baseline;
// Alinha o item a linha de base.

align-self: stretch;
// Estica o item.
```