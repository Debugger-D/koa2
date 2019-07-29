// 引入Koa库并初始化
const Koa = require('koa');
const app = new Koa();

// 启动服务
// 监听3000端口
const appService = app.listen(3000, () => {
  console.log('服务开启');
})

// 导出服务
module.exports = appService
