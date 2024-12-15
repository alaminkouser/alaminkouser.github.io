import * as pagefind from "npm:pagefind";

export async function runPageFind(directory: string): Promise<void> {
  // Create a Pagefind search index to work with
  const { index } = await pagefind.createIndex();

  // Index all HTML files in a directory
  await index!.addDirectory({
    path: directory,
  });

  // Or, write the index to disk
  await index!.writeFiles({
    outputPath: `${directory}/pagefind`,
  });

  // clean up once complete
  await pagefind.close();
}
