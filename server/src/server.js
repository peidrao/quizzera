const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const logger = require('morgan');

const routes = require('./routes');

dotenv.config();
const uri =
    'mongodb+srv://<username>:<password>@cluster0-<cluster>.mongodb.net/<database>?retryWrites=true&w=majority';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
mongoose.Promise = global.Promise;

const app = express();


const corsOptions = {
    origin: process.env.ENDPOINT,
    optionsSuccessStatus: 200
};

// load app middlewares
app.use(logger('dev'));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// morganBody(app);

routes(app);


const port = process.env.PORT || 3001;
if (process.env.NODE_ENV !== 'test') {
    app.server = app.listen(port);
    console.log(`listening on port ${port}`);
}

module.exports = { app, mongoose };
