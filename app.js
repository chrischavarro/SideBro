const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const logger = require('morgan');
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const io = require('socket.io')();

const authController = require('./routes/authController');
const seedController = require('./routes/seedController');
const tagController = require('./routes/tagController');
const spotifyController = require('./routes/spotifyController');
const profileController = require('./routes/profileController');
const friendController = require('./routes/friendController');
const requestController = require('./routes/requestController');
const userController = require('./routes/userController');
const filterController = require('./routes/filterController');
const chatController = require('./routes/chatController');

require('./services/passport');
const app = express();

mongoose.connect(keys.mongoURI)

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    secret: 'OERUDLSF'
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', authController);
app.use('/', seedController);
app.use('/', tagController);
app.use('/spotify', spotifyController);
app.use('/', profileController);
app.use('/', friendController);
app.use('/', requestController);
app.use('/', userController);
app.use('/api', filterController);
app.use('/api', chatController);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

io.on('connection', (socket) => {
  socket.on('SEND_MESSAGE', function(data){
    io.emit('RECEIVE_MESSAGE', data);
  })
});

const port = 8001
io.listen(port)

app.listen(5005);

module.exports = app;
