import { prepareBuildDirectory } from "./library/prepareBuildDirectory.ts";
import { mdToHtmlDirectoryProcessor } from "./library/mdToHtmlDirectoryProcessor.ts";
import * as pagefind from "npm:pagefind";

await prepareBuildDirectory("./public");

await mdToHtmlDirectoryProcessor("./source", "./public");

// Create a Pagefind search index to work with
const { index } = await pagefind.createIndex();

// Index all HTML files in a directory
await index!.addDirectory({
  path: "public",
});

// Or, write the index to disk
await index!.writeFiles({
  outputPath: "public/pagefind",
});

// clean up once complete
await pagefind.close();

await mdToHtmlDirectoryProcessor("./library/contents", "./public");
