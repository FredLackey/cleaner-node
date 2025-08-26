export = executePromise;
/**
 * Executes a shell command asynchronously using child_process.exec and returns a promise.
 * The promise resolves with the standard output or rejects with an error or standard error.
 * @param {string} command The shell command to execute.
 * @returns {Promise<{stdout: string}|{error: Error}|{stderr: string}>} A promise that resolves with the stdout or rejects with an error or stderr.
 */
declare function executePromise(command: string): Promise<{
    stdout: string;
} | {
    error: Error;
} | {
    stderr: string;
}>;
