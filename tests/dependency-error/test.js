// const path = require('path');
// const assert = require('assert');
// const loadIt = require('../../index');
//
// describe('Throws error: ', function() {
//   const savedRequire = require;
//   beforeEach(function() {
//     global.require = function(filename) {
//       switch (filename) {
//         case 'coffeescript/register': {
//           const err = new Error(
//             "Dependency missing. Please install 'coffeescript'."
//           );
//           err.code = 'MODULE_NOT_FOUND';
//           throw err;
//         }
//         case 'coffeescript': {
//           const err = new Error(
//             "Dependency missing. Please install 'coffeescript'."
//           );
//           err.code = 'MODULE_NOT_FOUND';
//           throw err;
//         }
//         case 'typescript': {
//           const err = new Error(
//             "Dependency missing. Please install 'typescript'."
//           );
//           err.code = 'MODULE_NOT_FOUND';
//           throw err;
//         }
//         case 'ts-node/register': {
//           const err = new Error(
//             "Dependency missing. Please install 'ts-node'."
//           );
//           err.code = 'MODULE_NOT_FOUND';
//           throw err;
//         }
//         case 'js-yaml': {
//           const err = new Error(
//             "Dependency missing. Please install 'js-yaml'."
//           );
//           err.code = 'MODULE_NOT_FOUND';
//           throw err;
//         }
//         default:
//           return savedRequire(filename);
//       }
//     };
//   });
//   afterEach(function() {
//     global.require = savedRequire;
//   });
//   it('if requires cson file and coffeescript is not installed', function() {
//     assert.throws(
//       () => loadIt(path.join(__dirname, './config.cson')),
//       {
//         name: 'LoadItError',
//         message: "Dependency missing. Please install 'coffeescript'."
//       }
//     );
//   });
//
// });
