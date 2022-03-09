const dotenv = require("dotenv");
const express = require("express");
const HttpError = require("./errors/HttpError");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger.json");
const { readItem, readAll, writeItem, removeItem } = require("./crud");

dotenv.config();

const api = express();
const port = process.env.PORT;

api.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// if you want to use req.body
api.use(express.json());

api.delete("/country/:id", (req, res, next) => {
  const id = req.params.id;
  return removeItem(id)
    .then((val) => {
      res.status(200).json({ message: `${id} deleted.` });
    })
    .catch((err) => next(new HttpError(500, err.message)));
});

api.put("/country", (req, res, next) => {});

api.post("/country/:id", (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  return writeItem(body, id)
    .then((val) => {
      res.status(200).json({ message: `Stored with ${id}` });
    })
    .catch((err) => next(new HttpError(500, err.message)));
});

api.patch("/country/:id", (req, res, next) => {
  const id = req.params.id;
  return res.send("done");
});

// 1. define get route to return countries
// 2. Fetch data from firebase
// 3. Return results from express
api.get("/country", (req, res, next) => {
  return readAll()
    .then((val) => {
      if (val) {
        res.json(val);
      } else {
        next(new HttpError(400, "No value found for this id."));
      }
    })
    .catch((err) => next(new HttpError(500, err.message)));
});

// 1. define get route to return a specific country based on id
// 2. Fetch data from firebase
// 3. Return country from express
api.get("/country/:id", (req, res, next) => {
  const id = req.params.id;
  return readItem(id)
    .then((val) => {
      if (val) {
        res.json(val);
      } else {
        next(new HttpError(400, "No value found for this id."));
      }
    })
    .catch((err) => next(new HttpError(500, err.message)));
});

api.use("*", (req, res, next) => {
  next(new HttpError(404, "Route does not exist."));
});

api.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    status: err.status,
    message: err.message,
  });
});

api.listen(port, () => {
  console.log(`🚀 Country api listening at http://localhost:${port}`);
});
