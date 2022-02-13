const path = require('path');

const Koa = require('koa');
const KoaBody = require('koa-body');
const KoaStatic = require('koa-static');
const parameter = require('koa-parameter');
const cors = require('@koa/cors');

const errHandler = require('./errHandler');
const { loggerMiddleware } = require('../middleware/logger');
const router = require('../router');

const app = new Koa();

app.use(loggerMiddleware)
app.use(
  KoaBody({
    multipart: true,
    formidable: {
      uploadDir: path.join(__dirname, '../upload'),
      maxFieldsSize: 4 * 1024 * 1024, // 文件上传大小
      keepExtensions: true,
    },
    parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE'],
  }),
);
app.use(KoaStatic(path.join(__dirname, '../upload')));
app.use(cors());
app.use(parameter(app));

app.use(router.routes()).use(router.allowedMethods());

// 统一的错误处理
app.on('error', errHandler);

module.exports = app;
