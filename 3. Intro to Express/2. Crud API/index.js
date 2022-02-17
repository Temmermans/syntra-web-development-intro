const dotenv = require("dotenv");
const express = require("express");
const HttpError = require("./errors/HttpError");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger.json");

dotenv.config();

const api = express();
const port = process.env.PORT;

api.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

api.get(
  "/",
  async (req, res, next) => {
    console.log("heavy data prep");
    await firebase.get();
    req.fdglkj = await firebase.get();
    await sap.get();
    console.log("heavy data prep done.");
    next();
  },
  (req, res, next) => {
    if (req.query.error) {
      next(new HttpError(400, "Something is not right."));
    }
    next();
  },
  (req, res) => {
    res.send(req.fdglkj);
  }
);

api.use("*", (req, res, next) => {
  next(new HttpError(404, "Route does not exist."));
});

api.use((err, req, res, next) => {
  res.status(err.status).json({
    status: err.status,
    message: err.message,
  });
});

api.listen(port, () => {
  console.log(`🚀 Country api listening at http://localhost:${port}`);
});
