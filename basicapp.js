console.log("Hello World");

// Example to use modules
// Also note that if you want import a file named index.js then you need not use file, one can just mention its folder name
var module_func = require('./exports/export_example');

module_func.hello();

// Eg: set Timeout function
var holdOn = setTimeout(function () {
    console.log("setTimeout 2000 ms");
},2000);

// Using File system
var fs = require('fs');
var file = fs.readFileSync('app.js');
console.log("Loaded the file sync");

// Reading the file asynchrounously 
fs.readFile('app.js', function(err, filen) {
    console.log("Loaded the file sync");
} );


// inorder to  maintain packages one can use package.json file same as requirements.txt in python
// use npm init to start package.json file, after that use npm install {package name} --save