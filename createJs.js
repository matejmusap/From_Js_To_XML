const fs = require('fs');
const path = require('path');
const fsPath = require('fs-path');
const readline = require('readline');

function createJs() {
fsPath.find(`${__dirname}/inOneLine`, function(_err, list){
      let files = list.files;
      for(let file of files) {
        const baseName = path.basename(file, '.js');
        const readInterface = readline.createInterface({
          input: fs.createReadStream(file),
          output: process.stdout,
          console: false
        });
      readInterface.on('line', function(line) {
        line = `<X-PRE-PROCESS cmd=\\"include\\" data=\\"${file}='${line.replace(/\s/g,'')}'\\"/>`
        fs.appendFile('XML.js', `\nconst ${baseName}="${line}"`, function(err) {
          if (err) throw err;
        });
      });
    }});
  }

  module.exports = createJs;
