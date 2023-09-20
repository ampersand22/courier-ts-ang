import express, { NextFunction, json, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
app.use(cors());
// app.use(json())
dotenv.config();

app.use(function (err:Error, req:Request, res:Response, next: NextFunction) {
  if (err.message) {
    res.status(500).json({ message: err.message });
  }

  res.status(400).json({ message: err.message });
});

const PORT = process.env.PORT;

app.listen(3000, () => {
  console.log(`Server is running, homie on port ${PORT}`)
})