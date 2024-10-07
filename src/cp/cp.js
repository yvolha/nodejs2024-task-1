import { fork } from 'child_process';
import { join} from 'path';

import { resolveDir } from '../helpers.js';

const dirPath = resolveDir('files', import.meta.url);
const filePath = join(dirPath, 'script.js');

const spawnChildProcess = async (args) => {
    fork(filePath, args, { stdio: ['inherit', 'inherit', 'inherit', 'ipc']});
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['greenArg1', 'yellowArg2', 'redArg3']);