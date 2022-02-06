const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.json({ success: true, message: "Hello world!" });
});

app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});
