export async function listFilesRecursively(
  directory: string,
): Promise<string[]> {
  const files: string[] = [];
  for await (const entry of Deno.readDir(directory)) {
    const fullPath = `${directory}/${entry.name}`;
    if (entry.isDirectory) {
      // Recursively add files from subdirectory
      const subDirFiles = await listFilesRecursively(fullPath);
      files.push(...subDirFiles);
    } else if (entry.isFile) {
      files.push(fullPath); // Add the file path to the list
    } else {
      console.warn(`WARNING: ${fullPath} is not a file or directory.`);
    }
  }
  return files;
}
