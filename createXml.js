const fs = require('fs');
const fsPath = require('fs-path');
const readline = require('readline');

 function createXml() {
  fsPath.find(`${__dirname}/inOneLine`,function(_err, list){
    let files = list.files;
    for(let file of files) {
      const readInterface = readline.createInterface({
        input: fs.createReadStream(file),
        output: process.stdout,
        console: false
        });
      readInterface.on('line', function(line) {
        fs.appendFile('XML.xml', `\n<X-PRE-PROCESS cmd="include" data="${file}='${line.replace(/\s/g,'')}'"/>`, function(err) {
          if (err) throw err;
        });
      });
    }});
    return;
}

module.exports = createXml;
