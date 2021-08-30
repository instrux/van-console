export const resource: any[] = [
  // 仪表盘
  {
    parent: 'root',
    path: 'dashboard',
    name: '仪表盘',
    icon: 'dashboard'
  },
  {
    parent: 'dashboard',
    path: 'dashboard/analysis',
    name: '分析页',
    icon: ''
  },
  {
    parent: 'dashboard',
    path: 'dashboard/monitor',
    name: '监控页',
    icon: ''
  },
  {
    parent: 'dashboard',
    path: 'dashboard/workbench',
    name: '工作台',
    icon: ''
  },
  // 表单
  {
    parent: 'root',
    path: 'form',
    name: '表单页',
    icon: 'form'
  },
  {
    parent: 'form',
    path: 'basic',
    name: '基础表单',
    icon: ''
  },
  {
    parent: 'form',
    path: 'step',
    name: '分步表单',
    icon: ''
  },
  {
    parent: 'form',
    path: 'advanced',
    name: '高级表单',
    icon: ''
  },
  // 列表页
  {
    parent: 'root',
    path: 'list',
    name: '列表页',
    icon: 'table'
  },
  {
    parent: 'list',
    path: 'table',
    name: '查询表格',
    icon: ''
  },
  {
    parent: 'list',
    path: 'basic',
    name: '标准列表',
    icon: ''
  },
  {
    parent: 'list',
    path: 'card',
    name: '卡片列表',
    icon: ''
  },
  // 详情页
  {
    parent: 'root',
    path: 'profile',
    name: '详情页',
    icon: 'profile'
  },
  {
    parent: 'profile',
    path: 'basic',
    name: '基础详情页',
    icon: ''
  },
  {
    parent: 'profile',
    path: 'advanced',
    name: '高级详情页',
    icon: ''
  },
  // 结果页
  {
    parent: 'root',
    path: 'result',
    name: '结果页',
    icon: 'check-circle'
  },
  {
    parent: 'result',
    path: 'success',
    name: '成功页',
    icon: ''
  },
  {
    parent: 'result',
    path: 'fail',
    name: '失败页',
    icon: ''
  },
  // 异常页
  {
    parent: 'root',
    path: 'exception',
    name: '异常页',
    icon: 'warning'
  },
  {
    parent: 'exception',
    path: 'exception/403',
    name: '403',
    icon: ''
  },
  {
    parent: 'exception',
    path: 'exception/404',
    name: '404',
    icon: ''
  },
  {
    parent: 'exception',
    path: 'exception/500',
    name: '500',
    icon: ''
  }
];
