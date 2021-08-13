import express from 'express';
import helmet from 'helmet';
import http from 'http';
import mongoose from 'mongoose';
import config from './config/config';
import logging from './config/logging';
import solarBodyRoutes from './routes/solarBodies';

const NAMESPACE = 'Server';
const app = express();

//** Security middleware to prevent some common attacks */
app.use(helmet());

/** Mongo connection */
mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then((result) => logging.info(NAMESPACE, 'Connected to mongoDB'))
    .catch((err) => logging.error(NAMESPACE, err.message, err));

/** Server side logging */
app.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}, IP - ${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}, IP - ${req.socket.remoteAddress}], STATUS - ${res.statusCode}`);
    });
    next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/** Routes */
app.use('/bodies', solarBodyRoutes);

/** Error handling */
app.use((req, res, next) => {
    const error = new Error('Not found');

    return res.status(404).json({
        message: error.message
    });
});

/** Create the server */
const httpServer = http.createServer(app);
httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server running on ${config.server.hostname}:${config.server.port}`));
