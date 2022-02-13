const jwt = require('jsonwebtoken');

const { createUser, getUerInfo } = require('../service/user.service');
const { userRegisterError } = require('../constant/errType');
const { JWT_SECRET } = require('../config/dev');

class AuthController {
  async register(ctx, next) {
    const { username, password } = ctx.request.body;

    try {
      const res = await createUser(username, password);
      ctx.body = {
        code: 20000,
        message: '注册成功',
        result: {
          id: res.id,
          username: res.username,
        },
      };
    } catch (err) {
      console.log(err);
      ctx.app.emit('error', userRegisterError, ctx);
    }
  }

  async login(ctx, next) {
    const { username } = ctx.request.body;
    try {
      const { password, ...res } = await getUerInfo({ username });

      ctx.body = {
        code: 20000,
        message: '登录成功',
        result: {
          token: jwt.sign(res, JWT_SECRET, { expiresIn: '1d' }),
        },
      };
    } catch (err) {
      console.error('用户登录失败', err);
    }
  }
}

module.exports = new AuthController();
