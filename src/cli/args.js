const parseArgs = () => {
    const argIndex = 2;

    const cliArgs = process.argv.reduce((prev, next, index) => {

        if (index < argIndex) {
            return prev;
        } else {
            if (index % 2 === 0) {
                prev.push(next.substring(2) + ' is ');
                return prev;
            } else {
                prev.push(next);
                return prev;
            }
        }
    }, []);

    console.log(cliArgs.join(', '));
};

parseArgs();