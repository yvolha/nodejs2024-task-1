import fsPromises from 'node:fs/promises';
import path from 'path';
import { ERROR_OPERATION_FAILED_TEXT } from '../constants.js';
import { resolveDir, throwErrorWithText } from '../helpers.js';

const read = async () => {
    const dirPath = resolveDir('files', import.meta.url);
    const filePath = path.join(dirPath, 'fileToRead.txt');

    await fsPromises.access(filePath)
        .catch((err) => throwErrorWithText(err, ERROR_OPERATION_FAILED_TEXT));

    fsPromises.readFile(filePath, { encoding: 'utf8' })
        .then((res) => {
            console.log(res);
        })
};

await read();