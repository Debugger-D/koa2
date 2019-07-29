// 引入Koa库并初始化
const Koa = require('koa');
const app = new Koa();

// 解析post数据
const bodyParse = require('koa-bodyparser');
const router = require('./api');

// 挂载
app.use(bodyParser());

// 挂载路由
app.use(async ctx => ctx.body = '服务启动成功');
app.use(router.routes());
app.use(router.allowedMethods());
// 启动服务
// 监听3000端口
const appService = app.listen(3000, () => {
  console.log('服务开启');
})

// 导出服务
module.exports = appService
