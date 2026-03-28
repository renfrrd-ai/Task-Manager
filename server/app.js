import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173/",
  }),
);

app.listen(PORT, (error) => {
  if (error) console.log(error);
  else console.log(`Server running on port ${PORT}`);
});
