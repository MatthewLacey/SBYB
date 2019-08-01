const express = require('express');
const morgan = require('morgan');

const brandRouter = require('./routes/brandRoutes');

const app = express();

// MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// ROUTES
app.use('/api/v1/brands', brandRouter);

module.exports = app;
