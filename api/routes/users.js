const { Router } = require('express')

const router = Router()

let {getUserByAccount} = require('../store/service/userService')

router.post('/getUserByAccount', async (req, res, next) => {
  let {account} = req.body
  let user = await getUserByAccount({account: account})
  res.json(user)
})

router.post('/login', async (req, res ,next) => {
  let {account, password} = req.body;
  let user = await getUserByAccount({account: account})
  if(password === user.password){
    req.session.user = user
    res.json({data: '登录成功', redirect: 'front'})
  }else{
    res.json({error:'登录失败'})
  }
})

router.post('/getCurrentUser', async (req, res, next) => {
  res.json(req.session.user)
})

module.exports = router
