+++
title = "CSS"
date = 2021-04-14 # or weight 
description = ""
insert_anchor_links = "right"
+++

# CSS Básico

## Introdução

É uma linguagem de estilo que serve para definir a formatação de documentos html.

**Anatomia do CSS:**

```css
p.conteudo {
	color: #222;
	font-size: 1em;
}
```

Para fazer referência ao CSS dentro do HTML:

```html
<head>
	<link rel="stylesheet" href="style.css">
</head>
```

## Seletores

Seletor é o que vai selecionar o elemento que você quer mudar com o CSS.

**Class e  Id**

- São atributos que você coloca dentro da tag.
- Servem especificamente para CSS e JS.
- Id só pode ser utilizado 1 vez no HTML.
- Class é repetido para replicar estilos a diversas tags.

## Propriedades de texto

- *color* - cor do texto - hexadecimal
- *font-style* - estilo do texto, italico normal ou oblique
- *font-weight* - peso da fonte, bold
- *font-size* - tamanho da fonte px
- *line-height* - tamanho da linha px
- *font-family* - tipografia
- *font* - concatena todas as inforamções da fonte
- *text-align* - alinhar o texto
- *text-transform* - tudo em maiusculo ou minusculo ou capitalize
- *text-indent* - pra identar a primeiralinha do paragarado
- *text-decoration* - usa geralmente em link, no a
- *text-shadow*- sombra no texto
- *white-space*- não quebrar linha, forçar que o texto continue
- *word-space* - distancia entre as palavras
- *letter-space* - distancia das letras