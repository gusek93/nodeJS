import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-errors';
import authRoute from './router/auth.js';
import tweetsRoute from './router/tweets.js';

// const express = require('express');
// const cors = require('cors');
// const morgan = require('morgan');
// const helmet = require('helmet');
// const tweetsRoute = require('./router/tweets');


const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/auth', authRoute);
app.use('/tweets', tweetsRoute);

app.use((req, res, next) => {
    res.sendStatus(404);
})

app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
})
app.listen(8888);