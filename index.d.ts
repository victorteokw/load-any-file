import loadFile = require('load-any-file');
declare namespace loadFile {}
declare function loadFile(location: string): any;
export default loadFile;
