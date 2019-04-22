// https://stackoverflow.com/questions/16697791/nodejs-get-filename-of-caller-function
function getCallerFilename() {
  const originalFunc = Error.prepareStackTrace;
  let callerfile;
  try {
    const err = new Error();
    Error.prepareStackTrace = function (err, stack) { return stack; };
    const currentfile = err.stack.shift().getFileName();
    while (err.stack.length) {
      err.stack.shift();
      callerfile = err.stack.shift().getFileName();
      if (currentfile !== callerfile) break;
    }
  } catch (e) {}
  Error.prepareStackTrace = originalFunc;
  return callerfile;
}

module.exports = getCallerFilename;
