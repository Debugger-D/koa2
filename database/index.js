// 引入mongoose库
const mongoose = require('mongoose');

// 定义数据库地址的常量
// 更标准的可以新建一个数据配置文件，
// 用来专门存放数据相关的配置，比如账号密码等等
const DB_ADDRESS = 'mongodb://localhost/koa-test';

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);

// 简单封装log
const log = console.log.bind(console);

// 定义连接函数
const connect = () => {
  // 重连次数
  let connectTimes = 0;
  // 设置最大重连次数
  const MAX_CONNECT_TIMES = 3;

  // 断线重连
  const reconnectDB = (resolve, reject) => {
    if (connectTimes < MAX_CONNECT_TIMES) {
      connectTimes++;
      mongoose.connect(DB_ADDRESS, connectConfig);
    } else {
      log('[mongodb] database connect fail!');
      reject();
    }
  }

  // 连接数据库
  mongoose.connect(DB_ADDRESS, connectConfig);

  return new Promise((resolve, reject) => {
    // 监听数据库断开，重新连接
    mongoose.connection.on('disconnected', () => {
      reconnectDB(reject);
    });
    // 监听数据库连接出错，重新连接
    mongoose.connection.on('error', err => {
      log(err);
      reconnectDB(reject);
    });
    // 监听连接成功
    mongoose.connection.on('open', () => {
      log('[mongodb server] database connect success!');
      resolve();
    });
  });
};

// 暴露出去
exports.connect = connect;

// 还需要引入schema，在下面演示
// ……

