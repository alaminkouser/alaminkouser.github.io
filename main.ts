import { prepareBuildDirectory } from "./library/prepareBuildDirectory.ts";
import { mdToHtmlDirectoryProcessor } from "./library/mdToHtmlDirectoryProcessor.ts";
import { runPageFind } from "./library/runPageFind.ts";

await prepareBuildDirectory("./public");

await mdToHtmlDirectoryProcessor("./source", "./public");

await runPageFind("./public");

await mdToHtmlDirectoryProcessor("./library/contents", "./public");
