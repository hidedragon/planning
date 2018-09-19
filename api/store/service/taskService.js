const uuid = require('uuid/v1')
const {mysqlDb, Sequelize} = require('../store')
let {planningTaskModel} = require('../model/planningTask')

// let getPlanningTaskList = async (params) => {
//   params = params || {}
//   let {type} = params
//   let res = await planningTaskModel.findAll({ where: {type: type} })
//   let datas = res?res.dataValues:null
//   return datas
// }

let createPlanningTask = async (params) => {
  if(!params) return null
  let pt = params;
  if(pt && !pt.id){
    pt.id = uuid()
  }
  let res = await planningTaskModel.create(pt)
  return res
}

let updatePlanningTask = async (params) => {
  if(!params) return null
  let pt = params;
  if(pt && !pt.id){
    pt.id = uuid()
    await planningTaskModel.create(pt)
  }else{
    let id = pt.id
    delete pt.id
    await planningTaskModel.update(pt, {where: {id: id}})
  }
  return true
}

let getPlanningTaskList = async (params) => {
  let sql = 'select * from t_planning_task ';
  let reps = [];
  let results = await mysqlDb.query(sql,{ replacements: reps, type: Sequelize.QueryTypes.SELECT });
  return results;
}

let test = async () => {
  let testRes = await getPlanningTaskList({type: 'a'})
  console.log(testRes)
}

// test()

module.exports = {
  getPlanningTaskList,
  createPlanningTask,
  updatePlanningTask
}