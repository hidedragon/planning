const Sequelize = require('sequelize')

//aliyun mysql: 47.100.12.72

const mysqlDb = new Sequelize("sohi", "root", "123456", {
  host: "47.100.12.72",
  port: "3306",
  dialect: "mysql",
  pool: {
    max: 20,
    min: 0,
    acquire: 100000,//ms as unit
    idle: 100000
  },
  operatorsAliases: false,
  logging: function (sql) {
       // console.log("执行sql:"+sql);
  }
})

module.exports = {
  mysqlDb,
  Sequelize
}
