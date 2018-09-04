let {userModel} = require('../model/user')

let getUserByAccount = async (params) => {
  let {account} = params
  let res = await userModel.findOne({ where: {account: account} })
  let data = res?res.dataValues:null
  return data
}


let test = async () => {
  let testRes = await getUserByAccount({account: 'adminaaa'})
  console.log(testRes)
}

// test()

module.exports = {
  getUserByAccount
}