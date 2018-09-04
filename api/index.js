const express = require('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

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

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
