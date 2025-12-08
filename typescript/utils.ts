import * as readline from 'readline';

/**
 * Node.js specific utility to read input from stdin
 * Useful for competitive programming style problems
 */
export const readLineAsync = (question: string): Promise<string> => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
};

/**
 * Utility to measure execution time of a function
 */
export const measureTime = async <T>(fn: () => Promise<T> | T, label: string): Promise<T> => {
    console.time(label);
    const result = await fn();
    console.timeEnd(label);
    return result;
};
