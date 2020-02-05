import Mock from 'mockjs'
export default Mock.mock('/ewallet',{
    'items|3': [{
        id: '@id',
        image:'@image(350x200)',
        title1:['登录前主页','登录','登录后主页'],
        title2:['查询列表','查询列表无数据','详细信息表格组合'],
      }]
})

