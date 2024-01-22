#!/usr/bin/node
/*eslint-disable*/
const fs = require('fs');
fs.writeFile(process.argv[2], process.argv[3], 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});