import app from "./app.js";
import "dotenv/config";

const PORT = process.env.PORT;

/*
app.get("/", (req, res) => {
  res.send(req.hostname + "  working now");
});
*/

app.listen(8000, () => {
  console.log(`Server is ruuning ${PORT}`);
});
