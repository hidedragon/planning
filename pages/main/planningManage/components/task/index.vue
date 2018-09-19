<template>
  <div>
    <Modal :title="title" v-model="isShowV" :mask-closable="false" width="90%" height="98%" :styles="{top: '20px'}">
      <h4 slot="header">{{title}}</h4>
      <div slot="close">
        <a @click="closed"><Icon type="ios-close" /></a>
      </div>
      <div style="width: 150px;display: inline-block;">
        <Steps :current="taskInfoS.flowState" size="small" direction="vertical">
          <Step title="新建"></Step>
          <Step title="任务需求提交"></Step>
          <Step title="需求智能解析"></Step>
          <Step title="需求确认"></Step>
          <Step title="智能设计"></Step>
          <Step title="设计结果提交"></Step>
          <Step title="专家审批"></Step>
          <Step title="生成报告"></Step>
        </Steps>
      </div>
      <div style="width: calc(100% - 180px);display: inline-block;height: 600px;vertical-align: top;overflow: auto;">
        <div style="margin-top: 0px;">
          <div style="width: 400px;display: inline-block;float: left;margin-bottom: 10px;">
            <span style="color: red;display:inline-block;width: 60px;text-align: right;">*名称：</span>
            <Input style="width:300px;" v-model="taskInfoS.name"/>
          </div>
          <div style="width: calc(100% - 400px);display: inline-block;float: left;margin-bottom: 10px;">
            <span style="display: inline-block;width: 120px;text-align: right;">类型：</span>
            <Select v-model="taskInfoS.type" style="width:200px">
              <Option v-for="item in taskTypes" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>
          <div style="padding-left: 5px;margin-bottom: 10px;">
            <div style="display: inline-block;margin-left: 15px;">
              <Button type="primary" @click="analysisInput" :disabled="disableAnalysisInputBtn">需求智能解析</Button>
            </div>
            <div style="display: inline-block;margin-left: 15px;">
              <Button type="success" @click="analysisOutput" :disabled="disableAnalysisOutputBtn">智能设计</Button>
            </div>
            <div style="display: inline-block;margin-left: 15px;">
              <Button type="info" @click="generateReport" :disabled="disableGenerateReportBtn">生成报告</Button>
            </div>
            <div style="display: inline-block;margin-left: 15px;">
              <Button @click="openChatWindow">
                <Icon type="md-person" size="14"/>联系客服
              </Button>
            </div>
          </div>
          <div v-if="taskInfoS.flowState<4 || !taskInfoS.flowState" style="padding-left: 20px;padding-right: 20px;">
            <div style="width: 50%;display: inline-block;">
              <Upload
                      type="drag"
                      action="/api/tasks/upload"
                      :on-success="uploadFileSuccess"
              >
                <div style="padding: 20px 0">
                  <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                  <p>基础资料上传(点击选择文件或拖拽至此处)</p>
                </div>
              </Upload>
            </div>
            <div style="width: 50%;display: inline-block;padding-left: 10px;vertical-align: top;">
              <div style="">
                <div v-for="item in uploadFileList">
                  <Tag type="border" closable color="primary">
                    <Icon type="logo-wordpress" size="18" style="margin-bottom: 3px;"/>
                    {{item.name}}
                  </Tag>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="taskInfoS.flowState===6" style="padding-left: 20px;padding-right: 20px;">
            <Card style="width:100%">
              <span style="display:inline-block;width: 120px;text-align: right;">专家评审意见：</span>
              <Input v-model="approverContent" style="width: calc(100% - 140px);" type="textarea"/>
              <br/><br/>
              <RadioGroup v-model="approverIsAgree" style="margin-left: 10px;">
                <Radio label="pass" size="large">
                  <Icon type="md-checkmark" color="green"></Icon>
                  <span>同意</span>
                </Radio>
                <Radio label="sendBack" size="large" style="margin-left: 20px;">
                  <Icon type="md-close" color="red"></Icon>
                  <span>退回</span>
                </Radio>
              </RadioGroup>
            </Card>
          </div>
          <div style="padding-left:20px;height: auto;">
            <Tabs :value="showResTab">
              <TabPane name="a" label="需求智能解析结果" icon="ios-stats">
                <Tabs size="small" v-show="showInputAnalysisRes">
                  <TabPane label="黑龙江双城经济开发区产业发展研究">
                    <div style="">
                      <input-analysis-page></input-analysis-page>
                    </div>
                  </TabPane>
                </Tabs>
              </TabPane>
              <TabPane name="b" label="智能设计结果" icon="ios-pulse">
                <Tabs size="small" v-show="showOutputAnalysisRes">
                  <TabPane label="黑龙江双城经济开发区产业发展研究">
                    <div>
                      <output-analysis-page></output-analysis-page>
                    </div>
                  </TabPane>
                </Tabs>
              </TabPane>
              <TabPane name="c" label="设计报告" icon="ios-print">
                <div>
                  <generate-report-page></generate-report-page>
                </div>
              </TabPane>
              <TabPane name="d" label="审批轨迹" icon="md-albums">
                <div>
                  <Card style="width:100%">
                    <span v-if="approverContent==='pass'">同意</span>
                    <span v-else>退回</span>
                    <span>:&emsp;{{approverContent}}</span>
                  </Card>
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
      <div slot="footer">
        <Button style="" @click="closed">关闭</Button>
        <template v-if="showBtn('save')">
          <Button style="" type="primary" @click="saveTaskInfo">保存</Button>
        </template>
        <template v-else-if="showBtn('saveAndCommit')">
          <Button style="" type="primary" @click="saveTaskInfo">保存并提交</Button>
        </template>
        <template v-else-if="showBtn('confirmInput')">
          <Button style="" type="primary" @click="confirmInput">需求确认</Button>
        </template>
      </div>
    </Modal>
  </div>
