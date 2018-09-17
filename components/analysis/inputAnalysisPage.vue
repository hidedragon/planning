<template>
  <div id="body" style="background-color:#666;width:100%;text-align: center;display: flex;justify-content: center;color: #ffffff;">
    <div id="content" style="background-color:#333;width: 740px;padding: 20px 20px">
      <div id="chart1" style="width:700px;height: 400px;"></div>
      <div id="chart2" style="width:700px;height: 600px;"></div>
      <div id="chart3" style="width:700px;height: 400px;"></div>
      <div id="chart4" style="width:700px;height: 400px;"></div>
      <div id="chart5" style="width:700px;height: 400px;"></div>
      <div id="chart6" style="width:700px;height: 500px;"></div>
      <div id="chart7" style="width:700px;height: 500px;"></div>
      <div id="chart8" style="width:700px;height: 500px;"></div>
      <div id="chart9" style="width:700px;height: 400px;"></div>
      <div id="chart10" style="width:700px;height: 400px;"></div>
      <!--2011-2015年双城区非公有制经济增加值（单位：万元）-->
      <div id="chart11" style="width:700px;height: 500px;"></div>
      <div id="chart12" style="width:700px;height: 500px;"></div>
      <div id="chart13" style="width:700px;height: 500px;"></div>
      <div id="chart14" style="width:700px;height: 500px;"></div>
      <div id="chart15" style="width:700px;height: 500px;"></div>
      <div id="chart16" style="width:700px;height: 500px;"></div>
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
              text: '哈尔滨市人口分布(2016)'
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
  function showChart2(){
      let myChart = echarts.init(document.getElementById('chart2'),'dark')
      var seriesLabel = {
          normal: {
              show: true,
              textBorderColor: '#333',
              textBorderWidth: 2
          }
      }
      let option = {
          title: {
              text: '2015年哈尔滨市各区人口机械变动情况'
          },
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'shadow'
              }
          },
          legend: {
              data: ['迁入', '迁出', '变动'],
              left: 'right',
              //top:'bottom'
          },


          xAxis: {
              type: 'value',
              name: '人',
              axisLabel: {
                  formatter: '{value}'
              }
          },
          yAxis: {
              type: 'category',
              inverse: true,
              data: ['南岗区', '道里区', '道外区',"松北区", "香坊区", "平房区", "呼兰区", "阿城区", "双城区"]

          },
          series: [
              {
                  name: '迁入',
                  type: 'bar',
                  data: [14898,7046,9086,3367,8075,1216,5393,1902,3432],
                  label: seriesLabel
              },
              {
                  name: '迁出',
                  type: 'bar',
                  label: seriesLabel,
                  data: [-17747,-4928,-10528,-2644,-8383,-877,-13175,-9186,-25673]
              },
              {
                  name: '变动',
                  type: 'bar',
                  label: seriesLabel,
                  data: [-2849,2118,-1442,723 ,-308,339,-7782 ,-7284 ,-22241]
              }
          ]
      };


      myChart.setOption(option)
  }
  function showChart3() {

      let myChart = echarts.init(document.getElementById('chart3'),'dark')
      var colors = ['#5793f3', '#d14a61'];

      let option = {
          color :colors,
          title: {
              text: '2015年双城区人口自然增长情况'
          },
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross'
              }
          },
          legend: {
              data:['年平均人口','出生率','死亡率','自然增长率'],
              left: 'right',
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
              left: 'right'
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
              left: 'right'
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
  function showChart6(){
      let myChart = echarts.init(document.getElementById('chart6'),'dark')
      let option = {
        baseOption:{
            timeline:{
                axisType: 'category',
                autoPlay: true,
                playInterval: 3000,
                data: [
                    2010,2011,2012,2013,2014
                ]
            },
            legend: {
                x: 'right',
                data: ['男', '女']
            },
            tooltip: {
            },
            calculable : true,
            grid: {
                top: 80,
                bottom: 100,
                right:"50%",
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                        label: {
                            show: true,
                            formatter: function (params) {
                                return params.value.replace('\n', '');
                            }
                        }
                    }
                }
            },
            xAxis: [
                {
                    'type':'category',
                    'axisLabel':{'interval':0},
                    'data':[
                        '双城镇'
                    ],
                    splitLine: {show: false}
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '人'
                }
            ],
            series: [
                {name: '男', type: 'bar',barWidth:32},
                {name: '女', type: 'bar',barWidth:32},

                {
                    name: '性别占比',
                    type: 'pie',
                    center: ['70%', '50%'],
                    radius: '28%',
                    z: 100
                }
            ]
        },
          options: [
              {
                  title: {text: '2010双城镇人口性别构成'},
                  series: [

                      {data: [93121,16036,11359]},
                      {data: [93234,16098,11116]},

                      {data: [
                          {name: '男', value: 49.97},
                          {name: '女', value: 50.03 }
                      ]}
                  ]
              },
              {
                  title : {text: '2011双城镇人口性别构成'},
                  series : [
                      {data: [92633,15846,11258]},
                      {data: [93039,15986,11066]},

                      {data: [
                          {name: '男', value: 49.89},
                          {name: '女', value: 50.11}
                      ]}
                  ]
              },
              {
                  title : {text: '2012双城镇人口性别构成'},
                  series : [
                      {data: [91879 ,15709,11184]},
                      {data: [92491,15892,10960]},

                      {data: [
                          {name: '男', value: 49.83},
                          {name: '女', value: 50.17}
                      ]}
                  ]
              },
              {
                  title : {text: '2013双城镇人口性别构成'},
                  series : [
                      {data: [410613 ,15652,11176]},
                      {data: [397670,15843,10878]},

                      {data: [
                          {name: '男', value: 50.80},
                          {name: '女', value: 49.20  }
                      ]}
                  ]
              }
              ,
              {
                  title : {text: '2014双城镇人口性别构成'},
                  series : [
                      {data: [400876 ,14884,11140]},
                      {data: [385745,15054,10823]},

                      {data: [
                          {name: '男', value: 50.96},
                          {name: '女', value: 49.04}
                      ]}
                  ]
              }
              ]
      }
      myChart.setOption(option)
  }
  function showChart7(){
      let myChart = echarts.init(document.getElementById('chart7'),'dark')
      let option = {
          baseOption:{
              timeline:{
                  axisType: 'category',
                  autoPlay: true,
                  playInterval: 3000,
                  data: [
                      2010,2011,2012,2013,2014
                  ]
              },
              legend: {
                  x: 'right',
                  data: ['男', '女']
              },
              tooltip: {
              },
              calculable : true,
              grid: {
                  top: 80,
                  bottom: 100,
                  left:"50%",
                  tooltip: {
                      trigger: 'axis',
                      axisPointer: {
                          type: 'shadow',
                          label: {
                              show: true,
                              formatter: function (params) {
                                  return params.value.replace('\n', '');
                              }
                          }
                      }
                  }
              },
              xAxis: [
                  {
                      'type':'category',
                      'axisLabel':{'interval':0},
                      'data':[
                          '周家镇'
                      ],
                      splitLine: {show: false}
                  }
              ],
              yAxis: [
                  {
                      type: 'value',
                      name: '人'
                  }
              ],
              series: [
                  {name: '男', type: 'bar',barWidth:32},
                  {name: '女', type: 'bar',barWidth:32},

                  {
                      name: '性别占比',
                      type: 'pie',
                      center: ['25%', '50%'],
                      radius: '28%',
                      z: 100
                  }
              ]
          },
          options: [
              {
                  title: {text: '2010周家镇人口性别构成'},
                  series: [

                      {data: [16036,11359]},
                      {data: [16098,11116]},

                      {data: [
                          {name: '男', value: 49.90 },
                          {name: '女', value: 50.10 }
                      ]}
                  ]
              },
              {
                  title : {text: '2011周家镇人口性别构成'},
                  series : [
                      {data: [15846,11258]},
                      {data: [15986,11066]},

                      {data: [
                          {name: '男', value: 49.78},
                          {name: '女', value: 50.22}
                      ]}
                  ]
              },
              {
                  title : {text: '2012周家镇人口性别构成'},
                  series : [
                      {data: [15709,11184]},
                      {data: [15892,10960]},

                      {data: [
                          {name: '男', value: 49.71},
                          {name: '女', value: 50.29}
                      ]}
                  ]
              },
              {
                  title : {text: '2013周家镇人口性别构成'},
                  series : [
                      {data: [15652,11176]},
                      {data: [15843,10878]},

                      {data: [
                          {name: '男', value: 49.70},
                          {name: '女', value: 50.30  }
                      ]}
                  ]
              }
              ,
              {
                  title : {text: '2014周家镇人口性别构成'},
                  series : [
                      {data: [14884,11140]},
                      {data: [15054,10823]},

                      {data: [
                          {name: '男', value: 49.72},
                          {name: '女', value: 50.28}
                      ]}
                  ]
              }
          ]
      }
      myChart.setOption(option)
  }
  function showChart8(){
      let myChart = echarts.init(document.getElementById('chart8'),'dark')
      let option = {
          baseOption:{
              timeline:{
                  axisType: 'category',
                  autoPlay: true,
                  playInterval: 3000,
                  data: [
                      2010,2011,2012,2013,2014
                  ]
              },
              legend: {
                  x: 'right',
                  data: ['男', '女']
              },
              tooltip: {
              },
              calculable : true,
              grid: {
                  top: 80,
                  bottom: 100,
                  right:"50%",
                  tooltip: {
                      trigger: 'axis',
                      axisPointer: {
                          type: 'shadow',
                          label: {
                              show: true,
                              formatter: function (params) {
                                  return params.value.replace('\n', '');
                              }
                          }
                      }
                  }
              },
              xAxis: [
                  {
                      'type':'category',
                      'axisLabel':{'interval':0},
                      'data':[
                          '新兴镇'
                      ],
                      splitLine: {show: false}
                  }
              ],
              yAxis: [
                  {
                      type: 'value',
                      name: '人'
                  }
              ],
              series: [
                  {name: '男', type: 'bar',barWidth:32},
                  {name: '女', type: 'bar',barWidth:32},

                  {
                      name: '性别占比',
                      type: 'pie',
                      center: ['70%', '50%'],
                      radius: '28%',
                      z: 100
                  }
              ]
          },
          options: [
              {
                  title: {text: '2010新兴镇人口性别构成'},
                  series: [

                      {data: [11359]},
                      {data: [11116]},

                      {data: [
                          {name: '男', value: 50.54},
                          {name: '女', value: 49.46 }
                      ]}
                  ]
              },
              {
                  title : {text: '2011新兴镇人口性别构成'},
                  series : [
                      {data: [11258]},
                      {data: [11066]},

                      {data: [
                          {name: '男', value: 50.43},
                          {name: '女', value: 49.57}
                      ]}
                  ]
              },
              {
                  title : {text: '2012新兴镇人口性别构成'},
                  series : [
                      {data: [11184]},
                      {data: [10960]},

                      {data: [
                          {name: '男', value: 50.51  },
                          {name: '女', value: 49.49}
                      ]}
                  ]
              },
              {
                  title : {text: '2013新兴镇人口性别构成'},
                  series : [
                      {data: [11176]},
                      {data: [10878]},

                      {data: [
                          {name: '男', value: 50.68},
                          {name: '女', value: 49.32  }
                      ]}
                  ]
              }
              ,
              {
                  title : {text: '2014新兴镇人口性别构成'},
                  series : [
                      {data: [11140]},
                      {data: [10823]},

                      {data: [
                          {name: '男', value: 50.72},
                          {name: '女', value: 49.28}
                      ]}
                  ]
              }
          ]
      }
      myChart.setOption(option)
  }
  function showChart9(){
      let myChart = echarts.init(document.getElementById('chart9'),'dark')
      let option = {
          title: {
              text: '2011-2016年双城区工业总产值'
          },
          tooltip:{

          },
          xAxis: {
              type: 'category',
              data: [2011,2012,2013,2014,2015,2016]
          },
          yAxis: {
              type: 'value',
              axisLabel: {
                  formatter: '{value} 亿元'
              }
          },
          series: [{
              data: [372.67,326.31,416.60,512.91,568.09,570.00],
              type: 'line'
          }]

  }
      myChart.setOption(option)
  }
  function showChart10() {

      let myChart = echarts.init(document.getElementById('chart10'),'dark')
      var colors = ['#5793f3', '#d14a61'];

      let option = {
          color :colors,
          title: {
              text: '2011-2015年双城区居民消费水平'
          },
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross'
              }
          },
          legend: {
              data:['可比价格居民消费水平','农村居民','城镇居民'],
              left: 'right',
          },
          xAxis: [
              {
                  type: 'category',
                  axisTick: {
                      alignWithLabel: true
                  },
                  data: [2011,2012,2013,2014,2015]
              }
          ],
          yAxis: [
              {
                  type: 'value',
                  name: '元/人',
                  position: 'left',
                  axisLabel: {
                      formatter: '{value}'
                  }
              }
          ],
          series: [

              {
                  name:'可比价格居民消费水平',
                  type:'line',
                  data:[9391,11086,12985,14714,16831 ]
              },
              {
                  name:'农村居民',
                  type:'line',
                  data:[7405,8821,10627,11782,13045]
              },
              {
                  name:'城镇居民',
                  type:'line',
                  data:[16225,18863,21099,24934,36564]
              }
          ]
      };
      myChart.setOption(option)

  }
  function showChart11() {

      let myChart = echarts.init(document.getElementById('chart11'),'dark')
      let option = {
          angleAxis: {
              type: 'category',
              data: [2011,2012,2013,2014,2015],
              z: 10
          },
          title: {
              text: '2011-2015年双城区非公有制经济增加值'
          },
          grid:{
              top: 80,
              bottom: 100,
              right:"50%"
          },
          tooltip:{

          },
          radiusAxis: {
              name:"万元"
          },
          polar: {
          },
          series: [{
              type: 'bar',
              data: [484085,505869,544821,586772,631348],
              coordinateSystem: 'polar',
              name: '第一产业'
          }, {
              type: 'bar',
              data: [593177,593177,878377,967647,1043931],
              coordinateSystem: 'polar',
              name: '第二产业'
          }, {
              type: 'bar',
              data: [969068,969068,1233974,1403349,1778020],
              coordinateSystem: 'polar',
              name: '第三产业'
          }],
          legend: {
              show: true,
              data: ['第一产业', '第二产业', '第三产业'],
              left:"right"
          }
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
              left:"right"
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
  function showChart13() {

      let myChart = echarts.init(document.getElementById('chart13'),'dark')
      let option = {
          title: {
              text: '2010-2015年哈尔滨市各区固定资产投资情况'
          },
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross'
              }
          },
          legend: {
              top:"20%",
              orient:"vertical",
              data: ['南岗区', '道里区', '道外区',"松北区", "香坊区", "平房区", "呼兰区", "阿城区", "双城区"],
              left: 'right',
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
                  name: '万元',
                  position: 'left',
                  axisLabel: {
                      formatter: '{value}'
                  }
              }
          ],
          series: [

              {
                  name:'道里区',
                  type:'line',
                  data:[2822803	,3091718	,4025417	,5163805	,4790287	, 5396702]
              },
              {
                  name:'道外区',
                  type:'line',
                  data:[1572348	,1702811	,2218763	,2979799	,2572560	,2759102]
              },
              {
                  name:'南岗区',
                  type:'line',
                  data:[3352463	,3234785	,4211690	,5601548	,5108491	,5423189]
              },
              {
                  name:'香坊区',
                  type:'line',
                  data:[3300940	,3491066	,4545368	,6221702	,5408483	,5909237]
              },
              {
                  name:'平房区',
                  type:'line',
                  data:[3009476	,3113725	,4228677	,3254655	,3409095	,4500000]
              },
              {
                  name:'松北区',
                  type:'line',
                  data:[1530057,1999014,	2608583	,3578853	,3236277	,3652558]
              },
              {
                  name:'呼兰区',
                  type:'line',
                  data:[1074043	,1200945	,1561229	,1982761	,1669403	,1980060]
              },
              {
                  name:'阿城区',
                  type:'line',
                  data:[1802503	,1961200	,2555444	,3431961	,2849196	,3164912]
              },
              {
                  name:'双城区',
                  type:'line',
                  data:[1133199	,1218378	,1589983	,2047898	,2341475	,2763571]
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
                  left:"right"
              }
          };
      myChart.setOption(option)

  }
  function showChart15(){
      let myChart = echarts.init(document.getElementById('chart15'),'dark')
      let option = {
          tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
          },

          title: {
              text: '2012-2015年双城经济开发区总产值统计'
          },
          legend: {
              data: [ '产值','税金','销售收入','利润'],
              left: 'right'
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          yAxis:  {
              name:'万元',
              type: 'value'
          },
          xAxis: {
              type: 'category',
              data: [2012,2013,2014,2015]
          },
          series: [
              {
                  name:'产值',
                  type:'line',
                  itemStyle: {
                      normal: {color: '#675bba'}
                  },
                  data: [1564756,1907895,2150396,2055712 ]
              },
              {
                  name: '税金',
                  type: 'bar',
                  stack: '总量',
                  label: {
                      normal: {
                          show: true,
                          position: 'insideRight'
                      }
                  },
                  data: [67771,86451,68888,51616]
              },
              {
                  name: '销售收入',
                  type: 'bar',
                  stack: '总量',
                  label: {
                      normal: {
                          show: true,
                          position: 'insideRight'
                      }
                  },
                  data: [854667,1747011,1670096,1217611 ]
              },
              {
                  name: '利润',
                  type: 'bar',
                  stack: '总量',
                  label: {
                      normal: {
                          show: true,
                          position: 'insideRight'
                      }
                  },
                  data: [79188,102333,68553,73893 ]
              }
          ]
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
                  left:"right"
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
        showChart2()
        showChart3()
        showChart4()
        showChart5()
        showChart6()
        showChart7()
        showChart8()
        showChart9()
        showChart10()
        showChart11()
        showChart12()
        showChart13()
        showChart14()
        showChart15()
        showChart16()
    },
  }
</script>
<style>
</style>