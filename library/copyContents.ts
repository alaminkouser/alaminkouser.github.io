/**
 * Copies all files and directories from the source directory to the destination directory.
 * @param {string} sourceDir - The source directory path.
 * @param {string} destDir - The destination directory path.
 * @throws Will throw an error if either directory doesn't exist or if the copy operation fails.
 */
export async function copyContents(
  sourceDir: string,
  destDir: string,
): Promise<void> {
  try {
    // Ensure both directories exist
    const sourceInfo = await Deno.stat(sourceDir);
    const destInfo = await Deno.stat(destDir);

    if (!sourceInfo.isDirectory || !destInfo.isDirectory) {
      throw new Error("Both source and destination paths must be directories.");
    }

    // Read the contents of the source directory
    for await (const entry of Deno.readDir(sourceDir)) {
      const sourcePath = `${sourceDir}/${entry.name}`;
      const destPath = `${destDir}/${entry.name}`;

      if (entry.isDirectory) {
        // Create the corresponding directory in the destination
        await Deno.mkdir(destPath, { recursive: true });
        // Recursively copy the contents of the directory
        await copyContents(sourcePath, destPath);
      } else if (entry.isFile) {
        // Copy the file to the destination
        await Deno.copyFile(sourcePath, destPath);
      }
    }

    console.log(`All contents copied from '${sourceDir}' to '${destDir}'.`);
  } catch (error) {
    console.error(`Error copying contents: ${error.message}`);
    throw error;
  }
}

// Example usage
// await copyContents("./source", "./destination");
