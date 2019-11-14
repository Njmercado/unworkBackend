const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const freelancersRouter = require('./routes/freelancer');
const businessRouter = require('./routes/business');
const workRouter = require('./routes/work');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/freelancer', freelancersRouter);
app.use('/business', businessRouter);
app.use('/work', workRouter);

module.exports = app;
