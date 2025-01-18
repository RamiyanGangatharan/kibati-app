// server.js
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import winston from 'winston';
import path from 'path';

dotenv.config(); // Load environment variables

// Create a custom Winston logger
const winstonLogger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level}: ${message}`;
    })
  ),
  transports: [new winston.transports.Console()],
});

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    winstonLogger.info('Connected to MongoDB');
  })
  .catch((err) => {
    winstonLogger.error(`MongoDB connection error: ${err.message}`);
  });

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev')); // Log HTTP requests

// Define routes
app.get('/', (req, res) => {
  res.json({ message: 'Server connected successfully' });
});

// Serve static files from the React app
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(express.static(path.join(__dirname, 'client/build')));

// Catch-all handler for any requests not matching the above routes
app.get('*', (req, res) => {
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'), (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  } else {
    res.status(404).send({ message: '404 Not Found' });
  }
})

// Start the server
app.listen(PORT, () => {
  winstonLogger.info(`Server is running on port ${PORT}`);
});
