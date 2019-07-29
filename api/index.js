const Router = require('koa-router');
const articleRouter = require('./modules/articles');

const router = new Router();

// 注册路由
// 注意该路由模块文件在注册时增加了'/articles前缀
// 即该模块下所有的接口地址都会以/articles作为前缀
router.use('/articles', articleRouter.routes(), articleRouter.allowedMethods());

module.exports = router;
