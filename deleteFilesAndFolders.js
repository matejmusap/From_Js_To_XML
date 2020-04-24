const fs = require('fs');
var rimraf = require("rimraf");

function deleteFilesAndFolders() {
    if (fs.existsSync('folders')){
        rimraf("./folders", function () { return;});
    }
    if (fs.existsSync('inOneLine')){
        rimraf("./inOneLine", function () { return;});
    }
    if (fs.existsSync(`./XML.xml`)){
         fs.unlink('./XML.xml', function () { return;});
    }
    if (fs.existsSync(`./XML.js`)){
         fs.unlink('./XML.js', function () { return;});
    }
} 

module.exports = deleteFilesAndFolders;
