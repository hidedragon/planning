<template>
  <div>
      <Card style="background-color: #363e50;border: cornflowerblue">
        <p slot="title" style="color: white;">
          <Icon type="pinpoint"></Icon>
          {{title}}
        </p>
        <Row>
          <Input v-model="searchConName" icon="search" @on-change="handleSearch" placeholder="请输入关键字搜索..."
                 style="width: 300px"/>
        </Row>
        <Row style="margin-top: 10px;">
          <i-button type="primary" size="small" :key="item.title" style="margin-right: 20px;"
                    v-for="item in buttons" @click="item.onClick">
            {{item.title}}
          </i-button>
        </Row>
        <Row style="margin-top: 10px;">
          <Table :columns="tableColumns" :data="datas" border></Table>
        </Row>
      </Card>
  </div>
</template>
<script>
  export default {
    name: 'condition-table',
    props: {
      title: {
        type: String,
        DEFAULT: '列表'
      },
      tableColumns: {
        type: Array,
        default: function () {
          return []
        }
      },
      tableDatas: {
        type: Array,
        default: function () {
          return []
        }
      },
      buttons: {
        type: Array,
        default: function () {
          return []
        }
      },
      conditions: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data () {
      return {
        searchConName: '',
        datas: []
      }
    },
    methods: {
      search (data, argumentObj) {
        let res = data
        let dataClone = data
        for (let argu in argumentObj) {
          if (argumentObj[argu].length > 0) {
            res = dataClone.filter(d => {
              return d[argu].indexOf(argumentObj[argu]) > -1
            })
            dataClone = res
          }
        }
        return res
      },
      handleSearch () {
        this.datas = this.search(this.datas, {name: this.searchConName})
      }
    },
    mounted () {
      this.datas = this.tableDatas
    },
    watch: {
      tableDatas: function (newVal) {
        if(newVal && newVal.length>0){
          for(let nv of newVal){
            if(nv){
              for(let k in nv){
                if(!nv[k]) nv[k] = '--'
              }
            }
          }
        }
        this.datas = newVal
      }
    }
  }
</script>
<style>
</style>
