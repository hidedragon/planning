const { Router } = require('express')
const { mkdirsSync } = require('../../toolkit')
const path = require('path')
const fs = require('fs')
const multer = require('multer')
path.join(__dirname, './resources/uploads')

let upload = multer({dest: path.join(__dirname, './resources/uploads')})

const router = Router()

let {createPlanningTask} = require('../store/service/taskService')

router.post('/getTaskList', async (req, res, next) => {

})

router.post('/createPlanningTask', async (req, res, next) => {
  let {planningTask} = req.body
  let result = await createPlanningTask(planningTask)
  res.send(result)
})

let baseInfoFilesPath =  path.join(__dirname, 'resources/files/baseInfo');
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
