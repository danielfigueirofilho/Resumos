# Documentação do Site de Resumos de Livros

## Visão Geral

Este site foi desenvolvido para servir como um repositório pessoal de resumos de livros sobre finanças e empreendedorismo. O design é simples, mas visualmente atraente, com foco na legibilidade e facilidade de navegação.

## Estrutura do Site

O site contém as seguintes páginas principais:

1. **Página Inicial (index.html)**
   - Banner principal
   - Resumos em destaque
   - Categorias de livros

2. **Página de Listagem de Livros (livros.html)**
   - Filtros por categoria, autor, ano e ordenação
   - Cards de livros com informações básicas
   - Paginação

3. **Página de Resumo Individual (livro-pai-rico.html)**
   - Informações detalhadas do livro
   - Resumo completo
   - Principais aprendizados
   - Citações importantes
   - Avaliação pessoal
   - Links relacionados

4. **Página Sobre (sobre.html)**
   - Propósito do site
   - Perfil do leitor/investidor
   - Metodologia de resumos
   - Informações de contato

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (vanilla)
- Fontes: Inter (Google Fonts)

## Como Adicionar Novos Resumos

Para adicionar um novo resumo de livro ao site, siga estes passos:

1. **Crie um novo arquivo HTML** para o resumo do livro, usando como base o arquivo `livro-pai-rico.html`.
   - Nomeie o arquivo de forma descritiva, por exemplo: `livro-nome-do-livro.html`

2. **Atualize o conteúdo** com as informações do novo livro:
   - Título, autor, ano, editora
   - Categoria e avaliação
   - Resumo geral
   - Principais aprendizados
   - Citações importantes
   - Avaliação pessoal

3. **Adicione o livro à página de listagem** (`livros.html`):
   - Copie um dos blocos de card existentes
   - Atualize as informações (título, autor, categoria, avaliação, descrição)
   - Atualize o link para apontar para o novo arquivo HTML

4. **Opcional: Adicione à página inicial** se for um destaque:
   - Copie um dos blocos de card existentes na seção "Resumos em Destaque"
   - Atualize as informações e o link

## Como Publicar o Site

### Opção 1: Hospedagem Tradicional

1. Faça upload de todos os arquivos e pastas para o servidor web, mantendo a estrutura de diretórios.
2. Certifique-se de que o arquivo `index.html` esteja na raiz do diretório público.

### Opção 2: GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos e pastas para o repositório
3. Ative o GitHub Pages nas configurações do repositório

### Opção 3: Netlify ou Vercel

1. Crie uma conta em Netlify ou Vercel
2. Conecte ao repositório Git ou faça upload direto dos arquivos
3. O site será automaticamente publicado

## Personalização

### Cores

As cores principais do site estão definidas como variáveis CSS no início do arquivo `styles.css`:

```css
:root {
  --primary: #1E3A8A;    /* Azul escuro */
  --primary-light: #60A5FA;   /* Azul claro */
  --secondary: #065F46;  /* Verde escuro */
  --accent: #D97706;     /* Dourado */
  --light: #F3F4F6;      /* Cinza claro */
  /* ... outras cores ... */
}
```

Para alterar o esquema de cores, basta modificar esses valores.

### Fontes

O site utiliza a fonte "Inter" do Google Fonts. Para alterar:

1. Modifique o link do Google Fonts no `<head>` de cada página HTML
2. Atualize a propriedade `font-family` no arquivo CSS

## Estrutura de Arquivos

```
site-estatico/
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── img/
│   └── (adicione imagens aqui)
├── index.html
├── livros.html
├── livro-pai-rico.html
└── sobre.html
```

## Responsividade

O site foi desenvolvido para ser totalmente responsivo, adaptando-se a diferentes tamanhos de tela:

- **Desktop** (>1024px): Layout completo com 3 cards por linha
- **Tablet** (768px-1024px): Layout adaptado com 2 cards por linha
- **Mobile** (<768px): Layout simplificado com 1 card por linha e menu hambúrguer

## Suporte e Manutenção

Para qualquer dúvida ou suporte adicional, entre em contato através do email fornecido na documentação original do projeto.
