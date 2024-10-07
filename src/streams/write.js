import { createInterface } from "node:readline"
import { createWriteStream } from 'node:fs';
import path from 'path';

import { resolveDir } from "../helpers.js";

const write = async () => {
    const dirPath = resolveDir('files', import.meta.url);
    const filePath = path.join(dirPath, 'fileToWrite.txt');
    const writeStream = createWriteStream(filePath);

    process.stdout.write("Please type something and press 'Enter' to save it in './files/fileToWrite.txt' \n");
   
    for await (const line of createInterface({ input: process.stdin })) {
        writeStream.write(line + '\n');
    }
};

await write();