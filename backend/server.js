require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');

const ticketsRouter = require('./src/routes/tickets');
const statusesRouter = require('./src/routes/statuses');
const errorMiddleware = require('./src/middleware/error.middleware');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

app.use('/tickets', ticketsRouter);
app.use('/statuses', statusesRouter);

app.use(errorMiddleware);

app.listen(process.env.PORT);
