const fs = require('fs');
var rimraf = require("rimraf");
const fsPath = require('fs-path');
var decomment = require('decomment');
const path = require('path');
const ncp = require("ncp").ncp;
ncp.limit = 0;

function main() {
  rimraf("./folders", function (_err) {
    ncp(`${__dirname}/foldersOriginal`, `${__dirname}/folders`, function (_err) {
      fs.unlink('./XML.xml', function (_err) {
      });
      fs.unlink('./XML.js', function (_err) {
      });
      fsPath.find(`${__dirname}/folders`,function(_err, list){
        let files = list.files;
        for(let file of files) {
          fs.readFile(file, 'utf8', function (_err,data) {
            let result = decomment(data).replace(/("|')/g, "\\'").replace(/\s/g,'');
            fs.writeFile(file, result, 'utf8', function(_err) {
              fs.appendFile('XML.xml', `\n<X-PRE-PROCESS cmd="include" data="${file}='${result}'"/>`, function(_err) {});
              const baseName = path.basename(file, '.js');
              let line = `<X-PRE-PROCESS cmd=\\"include\\" data=\\"${file}='${result}'\\"/>`
              fs.appendFile('XML.js', `\nconst ${baseName}="${line}"`, function(_err) {
              });
            });
          });
        }
      });
    });
  });
};

main();