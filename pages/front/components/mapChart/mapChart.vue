<template>
    <div>
        <div id="chart-panel" class="map-chart"></div>
    </div>
</template>

<script>
  const echarts = require('echarts')
  const $ = require('jquery')

  const cityToPinyin = {
    '中国': 'zhongguo',
    '上海': 'shanghai',
    '河北': 'hebei',
    '内蒙古': 'neimenggu',
    '辽宁': 'liaoning',
    '吉林': 'jilin',
    '黑龙江': 'heilongjiang',
    '江苏': 'jiangsu',
    '浙江': 'zhejiang',
    '安徽': 'anhui',
    '福建': 'fujian',
    '江西': 'jiangxi',
    '山东': 'shandong',
    '山西': 'shanxi',
    '河南': 'henan',
    '湖北': 'hubei',
    '湖南': 'hunan',
    '广东': 'guangdong',
    '广西': 'guangxi',
    '海南': 'hainan',
    '四川': 'sichuan',
    '贵州': 'guizhou',
    '云南': 'yunnan',
    '西藏': 'xizang',
    '陕西': 'shanxi',
    '甘肃': 'gansu',
    '青海': 'qinghai',
    '宁夏': 'ningxia',
    '新疆': 'xinjiang',
    '北京': 'beijing',
    '天津': 'tianjin',
    '重庆': 'chongqing',
    '香港': 'xianggang',
    '澳门': 'aomen'
  }

  export default {
    name: 'Graph1',
    mounted () {
      echarts.extendsMap = function (id, opt) {
        var chart = this.init(document.getElementById(id))
        const datas = opt.data

        const weiboData = [{
          name: '弱',
          type: 'scatterGL',
          coordinateSystem: 'geo',
          symbolSize: 1,
          itemStyle: {
            shadowBlur: 2,
            shadowColor: 'rgba(37, 140, 249, 0.8)',
            color: 'rgba(37, 140, 249, 0.8)'
          },
          data: datas[0]
        }, {
          name: '中',
          type: 'scatterGL',
          coordinateSystem: 'geo',
          symbolSize: 1,
          itemStyle: {
            shadowBlur: 2,
            shadowColor: 'rgba(14, 241, 242, 0.8)',
            color: 'rgba(14, 241, 242, 0.8)'
          },
          data: datas[1]
        }, {
          name: '强',
          type: 'scatterGL',
          coordinateSystem: 'geo',
          symbolSize: 1,
          itemStyle: {
            shadowBlur: 2,
            shadowColor: 'rgba(255, 255, 255, 0.8)',
            color: 'rgba(255, 255, 255, 0.8)'
          },
          data: datas[2]
        }]

        let curGeoJson

        var defaultOpt = {
          activeArea: [] // 区域高亮,同echarts配置项
        }

        if (opt) opt = this.util.extend(defaultOpt, opt)

        // 层级索引
        var name = [opt.mapName]
        var idx = 0
        var pos = {
          leftPlus: 115,
          leftCur: 150,
          left: 198,
          top: 50
        }

        var line = [
          [0, 0],
          [8, 11],
          [0, 22]
        ]
        // style
        var style = {
          font: '18px "Microsoft YaHei", sans-serif',
          textColor: '#eee',
          lineColor: 'rgba(147, 235, 248, .8)'
        }

        var handleEvents = {
          /**
           * i 实例对象
           * o option
           * n 地图名
           **/
          resetOption: function (i, o, n) {
            var breadcrumb = this.createBreadcrumb(n)
            var j = name.indexOf(n)
            var l = o.graphic.length
            // console.log({j})
            if (j < 0) {
              o.graphic.push(breadcrumb)
              o.graphic[0].children[0].shape.x2 = 145
              o.graphic[0].children[1].shape.x2 = 145
              if (o.graphic.length === 4) {
                const size = 290
                o.graphic[0].children[0].shape.x2 = size
                o.graphic[0].children[1].shape.x2 = size
              }

              name.push(n)
              idx++
            } else {
              o.graphic.splice(j + 2, l)
              if (o.graphic.length <= 2) {
                o.graphic[0].children[0].shape.x2 = 60
                o.graphic[0].children[1].shape.x2 = 60
              }
              if (o.graphic.length === 3) {
                o.graphic[0].children[0].shape.x2 = 145
                o.graphic[0].children[1].shape.x2 = 145
              }
              name.splice(j + 1, l)
              idx = j
              pos.leftCur -= pos.leftPlus * (l - j - 1)
            }

            // o.series[0].data = weiboData

            o.geo.map = n
            o.geo.zoom = 0.4
            i.clear()
            // console.log({option: o})
            i.setOption(o)
            this.zoomAnimation()
            opt.callback(n, o, i)
          },

          /**
           * name 地图名
           **/
          createBreadcrumb: function (name) {
            var breadcrumb = {
              type: 'group',
              id: name,
              left: pos.leftCur + pos.leftPlus,
              top: pos.top + 3,
              children: [{
                type: 'polyline',
                left: -90,
                top: -5,
                shape: {
                  points: line
                },
                style: {
                  stroke: '#fff',
                  key: name
                  // lineWidth: 2,
                },
                onclick: function () {
                  var name = this.style.key
                  handleEvents.resetOption(chart, option, name)
                }
              }, {
                type: 'text',
                left: -68,
                // top: 'middle',
                style: {
                  text: name,
                  textAlign: 'center',
                  fill: style.textColor,
                  font: style.font
                },
                onclick: function () {
                  var name = this.style.text
                  handleEvents.resetOption(chart, option, name)
                }
              }
              ]
            }

            pos.leftCur += pos.leftPlus

            return breadcrumb
          },

          // 设置effectscatter
          initSeriesData: function (data) {
            var temp = []

            return temp
          },
          zoomAnimation: function () {
            var count = null
            var zoom = function (per) {
              if (!count) count = per
              count = count + per
              // console.log(per,count);
              chart.setOption({
                geo: {
                  zoom: count
                }
              })
              if (count < 1) {
                window.requestAnimationFrame(function () {
                  zoom(0.2)
                })
              }
            }
            window.requestAnimationFrame(function () {
              zoom(0.2)
            })
          }
        }

        var option = {
          backgroundColor: opt.bgColor,
          tooltip: {
          },
          graphic: [{
            type: 'group',
            left: pos.left,
            top: pos.top - 4,
            children: [{
              type: 'line',
              left: 0,
              top: -20,
              shape: {
                x1: 0,
                y1: 0,
                x2: 60,
                y2: 0
              },
              style: {
                stroke: style.lineColor
              }
            }, {
              type: 'line',
              left: 0,
              top: 20,
              shape: {
                x1: 0,
                y1: 0,
                x2: 60,
                y2: 0
              },
              style: {
                stroke: style.lineColor
              }
            }]
          },
          {
            id: name[idx],
            type: 'group',
            left: pos.left + 2,
            top: pos.top,
            children: [{
              type: 'polyline',
              left: 90,
              top: -12,
              shape: {
                points: line
              },
              style: {
                stroke: 'transparent',
                key: name[0]
              },
              onclick: function () {
                var name = this.style.key
                handleEvents.resetOption(chart, option, name)
              }
            }, {
              type: 'text',
              left: 0,
              top: -3,
              style: {
                text: '中国',
                textAlign: 'center',
                fill: style.textColor,
                font: style.font
              },
              onclick: function () {
                handleEvents.resetOption(chart, option, '中国')
              }
            }
            ]
          }],
          legend: {
            left: 'left',
            data: ['强', '中', '弱'],
            textStyle: {
              color: '#ccc'
            }
          },
          geo: {
            map: opt.mapName,
            roam: true,
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#fff'
                }
              },
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                areaColor: '#323c48',
                borderColor: '#111'
              },
              emphasis: {
                areaColor: '#2a333d'
              }
            }
          },
          series: weiboData
        }

        chart.setOption(option)
        // 添加事件
        chart.on('click', (params) => {
          if (opt.goDown && params.name !== name[idx]) {
            const {name: clickName} = params
            const {length} = name
            if (length === 2) {
              const pinyin = cityToPinyin[name[1]]
              if (pinyin) {
                let url = `/map/json/province/${pinyin}.json`
                $.get(url, (response) => {
                  const city = response.features.find(ele => {
                    return ele.properties.name === clickName
                  })
                  // console.log({city})
                  if (city) {
                    const {id} = city
                    url = `/map/json/city/${id}.json`
                    $.get(url, (response) => {
                      curGeoJson = response
                      // console.log(curGeoJson)
                      echarts.registerMap(clickName, response)
                      handleEvents.resetOption(chart, option, clickName)
                    })
                  }
                })
              }
            } else {
              const pinyin = cityToPinyin[clickName]
              if (pinyin) {
                const url = `/map/json/province/${pinyin}.json`
                $.get(url, (response) => {
                  curGeoJson = response
                  echarts.registerMap(clickName, response)
                  handleEvents.resetOption(chart, option, clickName)
                })
              }
            }
          }
        })

        return chart
      }
      const geoJson = require('echarts/map/json/china.json')
      echarts.registerMap('中国', geoJson)
      let url = '/map/datas.json'
      let datas = require('../../../../static/map/datas.json')
      datas = datas.map(function (serieData) {
        var px = serieData[0] / 1000
        var py = serieData[1] / 1000
        var res = [[px, py]]

        for (var i = 2; i < serieData.length; i += 2) {
          var dx = serieData[i] / 1000
          var dy = serieData[i + 1] / 1000
          var x = px + dx
          var y = py + dy
          res.push([x.toFixed(2), y.toFixed(2), 1])

          px = x
          py = y
        }
        return res
      })
      // console.log(datas)
      echarts.extendsMap('chart-panel', {
        bgColor: '#000', // 画布背景色
        mapName: '中国', // 地图名
        text: '火电业务',
        goDown: true, // 是否下钻
        callback: function (name, option, instance) {
          console.log(name)
        },
        // 数据展示
        data: datas
      })
    }
  }
</script>

<style scoped>
    .map-chart {
        width:100%;
        height: 800px;
    }
</style>
