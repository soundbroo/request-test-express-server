const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(5000, function() {
  console.log("CORS-enabled web server listening on port 5000");
});

app.post("/data", async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json({ message: req.body });
  } catch (e) {
    res.status(500).json({ message: "Что-то не то" });
  }
});
