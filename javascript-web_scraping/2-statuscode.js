#!/usr/bin/node
/*eslint-disable*/
fetch(process.argv[2] , {
    method: 'GET',
})

.then(responmse => {
    console.log(`Code: ${responmse.status}`);
})