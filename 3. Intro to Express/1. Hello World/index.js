// ✅ install dependencies with yarn (preferred for version locking) or npm
// ✅ create a route that sends back some json
// ✅ create a route that accepts json and logs it
// ✅ start the server

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
