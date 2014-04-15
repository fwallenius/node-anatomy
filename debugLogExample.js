var debug = require('debug')('skeleton:debugLogExample');
//                            ^-app name  ^-module

// Running this program out-of-the box will not produce any output
// Activate logging by setting an env variable:
// $ export DEBUG=skeleton:debugLogExample
// or
// $ export DEBUG=skeleton:*
// or
// $ export DEBUG=skeleton:debugLogExample,skeleton:otherFile
debug('This is one of the logging tools.');
debug('There are other packages that can be installed for this as well.')