<!--这个是全国企业分布热点图-->
<template>
  <div class="front">
    <Row>
      <i-col span="24">
        <Button type="primary" style="float: right;margin-right: 20px;margin-top: 5px;" @click="gotoHome">控制台</Button>
      </i-col>
    </Row>
    <div style="width: 100%;display: block;">
      <MapChart @mapChange="mapChange"></MapChart>
    </div>
  </div>
</template>
<script>
  import MapChart from './components/mapChart/mapChart'

  export default {
    name: 'Front',
    components: {
      MapChart
    },
    data () {
      return {
        inforCardData: [
          {title: '平均热度', icon: 'md-person-add', count: 803, color: '#2d8cf0'},
          {title: '总热度值', icon: 'md-locate', count: 23432, color: '#19be6b'},
          {title: '最低热度', icon: 'md-help-circle', count: 142, color: '#ff9900'},
          {title: '最高热度', icon: 'md-share', count: 1657, color: '#ed3f14'}
        ]
      }
    },
    computed: {},
    methods: {
      gotoHome () {
        this.$router.push({
          name: 'main'
        })
      },
      mapChange (ary) {
        console.log(ary)
      }
    },
    mounted () {
    }
  }
</script>
<style>
  .count-style {
    font-size: 50px;
    color: #F0F0F0;
  }

  .infor-title {
    font-size: 16px;
    color: #F8F8F9;
  }

  .front {
    width: 100%;
    height: 100%;
    background-image: url('../../assets/img/login-back.png');
  //background-color: #0e284e; //background: rgb(51, 51, 51); background-size: cover;
    background-position: center;
    position: relative;
  }
</style>
