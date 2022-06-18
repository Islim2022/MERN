const express = require("express");
const app = express();
const port = 8000;

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );
