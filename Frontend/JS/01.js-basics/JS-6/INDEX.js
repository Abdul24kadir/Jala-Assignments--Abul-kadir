"use strict";
function testStrict() {
  // y = 10; // Uncommenting this will cause an error
  var y = 10;
  console.log(y);
}
testStrict();
/*node:internal/modules/cjs/loader:1147
  throw err;
  ^

Error: Cannot find module 'C:\Users\abdul\OneDrive\Desktop\Jala-Assignments-Abdul-kadir\Frontend\JS\js-6\index.html'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1144:15)
    at Module._load (node:internal/modules/cjs/loader:985:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v20.10.0
PS C:\Users\abdul\OneDrive\Desktop\Jala-Assignments-Abdul-kadir\Frontend\JS\js-6> */