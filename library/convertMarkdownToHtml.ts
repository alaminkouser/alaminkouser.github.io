import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

export function convertMarkdownToHtml(markdown: string): string {
  const LEXER = marked.lexer(markdown);
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${LEXER[1].text}">
    <title>${LEXER[0].text}</title>
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="stylesheet" href="/index.css">
</head>
<body>
<div>
<span><a href="/">\ueb06</a></span>
<span id="search">\uf422</span>
</div>
<div>
${marked.parser(LEXER)}
</div>
<div>
<a href="https://github.com/alaminkouser">\uea84 alaminkouser</a><br>
<a href="https://www.linkedin.com/in/alaminkouser/">\ue820 alaminkouser</a>
</div>
<script src="/index.js" type="module"></script>
</body>
</html>`;
}
