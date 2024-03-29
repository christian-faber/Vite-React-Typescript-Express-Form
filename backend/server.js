import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.post("/contact", (req, res) => {
  const contactInfo = req.body;
  console.log("Contact form data in console:", contactInfo);
  res.status(200).send("Form submitted");
});

app.get("/", (req, res) => {
  res.send("server is running!!");
});
app.get("*", (req, res) => {
  res.status(404).send("Not Found");
});

const port = 3000;
const server = app.listen(port, () => {
  console.log("Server running on port", port);
});
