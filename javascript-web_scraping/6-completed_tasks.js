#!/usr/bin/node
/*eslint-disable*/
const request = require('request');

request(process.argv[2], (error, request, body) => {
  if (error) {
    console.log(error);
  }

  const res = JSON.parse(body);
  const completedTasks = {};
  for (const ele of res) {
    if (ele.completed) {
      if (ele.userId in completedTasks) {
        completedTasks[ele.userId] += 1;
      } else {
        completedTasks[ele.userId] = 1;
      }
    }
  }

  console.log(completedTasks);
});