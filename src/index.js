//Module dependencies
const express = require('express');
const logger = require('morgan');
const postRoutes = require('./router/post')

//config
const app = express();
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

//middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes

//starter
app.listen(app.get('port'), () => {
  console.log(`Server started on port ${app.get('port')}`);
});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

app.use('/post', postRoutes)