import fsPromises from 'node:fs/promises';
import path from 'path';

import { resolveDir, throwErrorWithText } from "../helpers.js";
import { ERROR_OPERATION_FAILED_TEXT } from '../constants.js';

const remove = async () => {
    const dirPath = resolveDir('files', import.meta.url);
    const filePath = path.join(dirPath, 'fileToRemove.txt');

    fsPromises.unlink(filePath)
        .catch((err) => throwErrorWithText(err, ERROR_OPERATION_FAILED_TEXT));
};

await remove();