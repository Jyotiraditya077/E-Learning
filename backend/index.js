const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const Routes = require("./routes/route.js");

const PORT = process.env.PORT || 5000;

dotenv.config();

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to the E-Learning Backend!");
});

// API Routes
app.use("/", Routes);

// Handle Undefined Routes
app.use((req, res) => {
  res.status(404).send({ error: "Route not found" });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server started at port no. ${PORT}`);
});