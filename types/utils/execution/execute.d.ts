export = execute;
/**
 * Executes a shell command asynchronously and returns an object indicating success or failure.
 * Wraps the executePromise function to provide a consistent success/error structure.
 * @param {string} command The shell command to execute.
 * @returns {Promise<{success: boolean, output?: {stdout: string}, error?: {error: Error}|{stderr: string}}>} An object indicating the outcome of the command execution.
 */
declare function execute(command: string): Promise<{
    success: boolean;
    output?: {
        stdout: string;
    };
    error?: {
        error: Error;
    } | {
        stderr: string;
    };
}>;
