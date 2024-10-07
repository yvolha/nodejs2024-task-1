import { Transform } from 'stream';

const transform = async () => {
    process.stdout.write('Please start typing and I\'ll reverse the words for you on Enter.\n\n');

    const reverseCharsTransform = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, String(chunk).trim().split('').reverse().join('')+'\n');
        }
    })

    process.stdin.pipe(reverseCharsTransform).pipe(process.stdout);
};

await transform();