<template>
  <div>
    <condition-table
            title="规划管理/规划任务提交"
            :tableDatas="tableDatas"
            :tableColumns="tableColumns"
            :buttons="toolbarBtns"
    ></condition-table>
    <task-modal
            :isShow="showTaskModal"
            title="任务详情"
            @closed="closeModal"
            :taskInfo="taskInfo"
    >
    </task-modal>
  </div>
</template>
<script>
  import axios from '~/plugins/axios'
  import conditionTable from '~/components/tables/conditionTable'
  import '~/pages/util'
  import taskModal from './components/task'
  let taskTypes = ['', '经济社会发展战略规划', '产业规划', '空间规划']
  let flowStates = ['新建', '任务需求提交', '慧策', '需求确认', '智能设计', '设计结果提交', '专家审批', '生成报告', '完成']

  export default {
    name: 'requirement-commit',
    components: {
      conditionTable,
      taskModal
    },
    data () {
      return {
        taskInfo: {flowState: 0},
        showTaskModal: false,
        tableDatas: []
      }
    },
    computed: {
      toolbarBtns () {
        let btns = []
        btns.push(
          {
            title: '新增',
            onClick: () => {
              this.showTaskModal = true
            }
          }
        )
        btns.push(
          {
            title: '刷新',
            onClick: () => {
              this.refreshTableList()
            }
          }
        )
        return btns
      },
      tableColumns () {
        return [
          {
            key: 'index',
            title: '序号',
            width: 70,
            render: (h, params) => {
              return h('div', params.index+1)
            }
          },
          {
            key: 'name',
            title: '任务名称'
          },
          {
            key: 'type',
            title: '任务类型',
            render: (h, params) => {
              return h('div', taskTypes[parseInt(params.row.type)])
            }
          },
          {
            key: 'flowState',
            title: '任务状态',
            render: (h, params) => {
              return h('div', flowStates[parseInt(params.row.flowState)])
            }
          },
          {
            key: 'commitTime',
            title: '提交时间',
            render: (h, params) => {
              return h('div', new Date(params.row.createdAt).format('yyyy-MM-dd hh:mm:ss'))
            }
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
          },
          {
            key: 'actions',
            title: '操作',
            width: 150,
            align: 'center',
            render: (h, params) => {
              let btns = []
              btns.push(h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.taskInfo = params.row
                    this.showTaskModal = true
                  }
                }
              }, '编辑'))
              btns.push(h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.taskInfo = params.row
                    this.showTaskModal = true
                  }
                }
              }, '查看'))
              return h('div', btns)
            }
          }
        ]
      }
    },
    methods: {
      closeModal: function () {
        this.refreshTableList()
        this.showTaskModal = false
      },
      refreshTableList: async function () {
        let {data} = await axios.post('/api/tasks/getTaskList')
        let tds = data
        this.tableDatas = tds
      }
    },
    mounted () {
      this.refreshTableList()
    }
  }
</script>
<style>
</style>