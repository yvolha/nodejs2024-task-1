import path from 'path';
import { createGunzip } from 'node:zlib'
import {
    createReadStream,
    createWriteStream,
  } from 'node:fs'; 
import { pipeline } from 'node:stream';

import { resolveDir, throwErrorWithText } from "../helpers.js";
import { ERROR_DECOMPRESSION } from '../constants.js';

const decompress = async () => {
    const dirPath = resolveDir('files', import.meta.url);
    const fileToDecompressPath = path.join(dirPath, 'archive.gz');
    const fileDecompressedPath = path.join(dirPath, 'fileToCompress.txt');

    const source = createReadStream(fileToDecompressPath);
    const destination = createWriteStream(fileDecompressedPath);

    const gunzip = createGunzip();

    pipeline(source, gunzip, destination, (err) => {
        if (err) {
            throwErrorWithText(ERROR_DECOMPRESSION, err);
        }
    });
};

await decompress();