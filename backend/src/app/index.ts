import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from 'path';

import { config } from "dotenv";
config();

import routes from "../modules/routes";

const app = express();

const allowedOrigins = ["http://localhost:3000", "http://localhost:8080"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
  credentials: true,
};

// Middlewares
app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../../../frontend')));

// Console logger
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get('/api/v1', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../frontend/index.html'));
});

// Routes
app.use("/api/v1", routes);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/api/v1`);
});

server.on("error", (error) => {
  console.error("Error starting server:", error);
  process.exit(1);
});

export default app;
