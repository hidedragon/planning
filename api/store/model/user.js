const {mysqlDb, Sequelize} = require('../store');
const uuid = require('uuid')

/**
 * 规划任务信息
 */
let user = {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    title: "id",
  },
  name: {
    type: Sequelize.STRING,
    title: "名称"
  },
  account: {
    type: Sequelize.STRING,
    title: "账号"
  },
  password: {
    type: Sequelize.STRING,
    title: "密码"
  },
  phone: {
    type: Sequelize.STRING,
    title: "手机号"
  },
  role: {
    type: Sequelize.STRING,
    title: "角色",
    desc: 'admin 管理员，customer 业主，designer 设计者，approver 审批人'
  }
}

let userModel = mysqlDb.define('t_user', user, {
  freezeTableName: true // Model 对应的表名将与model名相同
})
;(async () => {
  await userModel.sync({force: false})
  const ary = await userModel.findAll()
  if (!ary.length) {
    userModel.create({
      id: uuid(),
      name: 'admin',
      account: 'admin',
      password: 'admin'
    })
  }
})()

module.exports = {
  userModel,
  user
}