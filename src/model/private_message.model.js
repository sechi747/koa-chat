const { DataTypes } = require('sequelize');

const seq = require('../db/seq');

const PrivateMessageModel = seq.define(
    'private_message',
    {
        fromUser: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '发送方',
        },
        toUser: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '接收方',
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
            comment: '消息内容',
        },
        isRead: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: 0,
            comment: '阅读状态，0为未读，1为已读',
        },
    },
    {
        underscored: true,
        timestamps: true,
    },
);

// 强制同步数据库(创建数据表)
PrivateMessageModel.sync({ force: true })

module.exports = PrivateMessageModel;
