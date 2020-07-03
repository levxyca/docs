# HTML Básico

O que é?

É um conjunto de regras(tags), criadas para marcação de textos. Este conjunto facilita a compreensão semântica do texto por máquinas.

**Anatomia**

```html
--------- tag(abertura)
		---------atributo
<p class="conteudo">
	Até um relógio parado está
	certo duas vezes ao dia.
---------- conteúdo
</p>
--- tag (fechamento)
```

- ignora quebra de linhas

- apenas um espaço em branco é contado

- pode usar tag dentro de tag

```html
<html>
	<p>
		Hello World!
	</p>
</html>
```

## Estrutura web

**Estrutura básica**

```html
<!DOCTYPE html>

<html>

	<head>
		<title>Site Novo</title>
	</head>

	<body>
		<p>Conteúdo do Site</p>
	</body>

</html>
```

## Principais tags
```html
Paragráfo
- <p></p>

Títulos
- <h1></h1>

- <h2></h2>

- <h3></h3>

Importância para uma palavra no texto
- <strong></strong>

Negrito
- <b></b>

Ênfase na palavra
- <em></em>

Itálico
- <i></i>

Links Externos
- <a href="link.com" target="_blank">veja o link</a>

Links Internos
- <a href="pagina.html">veja o link</a>

Imagem
- <img src="pasta/arquivo.png" alt="texto para ajudar leitores de tela">
```

- Hierarquia: H1 ao H6

- Atributos sempre vão para as tags de abertura 

**Doctype, Metalag, lang**

```html
<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="utf-8">
		<title>Principais Tags</title>
	</head>
	<body>
	</body>
</html>
```

### Listas e Tabelas

- Unordered List

```html
<ul>
	<li></li>
</ul>
```

- Ordered List

```html
<ol>
	<li></li>
</ol>
```

- Tabela

```html
<table>
	<tr> //linha
		<th>É isso ai</th> //coluna
	</tr>
</table>

/*primeiro th geralmente é pro titulo da coluna*/
```

### Elementos estruturais

- **Div**: abre e fecha e não possui qualquer significado semantico, ela serve p estruturarmos o conteúdo através do CSS, possuicaracteristicas de um elemento de bloco.

- **Section e Article**: elementos semanticos que servem para estruturar o documento.

- **Header e Footer**: elementos semanticos para estruturar o elemento.

- **Nav**: para indicar que o site é navegavel.

### Formulário

São utilizados para envio de dados ao servidor, podendo ser formulario de contato, busca, chat e etc.

*<form></form>* 

Exemplo de formulario smples para envio de email:

```html
<form action="enviar.php" method="post" name="form">
	<label for="nome">Nome</label>
	<input id="nome" name="nome" type="text" required>
	
	<label for="email">E-mail</label>
	<input id="email" name="email" type="text" required>

	<label for="mensagem">Mensagem</label>
	<textarea id="mensagem" name="mensagem" required></texarea>

	<button id="enviar" name="enviar" type="submit">Solicitar Orçamento</button>
</form>
```

- **Label** é como se fosse a etiqueta

- **Input** é a caixa

- **Required** é porque é obrigatório digitar algo naquele campo

**Form Atributos**

- *action* : definine a ação do formulario

- *method* : exspecifica se é get ou post

- *name* : nome unico do elemento

**Input Atributos**

- *type* - define o tipo de input, pode ser checkbox, password, text, button e outros

- *required* - especifica se é obrigatorio ou n o campo

- *name* - nome único do elemento

- *id* - id unico referente ao label