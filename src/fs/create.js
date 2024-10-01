import fs from 'node:fs';
import path from 'path';

import { resolveDir, throwErrorWithText } from '../helpers.js';
import { ERROR_OPERATION_FAILED_TEXT } from '../constants.js';

const create = async () => {
    const dirPath = resolveDir('files', import.meta.url);
    const filePath = path.join(dirPath, 'fresh.txt');

    const textInsideFile = 'I am fresh and young';

    fs.writeFile(
        filePath, 
        textInsideFile, 
        { flag: 'wx' }, 
        (err) => throwErrorWithText(err, ERROR_OPERATION_FAILED_TEXT),
    );
};

await create();