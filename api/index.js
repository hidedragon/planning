const express = require('express')
const session = require('express-session')
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

// 使用 session 中间件
app.use(session({
  secret :  'secret', // 对session id 相关的cookie 进行签名
  resave : true,
  saveUninitialized: false, // 是否保存未初始化的会话
  cookie : {
    maxAge : 1000 * 60 * 10, // 设置 session 的有效时间，单位毫秒
  },
}));

// Import API Routes
app.use('/api/users', users)
app.use('/api/tasks', tasks)

var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}
app.use(allowCrossDomain)

// 获取主页
app.get('/', function (req, res) {
  if(req.session.user){  //判断session 状态，如果有效，则返回主页，否则转到登录页面
    res.redirect('/front');
  }else{
    res.redirect('/login');
  }
})

// Export the server middleware
module.exports = {
  path: '/',
  handler: app
}
