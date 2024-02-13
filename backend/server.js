import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

const distPath = path.join(__dirname, "../frontend/dist");

app.use("/static", express.static(distPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const port = 3000;
const server = app.listen(port, () => {
  console.log("Server running on port", port);
});

app.post("/contact", (req, res) => {
  const contactInfo = req.body;
  console.log("received contact info:", contactInfo);
  res.status(200).send("Form submitted");
});
