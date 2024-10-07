import { Worker } from "worker_threads";
import { cpus } from "node:os";
import { join } from 'path';

import { resolveDir } from "../helpers.js";

const performCalculations = async () => {
    const dirPath = resolveDir('', import.meta.url);
    const workerFile = join(dirPath, 'worker.js');

    let numToSend = 10;

    const cpuNum= cpus().length;
    const results = [];
    
    for (let i = 0; i < cpuNum; i++, numToSend++) {
      results.push(
        new Promise((resolve, reject) => {
          const worker = new Worker(workerFile);
          worker.postMessage(numToSend);
          worker.on('message', (result) => resolve({ status: 'resolved', data: result }));
          worker.on('error', () => reject({ status: 'error', data: null }));

        })
      )
    }

    const writeable = (await Promise.allSettled(results)).map(x => x.value);
    console.log(writeable);
    process.exit();
};

await performCalculations();