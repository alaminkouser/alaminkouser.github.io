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
<input type="text" id="search" placeholder="Search your site..." />
<div id="search-results"></div>
${marked.parser(LEXER)}
<script src="/index.js" type="module"></script>
</body>
</html>`;
}
