const { DataTypes } = require('sequelize');

const seq = require('../db/seq');

const GroupMessageModel = seq.define(
    'group_message',
    {
        fromUser: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '发送者',
        },
        toGroup: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '群组id',
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
            comment: '消息内容',
        },
    },
    {
        underscored: true,
        timestamps: true,
    },
);

// 强制同步数据库(创建数据表)
GroupMessageModel.sync({ force: true })

module.exports = GroupMessageModel;
