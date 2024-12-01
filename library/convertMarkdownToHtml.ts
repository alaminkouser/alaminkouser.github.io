import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

export function convertMarkdownToHtml(markdown: string): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
${marked.parse(markdown)}
</body>
</html>`;
}
