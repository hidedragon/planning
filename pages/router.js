// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  {
    path: '/main/planningManage',
    icon: 'ios-albums-outline',
    title: '决策管理',
    name: 'planningManage',
    children: [
      {
        path: '/main/planningManage/requirementCommit',
        title: '决策任务管理',
        name: 'planningManage-requirementCommit',
        icon: 'ios-add-circle-outline'
      },
      {
        path: '/main/planningManage/planningApprove',
        title: '决策任务审批',
        name: 'planningManage-planningApprove',
        icon: 'ios-people-outline'
      }
    ]
  },
  {
    path: '/exchangeCentre',
    icon: 'ios-chatboxes-outline',
    title: '交流中心',
    name: 'exchangeCentre',
    children: [
      {
        path: '/main/exchangeCentre/taskChat',
        title: '规划沟通中心',
        icon: 'ios-chatbubbles-outline',
        name: 'exchangeCentre-taskChat'
      },
      {
        path: '/main/exchangeCentre/chatTool',
        title: '聊天工具',
        icon: 'ios-people-outline',
        name: 'exchangeCentre-chatTool'
      }
    ]
  },
  {
    path: '/publicSentimentCentre',
    icon: 'ios-planet-outline',
    title: '信息中心',
    name: 'newsCentre',
    children: [
      {
        path: '/main/newsCentre/intelligentPush',
        title: '智能信息推送',
        name: 'newsCentre-intelligentPush',
        icon: 'ios-cloud-download-outline'
      },
      {
        path: '/main/newCentre/intelligentSearch',
        title: '智能信息搜索',
        name: 'newCentre-intelligentSearch',
        icon: 'ios-color-wand-outline'
      },
      {
        path: '/main/newCentre/dynamicCentre',
        title: '信息动态中心',
        name: 'newCentre-dynamicCentre',
        icon: 'md-globe'
      },
      {
        path: '/main/newCentre/pushConfig',
        title: '信息推送设置',
        name: 'newCentre-pushConfig',
        icon: 'ios-settings'
      }
    ]
  },
  {
    path: '/expertCentre',
    icon: 'ios-people-outline',
    title: '专家库',
    name: 'expertCentre',
    children: [
      {
        path: '/main/expertCentre/expertInformation',
        title: '专家信息',
        name: 'expertCentre-expertInformation',
        icon: 'ios-person-outline'
      }
    ]
  },
  {
      path: '/caseCentre',
      icon: 'ios-cube-outline',
      title: '案例库',
      name: 'caseCentre',
      children: [
          {
              path: '/main/caseCentre/caseDatabase',
              title: '案例库',
              name: 'caseCentre-caseDatabase',
              icon: 'ios-cube-outline'
          }
      ]
  }
]
