import express from "express";

const app = express();
const PORT = 5000;

app.use("/", (req, resp) => {
  resp.json({ message: "Hello developers!" });
});

app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});
