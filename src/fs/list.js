import fsPromises from 'node:fs/promises';
import path from 'path';

import { resolveDir, throwErrorWithText } from "../helpers.js";
import { ERROR_OPERATION_FAILED_TEXT } from '../constants.js';

const list = async () => {
    const dirPath = resolveDir('files', import.meta.url);

    await fsPromises.access(dirPath)
        .catch((err) => throwErrorWithText(err, ERROR_OPERATION_FAILED_TEXT));

    fsPromises.readdir(dirPath)
        .then((res) => {
            res.forEach((file) => console.log(file));
        })
};

await list();