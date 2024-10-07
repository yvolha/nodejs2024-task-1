import { createHash } from 'node:crypto';
import { readFile } from 'fs/promises';
import path from 'path';

import { resolveDir } from '../helpers.js';

const calculateHash = async () => {
    const dirPath = resolveDir('files', import.meta.url);
    const filePath = path.join(dirPath, 'fileToCalculateHashFor.txt');

    const contents = await readFile(filePath);
    const hash = createHash('sha256').update(contents).digest('hex');

    process.stdout.write(`\n${hash}\n\n`);
};

await calculateHash();