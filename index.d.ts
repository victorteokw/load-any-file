import loadFile = require('load-any-file');
declare namespace loadFile {
  function resolve(location: string): string;
}
declare function loadFile(location: string): any;
export default loadFile;
