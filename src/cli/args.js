const parseArgs = () => {
    const argIndex = 2;

    const cliArgs = process.argv.reduce((prev, next, index) => {

        if (index < argIndex) {
            return prev;
        } else {
            if (index % 2 === 0) {
                return prev.push(next.substring(2) + ' is ');
            } else {
                return prev.push(next);
            }
        }
    }, []);

    console.log(cliArgs.slice(0, cliArgs.length - 2));
};

parseArgs();