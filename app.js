const express = require("express");

const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  response.send(
    `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  );
});

// app.listen(3002);
module.exports = app;

// const express = require("express");
// const app = express();

// app.get("/", (request, response) => {
//   let date = new Date();
//   response.send(`Today's date is ${date}`);
// });

// app.listen(3001);
