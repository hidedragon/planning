<template>
  <div id="body" style="background-color:#333;width:100%;display: flex;justify-content: center;color: #ffffff;">
    <div style="width:380px">
      <div id="chart3" style="width:380px;height: 380px;"></div>
      <div id="chart4" style="width:380px;height: 380px;"></div>
      <div id="chart5" style="width:380px;height: 380px;"></div>
    </div>
    <div id="content" style="background-color:#333;width: 600px;display: flex;flex-direction:column;justify-content: center;">
      <div id="chart1" style="width:600px;height: 600px;"></div>
      <div style="height:250px"></div>
    </div>
    <div style="width:380px">
      <div id="chart12" style="width:460px;height: 380px;"></div>
      <div id="chart14" style="width:460px;height: 380px;"></div>
      <div id="chart16" style="width:460px;height: 380px;"></div>
    </div>
  </div>
</template>
<script>
  const echarts = require('echarts')
  const hebjson = require('~/assets/geo/heb.json')
  echarts.registerMap('herb',hebjson)
  function showChart1(){
      let myChart1 = echarts.init(document.getElementById('chart1'),'dark')
      var option1 = {
          title: {
              text: '哈尔滨市人口分布(2016)',
              left:'center'
          },
          tooltip: {
              trigger: 'item',
              formatter: '{b}<br/>{c}'
          },
          visualMap:{
              left: 'right',
              min:16000,
              max:1010000,
              text:['高','低'],
              realtime: true,
              calculable: true,
//              inRange: {
//                  color: ['lightskyblue','yellow', 'orangered']
//              }
          },
          series: [{
              type: 'map',
              name:'',
              mapType: 'herb', // 自定义扩展图表类型
              itemStyle:{
                  normal:{label:{show:true}},
                  emphasis:{label:{show:true}}
              },
              data:[
                  {name: '南岗区', value: 1011116},
                  {name: '道里区', value: 732411},
                  {name: '道外区', value: 674629},
                  {name: '松北区', value: 198645},
                  {name: '香坊区', value: 745756},
                  {name: '平房区', value: 161207},
                  {name: '呼兰区', value: 617603},
                  {name: '阿城区', value: 559205},
                  {name: '双城区', value: 786621}
              ],
          }]
      }

      myChart1.setOption(option1)
  }
  function showChart3() {

      let myChart = echarts.init(document.getElementById('chart3'),'dark')
      var colors = ['#5793f3', '#d14a61'];

      let option = {
          color :colors,
          title: {
              text: '2015年双城区人口自然增长情况',
          },
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross'
              }
          },
          legend: {
              data:['年平均人口','出生率','死亡率','自然增长率'],
              left:'left',
              top:'bottom'

          },
          xAxis: [
              {
                  type: 'category',
                  axisTick: {
                      alignWithLabel: true
                  },
                  data: [2010,2011,2012,2013,2014,2015]
              }
          ],
          yAxis: [
              {
                  type: 'value',
                  name: '平均人口',
                  min: 700000,
                  max: 980000,
                  position: 'right',
                  axisLine: {
                      lineStyle: {
                          color: colors[0]
                      }
                  },
                  axisLabel: {
                      formatter: '{value} '
                  }
              },

              {
                  type: 'value',
                  name: '',
                  min: -15,
                  max: 12,
                  position: 'left',
                  axisLine: {
                      lineStyle: {
                          color: colors[1]
                      }
                  },
                  axisLabel: {
                      formatter: '{value} ‰'
                  }
              }
          ],
          series: [
              {
                  name:'年平均人口',
                  type:'bar',
                  barWidth:32,
                  itemStyle: {
                      normal: {color: '#d14a61'}
                  },
                  data:[824049,824443,821513,814384 ,797452 ,786621 ]
              },
              {
                  name:'出生率',
                  type:'line',
                  yAxisIndex: 1,
                  itemStyle: {
                      normal: {color: '#675bba'}
                  },
                  data:[9.23,9.42,8.07 ,7.70 ,5.85 ,5.90 ]
              },
              {
                  name:'死亡率',
                  type:'line',
                  yAxisIndex: 1,
                  data:[3.68,11.02,5.77 ,7.55 ,4.38 ,4.40  ]
              },
              {
                  name:'自然增长率',
                  type:'line',
                  yAxisIndex: 1,
                  data:[5.55,-1.60 ,2.30 ,0.15 ,1.47 ,1.50   ]
              }
          ]
      };
      myChart.setOption(option)

  }
  function showChart4(){
      let myChart = echarts.init(document.getElementById('chart4'),'dark')
      let option = {
          tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
          },

          title: {
              text: '2015年双城区人口性别构成情况'
          },
          legend: {
              data: ['男', '女'],
              top:30,
              left:'right'
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis:  {
              type: 'value'
          },
          yAxis: {
              type: 'category',
              data: [2010,2011,2012,2013,2014,2015]
          },
          series: [
              {
                  name: '男',
                  type: 'bar',
                  stack: '总量',
                  label: {
                      normal: {
                          show: true,
                          position: 'insideRight'
                      }
                  },
                  data: [419897,417478,416341,410613,400876,400876]
              },
              {
                  name: '女',
                  type: 'bar',
                  stack: '总量',
                  label: {
                      normal: {
                          show: true,
                          position: 'insideRight'
                      }
                  },
                  data: [406446,405064,404143,397670,385745,385745]
              }
          ]
      };
      myChart.setOption(option)
  }
  function showChart5(){
      let myChart = echarts.init(document.getElementById('chart5'),'dark')
      let option = {
          tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
          },

          title: {
              text: '周家、双城、新兴人口年龄构成'
          },
          legend: {
              data: ['0-14岁', '15-64岁','65岁及以上'],
              top:30,
              left:'right'
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis:  {
              type: 'value'
          },
          yAxis: {
              type: 'category',
              data: ['双城','周家','新兴']
          },
          series: [
              {
                  name: '0-14岁',
                  type: 'bar',
                  stack: '总量',
                  label: {
                      normal: {
                          show: true,
                          position: 'insideRight'
                      }
                  },
                  data: [5045,4264,2844]
              },
              {
                  name: '15-64岁',
                  type: 'bar',
                  stack: '总量',
                  label: {
                      normal: {
                          show: true,
                          position: 'insideRight'
                      }
                  },
                  data: [33103,27335,17210]
              },
              {
                  name: '65岁及以上',
                  type: 'bar',
                  stack: '总量',
                  label: {
                      normal: {
                          show: true,
                          position: 'insideRight'
                      }
                  },
                  data: [2553,2197,1382]
              }
          ]
      };
      myChart.setOption(option)
  }

  function showChart12() {

      let myChart = echarts.init(document.getElementById('chart12'),'dark')
      let option = {
          title: {
              text: '2015年哈尔滨市各区生产总值情况',
          },
          tooltip: {

          },
          legend: {
              data: ['第一产业', '第二产业','第三产业'],
              top:30,
              left:'right'
          },
          grid: {

              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      type: 'shadow',

                  }
              }
          },
          xAxis: {
              name:'万元',
              type: 'value',
              boundaryGap: [0, 0.01]
          },
          yAxis: {

              type: 'category',
              data: ['道里区','道外区','南岗区','香坊区','平房区','松北区','呼兰区','阿城区','双城区']
          },
          series: [
              {
                  name: '第一产业',
                  type: 'bar',
                  data: [19,9,1 ,6 ,10365, 72119 ,662889 ,372028 ,1435158 ]
              },
              {
                  name: '第二产业',
                  type: 'bar',
                  data: [1717579 ,1309312 ,3059595 ,3359697 ,923192 ,1188675 ,1303007 ,749229 ,1278243 ]
              },
              {
                  name: '第三产业',
                  type: 'bar',
                  data: [4189111 ,2908784 ,7077782 ,2631884 ,455444 ,605892 ,1286606 ,1791520 ,2552799 ]
              },
              {
                  name: '生产总值(亿元)',
                  type: 'pie',
                  center: ['80%', '50%'],
                  radius: '28%',
                  data: [
                      {name: '道里区', value: 609,tooltip:{}},
                      {name: '道外区', value: 431},
                      {name: '南岗区', value: 1015 },
                      {name: '香坊区', value: 605 },
                      {name: '平房区', value: 139 },
                      {name: '松北区', value: 187 },
                      {name: '呼兰区', value: 325 },
                      {name: '阿城区', value: 291 },
                      {name: '双城区', value: 527 }
                  ],
                  tooltip:{},
                  z: 100
              }
          ]
      };
      myChart.setOption(option)

  }
  function showChart14() {

      let myChart = echarts.init(document.getElementById('chart14'),'dark')
      let option = {
              angleAxis: {
                  type: 'category',
                  data: [2005,2009,2010,2011,2012,2013,2014,2015],
                  z: 10
              },
              title: {
                  text: '双城区产业结构 '
              },
              grid:{
                  top: 80,
                  bottom: 100,
                  right:"50%"
              },
              tooltip: {
                  trigger: 'item',
                  formatter: '{b}{a}<br/>{c}%'
              },
              radiusAxis: {
              },
              polar: {
              },
              series: [{
                  type: 'bar',
                  data: [28.5	,31.4	,29.3	,30.5	,29.6	,28.6	,12	,11.7],
                  coordinateSystem: 'polar',
                  name: '第一产业',
                  stack: 'a'
              }, {
                  type: 'bar',
                  data: [35.1	,32.3	,23.5	,23.6	,27.6	,26.4	,33.5	,32.4],
                  coordinateSystem: 'polar',
                  name: '第二产业',
                  stack: 'a'
              }, {
                  type: 'bar',
                  data: [36.4	,36.3	,47.2	,45.9	,42.9	,45	,54.5	,55.9],
                  coordinateSystem: 'polar',
                  name: '第三产业',
                  stack: 'a'
              }],
              legend: {
                  show: true,
                  data: ['第一产业', '第二产业', '第三产业'],
                  top:'bottom',
                  left:'right'
              }
          };
      myChart.setOption(option)

  }
  function showChart16() {

      let myChart = echarts.init(document.getElementById('chart16'),'dark')
      let option = {
          baseOption:{
              timeline:{
                  axisType: 'category',
                  autoPlay: true,
                  playInterval: 3000,
                  data: [
                      2012,2013,2014,2015
                  ]
              },
              title: {
                  text: '2012-2015年双城经济开发区各园区总产值统计',
              },
              tooltip: {

              },
              legend: {
                  data: [ '产值','税金','销售收入','利润'],
                  top:30,
                  left:'right'
              },
              grid: {

                  tooltip: {
                      trigger: 'axis',
                      axisPointer: {
                          type: 'shadow',

                      }
                  }
              },
              xAxis: {
                  name:'万元',
                  type: 'value',
                  boundaryGap: [0, 0.01]
              },
              yAxis: {

                  type: 'category',
                  data: ['双城食品园','新兴工业园','周家工业园']
              },
              series: [
                  {
                      name: '产值',
                      type: 'bar'
                  },
                  {
                      name: '税金',
                      type: 'bar'
                  },
                  {
                      name: '销售收入',
                      type: 'bar'
                  },
                  {
                      name: '利润',
                      type: 'bar'
                  }
              ]
          },
          options: [
              {
                  title: {text: '2012年双城经济开发区各园区总产值统计'},
                  series: [
                      {
                          data: [663677,865568,35511]
                      },
                      {
                          data: [64428 ,2574   ,768]
                      },
                      {
                          data: [598048 ,134990 ,121629]
                      },{
                          data: [74520,3896,772]
                      }
                  ]
              },{
                  title: {text: '2013年双城经济开发区各园区总产值统计'},
                  series: [
                      {
                          data: [1009995,739628,158272]
                      },
                      {
                          data: [80121 ,3778   ,2552]
                      },
                      {
                          data: [720387 ,613308 ,413316]
                      },{
                          data: [83542,14637,4154]
                      }
                  ]
              },{
                  title: {text: '2014年双城经济开发区各园区总产值统计'},
                  series: [
                      {
                          data: [1047433,893138,209825]
                      },
                      {
                          data: [63379,3989,1519]
                      },
                      {
                          data: [881000,671468,117628]
                      },{
                          data: [84971,-19925,3507]
                      }
                  ]
              },{
                  title: {text: '2015年双城经济开发区各园区总产值统计'},
                  series: [
                      {
                          data: [1001995,818546,235171]
                      },
                      {
                          data: [45808 ,4402   ,1406]
                      },
                      {
                          data: [734657 ,342866 ,140088 ]
                      },{
                          data: [58912,7105,7876]
                      }
                  ]
              }
          ]
      }
      myChart.setOption(option)

  }
  export default {
    name: 'input-analysis-page',
    mounted () {
        showChart1()
        showChart3()
        showChart4()
        showChart5()
        showChart12()
        showChart14()
        showChart16()
    },
  }
</script>
<style>
</style>