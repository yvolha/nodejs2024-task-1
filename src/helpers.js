import path from 'path';
import { fileURLToPath } from 'url';

export function resolveDir(dirname, metaUrl){
    const __filename = fileURLToPath(metaUrl);
    const __dirname = path.dirname(__filename);

    console.log('HEHEHE', path.resolve(__dirname, dirname));

    return path.resolve(__dirname, dirname);
}

export function throwErrorWithText(error, errorText){
    if (error) {
        throw new Error(errorText)
    }
}