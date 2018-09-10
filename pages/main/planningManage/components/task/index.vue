<template>
  <div>
    <Modal :title="title" v-model="isShowV" :mask-closable="false" width="90%" height="90%">
      <h4 slot="header">{{title}}</h4>
      <a class="ivu-modal-close" @click="closed"><i class="ivu-icon ivu-icon-ios-close-empty"></i></a>
      <div style="width: 150px;display: inline-block;">
        <Steps :current="0" size="small" direction="vertical">
          <Step title="任务需求提交"></Step>
          <Step title="需求智能解析"></Step>
          <Step title="需求确认"></Step>
          <Step title="智能设计"></Step>
          <Step title="设计评审"></Step>
          <Step title="专家审批"></Step>
          <Step title="生成报告"></Step>
        </Steps>
      </div>
      <div style="width: calc(100% - 180px);display: inline-block;height: auto;vertical-align: top;">
        <div style="margin-top: 0px;">
          <div style="width: 400px;display: inline-block;float: left;margin-bottom: 10px;">
            <span style="color: red;display:inline-block;width: 60px;text-align: right;">*名称：</span>
            <Input style="width:300px;" v-model="taskInfo.name"/>
          </div>
          <div style="width: calc(100% - 400px);display: inline-block;float: left;margin-bottom: 10px;">
            <span style="display: inline-block;width: 120px;text-align: right;">类型：</span>
            <Select v-model="taskInfo.type" style="width:200px">
              <Option v-for="item in taskTypes" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>
          <div style="padding-left: 5px;margin-bottom: 10px;">
            <div style="display: inline-block;margin-left: 15px;">
              <Button type="primary">需求智能解析</Button>
            </div>
            <div style="display: inline-block;margin-left: 15px;">
              <Button type="success">智能设计</Button>
            </div>
            <div style="display: inline-block;margin-left: 15px;">
              <Button>
                <Icon type="md-person" size="14"/>联系客服
              </Button>
            </div>
          </div>
          <div  style="padding-left: 20px;padding-right: 20px;">
            <div style="width: 50%;">
              <Upload
                      type="drag"
                      action="/api/tasks/upload">
                <div style="padding: 20px 0">
                  <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                  <p>基础资料上传(点击选择文件或拖拽至此处)</p>
                </div>
              </Upload>
            </div>
            <div style="width: 50%;">

            </div>
          </div>
          <div style="padding-left:20px;height: auto;">
            <Collapse value="1">
              <Panel name="1">
                需求智能解析结果
                <div slot="content">
                  <Tabs size="small">
                    <TabPane label="文件一">
                      <input-analysis-page></input-analysis-page>
                    </TabPane>
                    <TabPane label="文件二">文件二解析内容</TabPane>
                    <TabPane label="文件三">标签三的内容</TabPane>
                  </Tabs>
                </div>
              </Panel>
            </Collapse>
            <Collapse value="1" style="margin-top: 5px;">
              <Panel name="1">
                智能设计结果
                <div slot="content">
                  <Tabs size="small">
                    <TabPane label="文件一">
                      <output-analysis-page></output-analysis-page>
                    </TabPane>
                    <TabPane label="文件二">标签二的内容</TabPane>
                    <TabPane label="文件三">标签三的内容</TabPane>
                  </Tabs>
                </div>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
      <div slot="footer">
        <Button style="" @click="closed">关闭</Button>
        <Button style="" type="primary">保存</Button>
        <Button style="" type="primary">保存并提交</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
  import inputAnalysisPage from '~/components/analysis/inputAnalysisPage'
  import outputAnalysisPage from '~/components/analysis/outputAnalysisPage'

  export default {
    name: 'task-modal',
    components: {
      inputAnalysisPage,
      outputAnalysisPage
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      actions: {
        type: Array,
        default: function () {
          return []
        }
      },
      taskInfo: {
        type: Object,
        default: function () {
          return {}
        }
      },
      isShow: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      isShow: function (newVal) {
        this.isShowV = newVal
      }
    },
    data () {
      return {
        isShowV: false,
        taskTypes: [
          {
            value: '1',
            label: '防洪排涝规划'
          },
          {
            value: '2',
            label: '产业发展研究'
          },
          {
            value: '3',
            label: '交通可达性论证'
          }
        ]
      }
    },
    methods: {
      closed: function () {
        this.$emit('closed')
      }
    }
  }
</script>
<style>
  .form-row {
    width: 100%;
    margin-bottom: 10px;
  }
  .form-row span {
    display: inline-block;
    width: 120px;
    text-align: right;
  }
  .form-row input {
    height: 30px;
  }
  .form-row-text {
    width: 100%;
    margin-bottom: 10px;
  }
  .form-row-text span {
    display: inline-block;
    width: 120px;
    text-align: right;
  }
</style>
