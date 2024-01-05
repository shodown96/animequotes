// src/index.js
import express, { Express, Request, Response, json } from "express";
import dotenv from "dotenv";
import cors from 'cors';
import { quotesRouter } from "./routes";
import connectDB from "./mongodb/connect";


dotenv.config();

const app: Express = express();
const dbURI = `${process.env.MONGODB_URI}`
// Parse JSON request body
app.use(json());
app.use(cors());
// Connect to MongoDB
connectDB(dbURI);
const port = process.env.PORT || 3001;

app.use('/api/v1/quotes', quotesRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});