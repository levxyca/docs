+++
title = "Um grande titulo"
sort_by = "date"
template = "docs.html"
page_template = "docs-page.html"
+++

# CSS - Shortcuts

## Descendant Selector
### Selecione um elemento dentro de outro elemento
`p strong` seleciona todos os elementos `strong`que estão dentro de qualquer `p`

## Combine the Class Selector
### Combina os seletores de classe
`ul.important` seleciona todas as `ul` que tem a classe `important`

## Comma Combinator
### Combina seletores com commas
`p, .fun`irá selecionar todos os `<p>`assim como todos os elementos com a classe `fun`

## Universal Selector
### Seletor Universal, você pode selecionar tudo
`p *` seleciona qualquer elemento dentro de todos os elementos `p`

## Adjacent Sibling Selector
### Seleciona um elemento que segue diramente um outro elemento
`p + .intro` seleciona cada elemento que contenha a classe `intro` e que siga diretamente um `p`

## General Sibling Selector
### Seleciona um elemento que segue outro elemento
`A ~ B` seleciona todos os elementos `B`que seguem um `A`

## Child Selector
### Seleciona diratamente os filhos de um elemento
`A > B` seleciona todos os `B` que são diretamente filhos de `A`

## First Child Pseudo-selector
### Seleciona o primeiro filho de um elemento
`:first-child` seleciona todos os primeiros filhos
`p:first-child` seleciona todos os primeiros filhos de elemento `p`

## Only Child Pseudo-selector
### Selecione um elemento que seja o único elemento dentro de outro
`span:ony-child`irá selecionar os elementos `span`que são somente filhos de um outro elemento

## Last Child Pseudo-selector
### Selecione o último elemento de um outro elemento
`:last-child` seleciona todos os last-child
`span:last-child` seleciona todos os last-child do span

## Nth Child Pseudo-selector
### Seleciona um elemento pela sua ordem
`p:nth-child(2)`seleciona o segundo `p`

## First of Type Selector
### Selecione o primeiro elemento de um tipo específico
`span:first-of-type`seleciona o primeiro `span`

## Nth of Type Selector
### Seleciona um elemento específico baseado no seu tipo.
`div:nth-of-type(2)` seleciona o segundo elemento de uma div

## Only Of Type Selector
### Selecione os elementos que são de apenas um tipo
`p span:only-of-type` seleciona um spam dentro do p se tiver somente um span nele
