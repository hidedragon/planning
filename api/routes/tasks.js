const { Router } = require('express')
const { mkdirsSync } = require('../../toolkit')
const path = require('path')
const fs = require('fs')

const upload = require('multer')({dest: path.join(__dirname, '../resources/uploads')});

const router = Router()

let {createPlanningTask, updatePlanningTask} = require('../store/service/taskService')

router.post('/getTaskList', async (req, res, next) => {

})

router.post('/createPlanningTask', async (req, res, next) => {
  try{
    let {planningTask} = req.body
    let user = req.session.user
    planningTask.customer = user?user.name:''
    console.log(planningTask)
    let result = await createPlanningTask(planningTask)
    return res.send({data: result})
  }catch (e) {
    console.error(e)
    return res.send({error: '新增失败'})
  }
})

router.post('savePlanningTask', async (req, res, next) => {
  try{
    let {planningTask} = req.body
    let user = req.session.user
    planningTask.customer = user?user.name:''
    console.log(planningTask)
    let result = await updatePlanningTask(planningTask)
    return res.send(result)
  }catch (e) {
    console.error(e)
    return res.send({error: '新增失败'})
  }
})

let baseInfoFilesPath =  path.join(__dirname, '../resources/files/baseInfo');
mkdirsSync(baseInfoFilesPath);

router.post('/upload', upload.single('file') ,async (req, res) => {
  // 没有附带文件
  if (!req.file) {
    res.status(500);
    res.json({ error: '请上传文件' });
  }

  // let fileName = req.file.originalname;
  // 重命名文件
  let oldPath = req.file.path;
  let pendingPath = path.join(baseInfoFilesPath, req.file.originalname);
  try{
    fs.renameSync(oldPath, pendingPath);
    res.json({ success: '保存文件成功' });
  }catch (error){
    res.status(500);
    res.json({ error: '保存文件失败' });
  }
});

module.exports = router
