const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const { JWT_SECRET } = require('../config/dev')
const {
  tokenExpiredError,
  invalidToken,
  hasNotAdminPermission,
  userFormateError,
  userAlreadyExited,
  userRegisterError,
  userDoesNotExist,
  userLoginError,
  invalidPassword,
} = require('../constant/errType')


const { getUerInfo } = require('../service/user.service')

const userValidator = async (ctx, next) => {
  const { username, password } = ctx.request.body
  // 用户名或密码为空
  if (!username || !password) {
    ctx.app.emit('error', userFormateError, ctx)
    return
  }
  await next()
}

const verifyUser = async (ctx, next) => {
  const { username } = ctx.request.body
  try {
    const res = await getUerInfo({ username })
    // 用户是否已存在
    if (res) {
      ctx.app.emit('error', userAlreadyExited, ctx)
      return
    }
  } catch (err) {
    console.error('获取用户信息错误', err)
    ctx.app.emit('error', userRegisterError, ctx)
    return
  }

  await next()
}

const verifyLogin = async (ctx, next) => {
  const { username, password } = ctx.request.body

  try {
    const res = await getUerInfo({ username })
    // 用户名不存在
    if (!res) {
      ctx.app.emit('error', userDoesNotExist, ctx)
      return
    }

    // 密码错误
    if (!bcrypt.compareSync(password, res.password)) {
      ctx.app.emit('error', invalidPassword, ctx)
      return
    }
  } catch (err) {
    console.error(err)
    return ctx.app.emit('error', userLoginError, ctx)
  }

  await next()
}

const auth = async (ctx, next) => {
  const { authorization = '' } = ctx.request.header
  const token = authorization.replace('Bearer ', '')

  try {
    // 解析token(id, username, isAdmin)
    const user = jwt.verify(token, JWT_SECRET)
    ctx.state.user = user
  } catch (err) {
    switch (err.name) {
      case 'TokenExpiredError':
        console.error('token已过期', err)
        return ctx.app.emit('error', tokenExpiredError, ctx)
      case 'JsonWebTokenError':
        console.error('无效的token', err)
        return ctx.app.emit('error', invalidToken, ctx)
    }
  }

  await next()
}

const hadAdminPermission = async (ctx, next) => {
  const { isAdmin } = ctx.state.user

  if (!isAdmin) {
    return ctx.app.emit('error', hasNotAdminPermission, ctx)
  }

  await next()
}

module.exports = {
  userValidator,
  verifyUser,
  verifyLogin,
  auth,
  hadAdminPermission,
}
