const Router = require('koa-router')

const {userValidator, verifyUser, verifyLogin} = require('../validator/auth')
const bcryptPassword = require('../utils/bcrypt')
const {register, login} = require('../controller/auth.controller')

const router = new Router({ prefix: '/auth' })

// 注册
router.post('/register', userValidator, verifyUser, bcryptPassword, register)

// 登录
router.post('/login', userValidator, verifyLogin, login)

module.exports = router
