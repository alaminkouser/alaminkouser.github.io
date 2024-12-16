import { marked } from "npm:marked";
import { gfmHeadingId } from "npm:marked-gfm-heading-id";

marked.use(gfmHeadingId());

export function convertMarkdownToHtml(markdown: string): string {
  const LEXER = marked.lexer(markdown);
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${LEXER[1].raw.trim()}">
    <title>${LEXER[0].raw.replace("# ", "").trim()}</title>
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="stylesheet" href="/index.css">
</head>
<body>
<div>
<span><a href="/">\ueb06</a></span>
<span class="searchButton">\uf422</span>
<dialog class="searchDialog">
<div class="search"></div>
</dialog>
</div>
<div>
${marked.parser(LEXER)}
</div>
<div>
<a href="https://github.com/alaminkouser">\uea84 alaminkouser</a><br>
<a href="https://www.linkedin.com/in/alaminkouser/">\ue820 alaminkouser</a>
</div>
<link href="/pagefind/pagefind-ui.css" rel="stylesheet">
<script src="/pagefind/pagefind-ui.js"></script>
<script src="/index.js" type="module"></script>
</body>
</html>`;
}
