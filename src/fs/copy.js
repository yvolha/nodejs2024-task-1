import { ERROR_OPERATION_FAILED_TEXT } from "../constants.js";
import { resolveDir, throwErrorWithText } from "../helpers.js";
import fs from 'node:fs';

const copy = async () => {
    const dirPath = resolveDir('files', import.meta.url);
    const dirCopyPath = dirPath + '_copy';

    fs.cp(
        dirPath,
        dirCopyPath,
        {
            recursive: true,
            errorOnExist: true,
            force: false,
        },
        (err) => throwErrorWithText(err, ERROR_OPERATION_FAILED_TEXT), 
    )
};

await copy();
