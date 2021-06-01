+++
title = "Web Design"
<<<<<<< HEAD:content/Front-end/webdesign.md
date = 2021-04-14 # or weight 
description = ""
insert_anchor_links = "right"
=======
sort_by = "date"
template = "docs.html"
page_template = "docs-page.html"
>>>>>>> b851e66feb289623b92b185f0277f94f0476c777:docs/Front-end/webdesign.md
+++

Como criar um site responsivo do zero. Do design ao código.

# Teoria do Design

## Fundamentos do Design

### O que é Design

- "Design é acrescentar valor e significado, *simplificar*, esclarecer, modificar, dignificar, dramatizar, persuadir e talvez até mesmo entreter." - Paul Rand

### Forma e Espaço

- Forma Geométrica (criado pelo homem)
    1. Angulosas
    2. Artificiais
- Forma Orgânica (naturais)
    1. Curvilíneas
    2. Gestuais
- "O espaço é definido e adquire significado no instante em que uma forma aparece dentro dele." - Timothy Samara

### Cores

- **Círculo Cromático**

![https://www.jornalcruzeiro.com.br/wp-content/uploads/2019/11/Captura-de-Tela-2019-11-18-a%CC%80s-16.59.55.png](https://www.jornalcruzeiro.com.br/wp-content/uploads/2019/11/Captura-de-Tela-2019-11-18-a%CC%80s-16.59.55.png)

- Análogas
    1. Cores próximas uma das outras, geralmente 4, elas se relacionam bem.
- Complementares
    1. Cores opostas uma das outras, possuem total contraste.
- Quentes e Frias
    1. Frias: Calmas
    2. Quentes: Chamativas
- **Relatividade da cor**
    1. "Se alguém disse 'vermelho' e houver cinquenta pessoas escutando, pode-se esperar que cada uma pensará em um vermelho" - Josef Albers
- **Significado das cores**
    1. Depende da cultura.
    2. Guia Emocional das cores.
- **RGB e CMYK**
    1. RGB: parte do preto, depende da luminosidade, o branco é a cor máxima.
    2. CMYK: sistema usado na impressão.
- **Esquema de cor**
    1. "Nunca tivemos vergonha de roubar grandes ideias." - Steve Jobs
    2. Podemos pegar um esquema pronto na internet.
    3. *Joalheria de cores*

        [Dribbble](http://dribbble.com)

        [Adobe Color](http://color.adobe.com)

        [Design Seeds](http://design-seeds.com)

- **Contraste**
    1. Entre matiz, saturação e valor
    2. Corpo de texto precisa de um boa relação de contraste com o seu fundo
    3. O contraste vai definir o que deve ser visto primeiro

### Tipografia

- "É a arte e processo de criação de um texto. O objetivo principal é dar ordem estrutural e forma a comunicação."
- "Se a tipografia faz algum sentido, ele é visual e histórico." - Robert Bringhurst
- **Sem Serifas**
    1. São neutras, funcionam bem em corpo de texto, usadas frequentemente na web para compor o texto.
    2. *Ex: Helvetica, Arial e Avenir*
- **Serifadas**
    1. São clássicas, funcionam bem em corpo de texto, usadas frequentemente em livros para compor o texto.
    2. *Ex: Garamonf, Georgia e Baskerville*
- **Serifas Grossas**
    1. Encorpadas, funcionam bem em títulos.
    2. *Ex: Rockwell, Bitter e Kreon*
- **Script**
    1. Suaves, parecem ter sido feitas a mão e com um pincel. Funcionam bem em títulos.
    2. *Ex: Salamander, Lucida Calligraphy e Brush Script*
- **Góticas / Blackletter**
    1. Estilizadas, utilizadas como referência ao período medieval. Boas para compor títulos.
    2. *Ex: New Rocker, Lucida Backletter e Cabazon*
- **Display**
    1. Estilizadas, não existe padrão definido, são criadas de acordo com o projeto. Cada uma possui personalidade própria. Boas para compor títulos.
    2. *Ex: Phosphate, Curlz MT e Hobo*
- **Variáveis Tipográficas**
    - Tamanho do Tipo
        1. *Ex: 14px, 16px ou 18px*
    - Altura da Linha
        1. *Ex 1,5 x Tamanho do Texto*
        2. 1,5 x 14px = 21px
    - Largura do Texto
        1. Máximo de 10/14 palavras por linha

    *Obs: Indicações feitas para o compor do texto utilizando tipografias como Helvetica e Arial.*

- **Escalas Tipográficas**
    - Utilize no máximo 6 tamanhos
        1. *Utilizar mais de 6 tamanhos diferentes de texto pode criar um ruído visual*
    - Escolha uma escala harmônica
        1. *11px, 14px, 18px, 24px, 38px e 48px*
    - Contraste é rei
        1. *Nunca utilize tamanhos próximos, como 14px e 15px.
- **Pareando Tipos**
    - Contraste é rei
        1. *Nunca use tipografias parecidas para criar uma composição*
    - Use no máximo 2
        1. *Quebre a regra apenas quando você dominar ela*
    - Escolha tipos complementares
        1. *Tipografias serifadas para o título e sem serifas para o corpo de texto podem ser uma boa combinação*
- **Alinhamento**
    - À Esquerda
        1. *Esse é o padrão web, você vai usar 80% das vezes.*
    - Centralizado
        1. *Bom para títulos, subtítulos ou pequenos blocos de texto. O layout deve acompanhar este alinhamento.*
    - Justificado
        1. *Pouco utilizado na web, pois ainda não existem meios fácil que permitam a hifenização do texto. Quase sempre gera caminhos de rato na web.*
- **Elementos Hierárquicos**
    - Negrito
        1. *Utilizado para destacar palavras importantes*
    - Itálico
        1. *Utilizado para estilizar citações, títulos de livros/filmes e outros elementos*
    - Sublinhado
        1. *Geralmente utilizado para destacar palavras que possuem link para outra página*
- **Elementos**
    - Caixa Alta
        1. *Utilizado principalmente em títulos/subtítulos. Nunca utilize para o corpo de texto.*
- **Tracking e Kerning**
    - *Traking* é a distância entre todas as letras.
    - *Kerning* é a distância entre duas letras.

### Grid

- "Consiste em um conjunto de relações baseadas em alinhamento que servem como guias para distribuir os elementos ao longo de um formato." - Timothy Samara
- **Grid na Web**
    - Tamanho da coluna
        1. *É importante existir uma lógica e ser consistente.*
    - Espaçamento entre colunas
        1. *Deve ser padronizado.*
    - Encaixe os elementos no grid
        1. *Quebre apenas quando necessário.*
- **Grid Responsivo**
    - Tamanho da coluna adaptável
        1. *Pode diminuir ou aumentar de acordo com o tamanho do suporte(tela).*
    - Colunas móveis
        1. *Colunas que ficam lado a lado em uma tela maior, podem passar a ficar embaixo da outra em uma tela menor.*

### Design para quem não é designer

- **Os quatro princípios básicos**
    - Contraste
    - Repetição
    - Alinhamento
    - Proximidade

## UX Design e UI Design

### O que é UX Design

- Interação entre o usuário e uma marca é uma experiência de uso
- O trabalho do designer é garantir que as necessidades do usuário sejam atendidas e, se possível, com prazer durante esse processo
- Consistência, facilidade de uso, sentidos, experiências, encantamento

### UX Design na Web

- Usabilidade
    1. *Garantir que o site seja de fácil uso.*
- Prazer
    1. *Superar expectativas, surpreender o usuário.*

### Usabilidade

- Útil
- Fácil de aprender
- Memorável
- Efetivo
- Eficiente
- Desejável
- Prazeroso

### O que é UI Design

- Processo de criação de interfaces
- Objetivo de criar interfaces eficientes e efetivas
- **Elementos comuns em uma interface:**
    1. botões de ação
    2. blocos de texto, títulos
    3. formulários, caixas de texto
    4. imagens, pictogramas
    5. separadores
    6. animações

### Estilos de UI

- Skeumorfismo
    1. faz referência a objetos reais no meio digital
- Flat Design
    1. utiliza cores chapadas, elimina sombras e texturas
- Material Design
    1. mantém o flat mas se aproveita da possibilidade de um ambiente 3d digital

# Design do Projeto

## Planejamento

### Primeiros passos

- **Dicas para o freelancer**
    1. defina o seu serviço
    2. defina o seu preço
    3. defina seu ponto de venda
    4. defina como você vai se promover
- **Etapas para a construção de um site**
    1. Briefing
        1. objetivos do site
        2. necessidades dos usuários
    2. Arquitetura da Informação
        1. define as principais áreas do site e o seu conteúdo
    3. Wireframe
        1. design da interação
    4. Design
        1. define as cores, tipografia, imagens e estilo
    5. Código
        1. codifica o layout e implementa o CMS

    ### Arquitetura da Informação

    - É o processo de organizar e categorizar a informação de modo que o usuário encontre da forma mais fácil possível
    - **Dicas de AI**
        1. Aproveite as convenções
        2. Crie níveis de detalhamento
        3. Crie mais de um caminho
        4. Concatene informações
        5. Conheça o usuário
    - **Card Sorting**
        1. Crie as possíveis categorias
        2. Crie tiras de papéis com as informações
        3. Peça para as pessoas distribuirem
        4. Calcule os resultado

    ## Wireframe

    - É um desenho básico da interface que tem como objetivo retratar a arquitetura da informação e a usabilidade
    - **Vantagens**
        1. Maior flexibilidade para mudanças
        2. É de rápida elaboração
        3. Facilita a criação do design final
        4. Permite teste com o usuário no início do projeto
    - **Cores Wireframe**
        1. d9e0e6
        2. a9aeb3
        3. 484b4d
    - **Tipografia Wireframe**
        1. 14/20 corpo de exto
        2. 18/25 corpo de texto
        3. 24/30 subtitulo/titulo
        4. 36/40 titulo
        5. 48/60 titulo

    ## Design

    ### Estilo, Cores e Tipografia

    Após o Wireframe:

    - Definir o estilo com base na identidade visual do cliente
    - Definir cores, caso o cliente já possua cores definidas, adapte a paleta para a web
    - Definir tipografia

    # Básico da Codificação

    ## Introdução ao Código

    ### O que é codificar

    "É um conjunto de signos usados na transmissão e receptação de mensagens." Dicionário inFormal

    **Linguagens Web**

    - Programação (PHP, Ruby, C++, Python, Java)
    - Marcação (HTML)
    - Estilo (CSS)
    - Script (Javascript, Lua)

    **Interpretadores**

    Servidores: é onde seu site fica hospedado, geralmente para linguagens de programação.

    Browser/Navegador: interpreta o HTML, CSS e Javascript.

    ### Ferramentas

    Editor de textos: conhecido como IDE (Integrated Development Environment)

    Principais: Sublime Text, Brackets, Notepad++, Coda, Dreamweaver

    ### HTML Básico

    O que é?

    É um conjunto de regras(tags), criadas para amrcação de textos. Este conjunto facilita a compreensão semântica do texto por máquinas.

    - HTML = hypertext markup language.
    - Criado por tim berners-lee.
    - W3C - desenvolve as especificações.
    - HTML5 é a versão atual.

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

    ### Estrutura web

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

    ### Principais tags

    - <p> </p> *paragrafo*
    - <h1> </h1> *titulo principal*
    - <h2> </h2> *titulo secundário*
    - <h3> </h3> *terciário*
    - <strong> </strong> *dá importância para uma palavra no texto*
    - <b> </b> *negrito*
    - <em> </em> *enfase na palavra*
    - <i> </i> *itálico*
    - <a href="link.com" target="_blank">veja o link</a>  *links externos*
    - <a href="pagina.html">veja o link</a> *links internos*
    - <img src="pasta/arquivo.png" alt="texto para ajudar leitores de tela"> *imagem*

    H1 deve ser o único da pagina

    H1 ao H6

    Atributos sempre vão para as tags de abertura 

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

    ## CSS Básico

    ### Introdução

    É uma linguagem de estilo que serve para definir a formatação de documentos html.

    A**natomia do CSS:**

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

    ### Seletores

    Seletor é o que vai selecionar o elemento que você quer mudar com o CSS.

    C**lass e  Id**

    - São atributos que você coloca dentro da tag.
    - Servem especificamente para CSS e JS.
    - Id só pode ser utilizado 1 vez no HTML.
    - Class é repetido para replicar estilos a diversas tags.

    ### Propriedades de texto

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

    ### Box Model

    Os sites são criados em blocos:

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6693345c-505a-438b-82ab-08d8abe06e96/boxmodel-(3).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6693345c-505a-438b-82ab-08d8abe06e96/boxmodel-(3).png)

    Algumas propriedades do Box Model:

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f2a4dd8b-0f27-4200-9a95-262cd670ad04/download.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f2a4dd8b-0f27-4200-9a95-262cd670ad04/download.png)

    ## Responsivo

    ### Introdução

    Se adapta a diferentes tamanhos e telas e melhora a experiência do  usuário.

    **Características do Responsivo**: imagens fluídas, grid fluído (width em % ou em) e media queries.

    **Adaptável:** a mudança é que o grid é adaptável, ou seja, tem um width fixo que muda de acordo com break-points do media querie.

    ## Javascript e Animações

    ### Introdução

    É uma linguagem de programação interpretada.

    **Sintaxe Básica:**

    ```jsx
    const nome = "André";

    function somar(a, b) {
    	return a + b;
    }

    somar(2, 4);
    // resultado 6
    ```

    ### SEO e Head

    **SEO = SEARCH ENGINE OPTIMIZATION**

    - Otimizar o site para mecanismos de busca
    - Boa otimização aumenta o número de visitantes
    - O mecanismo pode mudar o seu algoritmo
    - Ter um nicho traz mais facilidade na otimização

    **DICAS DE SEO**

    - Código HTML limpo e semântico
    - Site rápido e adaptável
    - Palavras Chaves (nas tags title, description, h1 e durante o conteúdo do site)
    - Tentar utilizar um conceito/palavra chave por página
    - Gerar conteúdo através de um blog
    - Possuir um conteúdo relevante e exclusivo no seu site
    - Estimular o compartilhamento do seu site em outros sites, blog e redes sociais

    ### Domínio, Hospedagem e Analytics

    **DOMÍNIO**

    - É o endereço do seu site
    - Deve ser único e memorável
    - Utilize o nome do seu negócio
    - Quanto menor melhor
    - Compre os alternativos também

    **DNS (DOMAIN NAME SYSTEM)**

    - O DNS do dominío deve ser configurado com o nome indicado pela hospedagem

    **HOSPEDAGEM**

    - É o aluguel de um servidor conectado a internet
    - Servidor é o computador onde teu site fica 24/7
    - Existem Servidores espalhados por todo o mundo

    **COMO SUBIR O SITE**

    - É necessário um aplicativo de FTP
    - O endereço ftp do seu site (ftp.site.com)
    - Usuário e Senha