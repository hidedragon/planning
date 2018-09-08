const uuid = require('uuid/v1')
let {planningTaskModel} = require('../model/planningTask')

let getPlanningTaskList = async (params) => {
  let {type} = params
  let res = await planningTaskModel.findAll({ where: {type: type} })
  let datas = res?res.dataValues:null
  return datas
}

let createPlanningTask = async (params) => {
  if(!params) return null
  let pt = params;
  if(pt && !pt.id){
    pt.id = uuid()
  }
  let res = await planningTaskModel.create(pt)
  return res
}

let test = async () => {
  let testRes = await getPlanningTaskList({type: 'a'})
  console.log(testRes)
}

// test()

module.exports = {
  getPlanningTaskList,
  createPlanningTask
}