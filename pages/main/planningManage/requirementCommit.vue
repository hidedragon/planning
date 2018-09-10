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
        taskInfo: {

        },
        showTaskModal: false,
        tableColumns: columns,
        tableDatas: tableDatas
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