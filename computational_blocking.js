// In this case code is running synchronously 
console.log(1);

require('./helper/_fibonacci.js');

// In this case console log has to wait till the _fibonacci file is loaded
console.log(2);




// Computational Non Blocking code
var child_process = require('child_process');

// In this case code is running synchronously 
console.log(1);

var newProcess = child_process.spawn('node', ['./helper/_fibonacci.js'], {
    stdio: 'inherit'
});
// require('./helper/_fibonacci.js');

// In this case console log has to will not wait till the _fibonacci file is loaded
console.log(2);