</template>
<script>
  import axios from '~/plugins/axios'
  import inputAnalysisPage from '~/components/analysis/inputAnalysisPage'
  import outputAnalysisPage from '~/components/analysis/outputAnalysisPage'
  import generateReportPage from '~/components/analysis/generateReportPage'
  import _ from 'lodash'

  export default {
    name: 'task-modal',
    components: {
      inputAnalysisPage,
      outputAnalysisPage,
      generateReportPage
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
        this.uploadFileList = []
      },
      taskInfo: function (newVal) {
        this.taskInfoS = _.cloneDeep(newVal)
      },
      taskInfoS: function (newVal) {
        this.taskInfoS.flowState = this.taskInfoS.flowState || 0
        this.taskInfoS.flowState = parseInt(this.taskInfoS.flowState)

        if(this.taskInfoS.flowState >= 3){
          this.showInputAnalysisRes = true
        }
        if(this.taskInfoS.flowState === 1){
          this.disableAnalysisInputBtn = false
        }
        if(this.taskInfoS.flowState === 4){
          this.disableAnalysisOutputBtn = false
        }
        if(this.taskInfoS.flowState === 7){
          this.disableGenerateReportBtn = false
        }
        if(this.taskInfoS.flowState > 4){
          this.showOutputAnalysisRes = true
        }
        if(this.taskInfoS.uploadFiles){
          for(let file of this.taskInfoS.uploadFiles){
            this.uploadFileList.push(file)
          }
        }
        //审批意见
        if(this.taskInfoS.approveResult && this.taskInfoS.approveResult.length>0){
          let approveRes = this.taskInfoS.approveResult[this.taskInfoS.approveResult.length-1]
          if(approveRes){
            this.approverIsAgree = approveRes.approverIsAgree
            this.approverContent = approveRes.approverContent
          }
        }
      }
    },
    data () {
      return {
        currentUser: {},
        isShowV: false,
        taskInfoS: {},
        designerApprove: '',
        showInputAnalysisRes: false,
        showOutputAnalysisRes: false,
        disableAnalysisInputBtn: true,
        disableAnalysisOutputBtn: true,
        disableGenerateReportBtn: true,
        uploadFileList: [],
        showResTab: 'a',
        approverContent: '',
        approverIsAgree: '',
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
      uploadFileSuccess: async function (response, file, fileList) {
        console.log('上传文件成功')
        //根据文件名生成name、type
        this.taskInfoS.name = '黑龙江双城经济开发区产业发展研究'
        this.taskInfoS.type = '2'
        this.uploadFileList.push(file)
        this.taskInfoS.uploadFiles = this.uploadFileList
        this.taskInfoS.flowState = 1
        this.disableAnalysisInputBtn = false
      },
      saveTaskInfo: async function () {
        let planningTask = {
          id: this.taskInfoS.id,
          name: this.taskInfoS.name,
          type: this.taskInfoS.type,
          uploadFiles: this.taskInfoS.uploadFiles,
          flowState: this.taskInfoS.flowState || 0
        }
        //如果是"设计结果提交"阶段提交则将流程转到"专家评审"
        if(this.taskInfoS.flowState === 5){
          planningTask.flowState = 6
        }
        //组装审批意见
        if(this.taskInfoS.flowState === 6){
          if(!this.taskInfoS.approveResult || !(this.taskInfoS.approveResult instanceof Array)){
            this.taskInfoS.approveResult = []
          }
          let ar = this.taskInfoS.approveResult
          ar.push(
            {
              approverIsAgree: this.approverIsAgree,
              approverContent: this.approverContent
            }
          )
          planningTask.approveResult = ar
        }
        //审批通过
        if(this.taskInfoS.flowState === 6 && this.approverIsAgree === 'pass'){
          planningTask.flowState = 7
        }
        //审批不通过
        if(this.taskInfoS.flowState ===6 && this.approverIsAgree === 'sendBack'){
          planningTask.flowState = 3
        }
        let res = await axios.post('/api/tasks/savePlanningTask', {planningTask: planningTask})
        // this.taskInfoS.id =
        this.$emit('closed')
      },
      closed: function () {
        this.$emit('closed')
      },
      analysisInput: function () {
        this.taskInfoS.flowState = 2
        this.$Spin.show({
          render: (h) => {
            return h('div', [
              h('Icon', {
                'class': 'demo-spin-icon-load',
                props: {
                  type: 'ios-loading',
                  size: 18
                }
              }),
              h('div', '智能解析中')
            ])
          }
        });
        setTimeout(() => {
          this.$Spin.hide()
          this.showInputAnalysisRes = true
          this.taskInfoS.flowState = 3
        }, 3000);
      },
      showBtn (btnTag) {
        let user = this.$store.state.user
        if(btnTag === 'save' && (this.taskInfoS.flowState===0 || !this.taskInfoS.flowState)){
          return true
        }
        if(btnTag === 'saveAndCommit' &&
          (this.taskInfoS.flowState===1 || this.taskInfoS.flowState===3
            || this.taskInfoS.flowState===5
            || this.taskInfoS.flowState===7
          )
          && user.role==='customer'){
          return true
        }
        if(btnTag === 'saveAndCommit' &&
          this.taskInfoS.flowState===6
          && user.role==='designer'){
          return true
        }
        //需求确认,设计者确认
        if(btnTag === 'confirmInput' && this.taskInfoS.flowState===3 && user && user.role==='designer'){
          return true
        }
        return false
      },
      openChatWindow () {
        window.open('http://wpa.qq.com/msgrd?v=3&uin=595676978&site=qq&menu=yes')
      },
      confirmInput: async function () {
        let planningTask = {
          id: this.taskInfoS.id,
          flowState: '4'
        }
        let res = await axios.post('/api/tasks/savePlanningTask', {planningTask: planningTask})
        console.log(res)
        this.disableAnalysisOutputBtn = true
        this.$emit('closed')
      },
      analysisOutput () {
        this.$Spin.show({
          render: (h) => {
            return h('div', [
              h('Icon', {
                'class': 'demo-spin-icon-load',
                props: {
                  type: 'ios-loading',
                  size: 18
                }
              }),
              h('div', '智能设计中')
            ])
          }
        });
        setTimeout(() => {
          this.$Spin.hide()
          this.taskInfoS.flowState = 5
          this.showResTab = 'b'
        }, 3000);
      },
      generateReport () {
        this.$Spin.show({
          render: (h) => {
            return h('div', [
              h('Icon', {
                'class': 'demo-spin-icon-load',
                props: {
                  type: 'ios-loading',
                  size: 18
                }
              }),
              h('div', '生成报告中')
            ])
          }
        });
        setTimeout(() => {
          this.$Spin.hide()
          this.showOutputAnalysisRes = true
          this.showResTab = 'c'
        }, 3000);
      }
    },
    mounted () {
      this.currentUser = this.$store.state.user
      this.uploadFileList = []
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
