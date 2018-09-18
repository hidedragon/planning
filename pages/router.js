// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  {
    path: '/main/planningManage',
    icon: 'ios-albums-outline',
    title: '规划管理',
    name: 'planningManage',
    children: [
      {
        path: '/main/planningManage/requirementCommit',
        title: '规划任务管理',
        name: 'planningManage-requirementCommit',
        icon: 'ios-add-circle-outline'
      },
      {
        path: '/main/planningManage/planningApprove',
        title: '规划任务审批',
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
    title: '舆情中心',
    name: 'newsCentre',
    children: [
      {
        path: '/main/newsCentre/intelligentPush',
        title: '智能舆情推送',
        name: 'newsCentre-intelligentPush',
        icon: 'ios-cloud-download-outline'
      },
      {
        path: '/main/newCentre/intelligentSearch',
        title: '智能舆情搜索',
        name: 'newCentre-intelligentSearch',
        icon: 'ios-color-wand-outline'
      },
      {
        path: '/main/newCentre/dynamicCentre',
        title: '舆情动态中心',
        name: 'newCentre-dynamicCentre',
        icon: 'md-globe'
      },
      {
        path: '/main/newCentre/pushConfig',
        title: '舆情推送设置',
        name: 'newCentre-pushConfig',
        icon: 'ios-settings'
      }
    ]
  }
]
