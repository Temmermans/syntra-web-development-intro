// ✅ install dependencies with yarn (preferred for version locking) or npm
// ✅ create a route that sends back some json
// ✅ create a route that accepts json and logs it
// ✅ start the server

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// The callback function is called a controller
app.get("/users", (req, res) => {
  return res.json({
    user1: {
      name: "Le Me",
    },
    user2: {
      name: "Le Claire",
    },
  });
});

// The callback function is called a controller
app.post("/users", (req, res) => {
  console.log(req.body);
  return res.json(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
