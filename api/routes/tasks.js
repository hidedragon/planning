const { Router } = require('express')

const router = Router()

let {createPlanningTask} = require('../store/service/taskService')

router.post('/getTaskList', async (req, res, next) => {

})

router.post('/createPlanningTask', async (req, res, next) => {
  let {planningTask} = req.body
  let result  = await createPlanningTask(planningTask)
  res.send(result)
})

module.exports = router
