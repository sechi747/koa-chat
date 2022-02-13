const path = require('path')

const config = {
  APP_PORT: '3000',

  MYSQL_HOST: 'localhost',
  MYSQL_USER: 'root',
  MYSQL_PWD: 'root',
  MYSQL_DB: 'vue-koa-chat',

  LOG_PATH: path.resolve(__dirname, '../logs/koa-log.log'),

  JWT_SECRET: 'sechi',
};
module.exports = config;
