import { prepareBuildDirectory } from "./library/prepareBuildDirectory.ts";
import { mdToHtmlDirectoryProcessor } from "./library/mdToHtmlDirectoryProcessor.ts";

await prepareBuildDirectory("./public");

await mdToHtmlDirectoryProcessor("./source", "./public");

await mdToHtmlDirectoryProcessor("./library/contents", "./public");
