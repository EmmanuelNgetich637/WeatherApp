
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/test", (req, res) => {
  res.json({ msg: "Hello from test server!" });
});

app.listen(4000, () => {
  console.log("Test server running on port 4000");
});
