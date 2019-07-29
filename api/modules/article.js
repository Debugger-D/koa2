const Router = require('koa-router');
// 实例化router
const router = new Router();

router.get('/list', (ctx, next) => {
  ctx.body = {
    code: 200,
    data: [
      {
        id: 1,
        name: 'jim',
        sex: 0,
        age: 20
      }
    ],
    message: 'ok'
  }

  ctx.post('/update', (ctx, next) => {
    let data = ctx.request.body;
    ctx.body = {
      code: 200,
      data,
      message: 'ok'
    }
  })
})

module.exports = router;
