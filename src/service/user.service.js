const User = require('../model/user.model')

class UserService {
    async createUser(username, password) {
        return await User.create({username, password})
    }

    async getUerInfo({ id, username, isAdmin }) {
        const whereOpt = {}

        id && Object.assign(whereOpt, { id })
        username && Object.assign(whereOpt, { username })
        isAdmin && Object.assign(whereOpt, { isAdmin })

        const res = await User.findOne({
            attributes: ['id', 'username', 'password', 'isAdmin'],
            where: whereOpt,
        })

        return res ? res : null
    }

    async updateById({ id, username, password, isAdmin }) {
        const whereOpt = { id }
        const newUser = {}

        username && Object.assign(newUser, { username })
        password && Object.assign(newUser, { password })
        isAdmin && Object.assign(newUser, { isAdmin })

        const res = await User.update(newUser, { where: whereOpt })
        return res[0] > 0
    }
}

module.exports = new UserService()
