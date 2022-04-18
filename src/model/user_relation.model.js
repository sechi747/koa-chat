const { DataTypes } = require('sequelize');

const seq = require('../db/seq');

const UserRelationModel = seq.define(
    'user_relation',
    {
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '用户id',
        },
        friendId: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '好友id',
        },
        remark: {
            type: DataTypes.STRING,
            allowNull: true,
            comment: '备注',
        },
    },
    {
        underscored: true,
        timestamps: true,
    },
);

// 强制同步数据库(创建数据表)
UserRelationModel.sync({ force: true })

module.exports = UserRelationModel;
