import { listFilesRecursively } from "./listFilesRecursively.ts";
import { convertMarkdownToHtml } from "./convertMarkdownToHtml.ts";

export async function mdToHtmlDirectoryProcessor(
  source: string,
  destination: string,
) {
  const SOURCE_FILE_LIST = await listFilesRecursively(source)
    .then((list) => {
      return list;
    })
    .catch((_) => {
      return [];
    });

  for (let i = 0; i < SOURCE_FILE_LIST.length; i++) {
    const file = SOURCE_FILE_LIST[i];
    await Deno.mkdir(
      file.replace(source, destination).substring(
        0,
        file.replace(source, destination).lastIndexOf("/"),
      ),
      { recursive: true },
    );
    if (file.endsWith(".md")) {
      const MD_RAW = await Deno.readTextFile(file);
      await Deno.writeTextFile(
        file.replace(source, destination).replace(/\.md$/, ".html"),
        convertMarkdownToHtml(MD_RAW),
      );
    } else {
      await Deno.copyFile(file, file.replace(source, destination));
    }
  }
}
