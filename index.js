const crypto = require("crypto");
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config;

const app = express();

const signingSecret = "secret_f5f59e6dac534e9996e0ee9a81f73fda";
let dataFetch = "Nothing";

var jsonParser = bodyParser.json();

app.use(express.json({ extended: false }));

app.post("/", jsonParser, (req, res) => {
  const body = req.body;
  const headers = req.headers;

  const signature = crypto
    .createHmac("sha256", Buffer.from(signingSecret))
    .update(JSON.stringify(body), "utf-8")
    .digest("hex");

  if (headers["signature"] === signature) {
    console.log("Signature Verified. ", body);
    dataFetch = body;
    res.status(200).json({
      message: "Genuine Message Received",
    });
    return;
  }

  console.log(
    "Signature Verification Failed. The incoming payload is fraudulent."
  );
  res.status(500).json({
    message: "Fraudulent Message Received",
  });
});

app.get("/", (req, res) => {
  const temp = dataFetch;
  dataFetch = "Nothing";
  res.send(temp);
});

app.listen(8080, () => {
  console.log(`⚪ Sphere example webhook signing server :${8080}`);
});
