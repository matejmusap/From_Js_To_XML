const fs = require('fs');
const fsPath = require('fs-path');
var decomment = require('decomment');

 function commentsRemove() {
  fsPath.find(`${__dirname}/folders`,function(_err, list){
    let files = list.files;
    for(let file of files) {
      fs.readFile(file, 'utf8', function (err,data) {
        const result = decomment(data);
        if (err) throw err;
        fs.writeFile(file, result, 'utf8', function (err) {
          if (err) throw err;
        });
      });
      }});
      return;
}

module.exports = commentsRemove;