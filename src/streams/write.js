import { createInterface } from "node:readline"
import { createWriteStream } from 'node:fs';
import path from 'path';

import { resolveDir } from "../helpers.js";

const write = async () => {
    const dirPath = resolveDir('files', import.meta.url);
    const filePath = path.join(dirPath, 'fileToWrite.txt');
    const writeStream = createWriteStream(filePath);
   
    for await (const line of createInterface({ input: process.stdin })) {
        writeStream.write(line + '\n');
    }
};

await write();