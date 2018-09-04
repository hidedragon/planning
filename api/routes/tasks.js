const { Router } = require('express')

const router = Router()

let {getUserByAccount} = require('../store/service/userService')

router.post('/getTaskList', async (req, res, next) => {
  let {account} = req.body
  let user = await getUserByAccount({account: account})
  res.json(user)
})

module.exports = router
