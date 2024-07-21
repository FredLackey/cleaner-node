const { exec } = require('child_process');

const executePromise = command => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject({ error })
        return;
      }
      if (stderr) {
        reject({ stderr });
        return;
      }
      resolve({
        stdout: stdout.trim()
      });
    });
  });
}

module.exports = executePromise;
