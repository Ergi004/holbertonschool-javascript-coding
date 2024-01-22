#!/usr/bin/node
/*eslint-disable*/
const fs = require('fs');
function writeMe(filePath, content) {
  fs.writeFile(filePath, content, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
