const express = require('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var multer  = require('multer')

// Create express instnace
const app = express()

// Require API routes
const users = require('./routes/users')
const tasks = require('./routes/tasks')

app.use('/assets', express.static('../assets'))
app.use(bodyParser.json())
app.use(cookieParser())

// Import API Routes
app.use('/users', users)
app.use('/tasks', tasks)

var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');//自定义中间件，设置跨域需要的响应头。
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};
app.use(allowCrossDomain);

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
