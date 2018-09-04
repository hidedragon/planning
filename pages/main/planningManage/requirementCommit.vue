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
            :tabDatas="tabDatas"
    >
    </task-modal>
  </div>
</template>
<script>
  import conditionTable from '~/components/tables/conditionTable'
  import taskModal from '~/components/task'
  import {columns, tableDatas} from './testDatas'

  export default {
    name: 'requirement-commit',
    components: {
      conditionTable,
      taskModal
    },
    data () {
      return {
        tabDatas: [
          {
            label: '任务流程',
            name: 'taskFlow',
            type: 'flow',
            data: {
              name: ''

            }
          },
          {
            label: '任务需求',
            name: 'taskRequirement',
            type: 'requirement',
            data: {
              v1: 'aaa11'
            }
          },
          {
            label: '设计成果',
            name: 'planningResult',
            data: {
              v1: 'aaa11'
            }
          },
          {
            label: '日常沟通',
            name: 'taskChat',
            data: {
              v1: 'aaa11'
            }
          },
          {
            label: '流转记录',
            name: 'flowHistory',
            data: {
              v1: 'bbb'
            }
          }
        ],
        showTaskModal: false,
        tableDatas: tableDatas,
        tableColumns: columns
      }
    },
    computed: {
      toolbarBtns () {
        let btns = []
        btns.push(
          {
            title: '新增',
            onClick: () => {
              this.showTaskModal = !this.showTaskModal
            }
          }
        )
        return btns
      }
    },
    methods: {
      closeModal: function () {
        this.showTaskModal = !this.showTaskModal
      }
    }
  }
</script>
<style>
</style>