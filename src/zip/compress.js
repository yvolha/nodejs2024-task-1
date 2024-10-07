import path from 'path';
import { createGzip } from 'node:zlib'
import {
    createReadStream,
    createWriteStream,
  } from 'node:fs'; 
import { pipeline } from 'node:stream';

import { resolveDir, throwErrorWithText } from "../helpers.js";
import { ERROR_COMPRESSION } from '../constants.js';

const compress = async () => {
    const dirPath = resolveDir('files', import.meta.url);
    const fileToCompressPath = path.join(dirPath, 'fileToCompress.txt');
    const fileCompressedPath = path.join(dirPath, 'archive.gz');

    const source = createReadStream(fileToCompressPath);
    const destination = createWriteStream(fileCompressedPath);

    const gzip = createGzip();

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            throwErrorWithText(ERROR_COMPRESSION);
        }
    });

};

await compress();