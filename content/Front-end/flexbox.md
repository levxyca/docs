+++
title = "Flexbox"
date = 2021-04-14 # or weight 
description = ""
insert_anchor_links = "right"
+++

# Fundamentos do Flexbox

## Display Flex

O Flexbox está dividido em dois grupos: Flex Container e Flex Item.

```css
display: flex;
```

# Flex Container

## Flex Direction

- Define a direção dos flex itens.

```css
flex-direction: row;

flex-direction: row-reverse;

flex-direction: column;

flex-direction: column-reverse;
```

## Flex Wrap

- Define se os itens devem quebrar ou não a linha
- Por padrão eles não quebram (nowrap)

```css
flex-wrap: nowrap;

flex-wrap: wrap;

flex-wrap: wrap-reverse;
```

## Flex Flow

- Atalho para as propriedades flex-direction e flex-wrap

```css
flex-flow: row nowrap;

flex-flow: row wrap;

flex-flow: column nowrap;
```

## Justify Content

- Alinha os itens flex no container de acordo com a direção.

```css
justify-content: flex-start;

justify-content: flex-end;

justify-content: center;

justify-content: space-between;

justify-content: space-around;
```

## Align Items

- Alinha os flex itens de acordo com o eixo do container
- O alinhamento é diferente para quando os itens estão em colunas ou linhas

```css
align-items: stretch;

align-items: flex-start;

align-items: flex-end;

align-items: center;

align-items: baseline;
```

## Align Content

- Alinha as linhas do container em relação ao eixo vertical

```css
align-content: stretch;

align-content: flex-start;

align-content: flex-end;

align-content: center;

align-content: space-between;

align-content: space-around;
```

# Flex Item

## Flex Grow

- Habilidade de um flex item crescer
- Por padrão o valor é zero

```css
flex-grow: número;

flex-grow: 0;
```

## Flex Basis

- tamanho inicial do flex item antes da distribuição do espaço restante

```css
flex-basis: auto;

flex-basis: unidade;

flex-basis: 0;
```

## Flex Shrink

- Define a capacidade de redução de tamanho do item.

```css
flex-shrink: 1;

flex-shrink: 0;

flex-shrink: número;
```

## Flex

- Atalho para as propriedades flex-grow, flex-shrink e flex-basis
- Para melhor consistência entre os browsers, é recomendado utilizar a propriedade flex ao invés de cada propriedade separada

```css
flex: 1;

flex: 0 1 auto;

flex: 2;

flex: 3 2 300px;
```

## Order

- Modifica a ordem dos flex itens
- Sempre do menor para o maior

```css
order: número;

order: 0;
```

## Align Self

- Serve para definirmos o alinhamento específico de um único flex item dentro do nosso container

```css
align-self: auto;

align-self: flex-start;

align-self: flex-end;

align-self: center;

align-self: baseline;

align-self: stretch;
```