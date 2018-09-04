let columns = [
  {
    key: 'index',
    title: '序号'
  },
  {
    key: 'name',
    title: '任务名称'
  },
  {
    key: 'location',
    title: '所在区域'
  },
  {
    key: 'type',
    title: '任务类型'
  },
  {
    key: 'state',
    title: '任务状态'
  },
  {
    key: 'commitTime',
    title: '提交时间'
  },
  {
    key: 'customer',
    title: '提交人'
  },
  {
    key: 'designer',
    title: '设计人'
  },
  {
    key: 'approver',
    title: '审核人'
  }
]

let tableDatas = [
  {
    index: '1',
    name: 'GX粤桂合作特别试验区江北片区扶典冲防洪排涝规划',
    type: '防洪排涝',
    location: '梧州市',
    state: '待提交',
    customer: '梧州市政府',
    designer: '城乡规划研究院'
  },
  {
    index: '2',
    name: 'HLJ黑龙江双城经济开发区产业发展研究',
    type: '产业发展',
    location: '黑龙江双城',
    state: '已提交',
    commitTime: '2018-08-31',
    customer: '双城政府',
    designer: '城乡规划研究院'
  },
  {
    index: '3',
    name: 'HLJ黑龙江双城区新兴街道交通可达性论证',
    type: '交通状况评定',
    location: '黑龙江双城',
    state: '已设计',
    commitTime: '2018-08-31',
    customer: '双城政府',
    designer: '城乡规划研究院'
  }
]

module.exports = {
  columns,
  tableDatas
}
