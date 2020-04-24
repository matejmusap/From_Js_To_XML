const fs = require('fs');
const path = require('path');
const fsPath = require('fs-path');
const readline = require('readline');

 function createInOneLine() {
  if (!fs.existsSync('./inOneLine')){
    fs.mkdirSync('./inOneLine');
  }
    fsPath.find(`${__dirname}/folders`,function(_err, list){
    let files = list.files;
    for(let file of files) {
    const baseName = path.basename(file);
    if (!fs.existsSync(`./inOneLine/${baseName}`)){
     const readInterface = readline.createInterface({
        input: fs.createReadStream(file),
        output: process.stdout,
        console: false
      });
        fs.readFile(file, 'utf8', function (err,data) {
         if (err) throw err;
        let result = data.replace(/("|')/g, "\\'");
        fs.writeFile(file, result, 'utf8', function (err) {
          if (err) throw err;
         });
       });
      readInterface.on('line', function(line) {
        fs.appendFile(`./inOneLine/${baseName}`, line, function(err) {
          if (err) throw err;
          });
        });
      }
      }});
      return;
    }

    module.exports = createInOneLine;
    