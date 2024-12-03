import { listFilesRecursively } from "./library/listFilesRecursively.ts";
import { prepareBuildDirectory } from "./library/prepareBuildDirectory.ts";
import { convertMarkdownToHtml } from "./library/convertMarkdownToHtml.ts";

const SOURCE_FILE_LIST = await listFilesRecursively("./source")
  .then((list) => {
    return list;
  })
  .catch((_) => {
    return [];
  });

await prepareBuildDirectory("./public");

for (let i = 0; i < SOURCE_FILE_LIST.length; i++) {
  const file = SOURCE_FILE_LIST[i];
  await Deno.mkdir(
    file.replace("./source/", "./public/").substring(0, file.replace("./source/", "./public/").lastIndexOf("/")),
    { recursive: true },
  );
  if (file.endsWith(".md")) {
    const MD_RAW = await Deno.readTextFile(file);
    await Deno.writeTextFile(
      file.replace("./source/", "./public/").replace(/\.md$/, ".html"),
      convertMarkdownToHtml(MD_RAW),
    );
  } else {
    await Deno.copyFile(file, file.replace("./source/", "./public/"));
  }
}
