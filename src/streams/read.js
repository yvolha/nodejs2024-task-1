import path from 'path';
import { createReadStream } from 'node:fs';

import { resolveDir } from '../helpers.js';

const read = async () => {
    const dirPath = resolveDir('files', import.meta.url);
    const filePath = path.join(dirPath, 'fileToRead.txt');
    const readStream = createReadStream(filePath);

    let data = '';
    readStream.on('data', (chunk) => {
        data += chunk;
    });
    readStream.on('end', () => {
        process.stdout.write(data + '\n\n');
    })
};

await read();