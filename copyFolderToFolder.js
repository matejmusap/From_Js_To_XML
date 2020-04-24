const fs = require('fs');
const ncp = require("ncp").ncp;
ncp.limit = 0;

async function copyFolderToFolder() {
  if (!fs.existsSync('./folders')){
    fs.mkdirSync('./folders');
    ncp(`${__dirname}/foldersOriginal`, `${__dirname}/folders`, function (err) {
      if (err) throw err;
     });;
  }

}

module.exports = copyFolderToFolder;