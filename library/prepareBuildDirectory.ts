export async function prepareBuildDirectory(path: string): Promise<void> {
  try {
    // Check if the directory exists
    const stat = await Deno.stat(path).catch(() => null);

    if (stat && stat.isDirectory) {
      // Clean the directory if it exists
      for await (const entry of Deno.readDir(path)) {
        const entryPath = `${path}/${entry.name}`;
        if (entry.isFile || entry.isSymlink) {
          await Deno.remove(entryPath);
        } else if (entry.isDirectory) {
          await Deno.remove(entryPath, { recursive: true });
        }
      }
    } else {
      // Create the directory if it doesn't exist
      await Deno.mkdir(path, { recursive: true });
    }
  } catch (error) {
    console.error("Error preparing build directory:", error);
    throw error;
  }
}
