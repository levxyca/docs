# Grid Container

O Grid Container é a tag que envolve os itens do grid, ao indicar display: grid, essa tag passa a ser um Grid Container.

## Display

Define o elemento como um grid container.

```css
display: grid; // Torna o elemento um grid container.

display: inline-grid; // Torna o elemento um grid container porém com comportamento inline.

display: subgrid; // Para grids dentro de grids
```

## Grid Template Columns

Define o número total de colunas que serão criadas no grid.

```css
grid-template-columns: 100px 100px 100px 100px;

grid-template-columns: 1fr 2fr;

grid-template-columns: minmax(200px, 1fr) 1fr 1fr;

grid-template-columns: repeat(3, 1fr);

grid-template-columns: repeat(auto-fit, minmax(100px, auto));
```

## Grid Template Rows

Define a quantidade de linhas no grid.

```css
grid-template-rows: 50px 100px 50px 150px;

grid-template-rows: 1fr 2fr;
```

## Grid Template Areas

Define áreas específicas no grid. O ponto (.) pode ser utilizado para criar áreas vazias.

```css
.grid {
	display: grid;
}

.logo {
	grid-area: logo;
}

grid-template-areas:
"logo nav nav"
"sidenav content advert"
"sidenav footer footer"; 
```

## Grid Template

Atalho para definir o grid-template-columns, grid-template-rows e grid-template-areas.

```css
grid-template:
"logo nav nav" 50px
"sidenav content advert" 150px
"sidenav footer footer" 100px
/ 100px 1fr 50px; 
```

## Gap

Define o gap (gutter) entre os elementos do grid.

```css
gap: 20px;

column-gap: 20px;

row-gap: 20px;
```

## Grid Auto Columns

Define o tamanho das colunas do grid implícito.

```css
grid-auto-columns: 100px;
```

## Grid Auto Rows

Define o tamanho das linhas do grid implícito

```css
grid-auto-rows: 100px;
```

## Grid Auto Flow

Define o fluxo dos itens no grid. Se eles vão automaticamente gerar novas linhas ou colunas.

```css
grid-auto-flow: row;

grid-auto-flow: column;

grid-auto-flow: dense;
```

## Grid

Atalho geral para definir o grid: grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns e grid-auto-flow

```css
grid: 100px / 1fr 1fr;

grid: 100px / auto-flow 100px 50px;

.grid-3 {
	grid:
		"logo nav nav" 50px 
		"sidenav content advert" 150px 
		"sidenav footer footer" 100px 
	/ 100px 1fr 50px;
}
```

## Justify Content

Alinha os itens na horizontal

```css
justify-content: start;

justify-content: end;

justify-content: stretch;
    
justify-content: space-around;
    
justify-content: space-between;
    
justify-content: space-evenly;
    
justify-content: center;
```

## Align Content

Alinha os itens na vertical

```css
align-content: start;

align-content: end;

align-content: stretch;
    
align-content: space-around;
    
align-content: space-between;
    
align-content: space-evenly;
    
align-content: center;
```

## Justify Items

Justifica os itens na horizontal.

```css
justify-items: start;

justify-items: end;

justify-items: center;
    
justify-items: stretch;
```

## Align Items

Alinha o conteúdo dos itens na vertical.

```css
justify-items: start;

justify-items: end;

justify-items: center;
    
justify-items: stretch;
```

# Grid Item

Os Grid Itens são os filhos diretos do Grid Container.

## Grid Column

Define quais colunas serão ocupadas pelo grid item.

```css
grid-column: 1;
    
grid-column: 1 / 3;
    
grid-column-start: 2;
    
grid-column-end: 4;
    
grid-column: span 2;
```

## Grid Row

Define quais linhas serão ocupadas pelo grid item.

```css
grid-row: 1;
    
grid-row: 1 / 3;
    
grid-row-start: 2;
    
grid-row-end: 4;
    
grid-row: span 2;
```

## Grid Area

Define a área do item do grid. É um atalho para grid-row-start, grid-column-start, grid-row-end, grid-column-end.

```css
grid-area: 1 / 2 / 4 / 3;

grid-area: header;
```

## Justify Self

Justifica o item do grid na horizontal.

```css
justify-self: start;
    
justify-self: end;
    
justify-self: center;
    
justify-self: stretch;
```

## Align Self

Justifica o item do grid na vertical.

```css
justify-self: start;
    
justify-self: end;
    
justify-self: center;
    
justify-self: stretch;
```