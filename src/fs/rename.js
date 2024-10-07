import fs from 'node:fs';
import path from 'path';

import { resolveDir, throwErrorWithText } from '../helpers.js';
import { ERROR_OPERATION_FAILED_TEXT } from '../constants.js';

const rename = async () => {
    const wrongFilename = 'wrongFilename.txt';
    const correctFilename = 'properFilename.md';

    const dirPath = resolveDir('files', import.meta.url);
    const fileWrongPath = path.join(dirPath, wrongFilename);
    const fileCorrectPath = path.join(dirPath, correctFilename);

    fs.access(
        fileCorrectPath, 
        (err) => {
            if (!err) {
                throwErrorWithText(err, ERROR_OPERATION_FAILED_TEXT)
            }

            fs.rename(
                fileWrongPath, 
                fileCorrectPath,
                (err) => throwErrorWithText(err, ERROR_OPERATION_FAILED_TEXT),
            )
        }
    )
};

await rename();