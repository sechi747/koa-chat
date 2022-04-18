const { DataTypes } = require('sequelize');

const seq = require('../db/seq');

const GroupModel = seq.define(
    'group',
    {
        groupName: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '群组名',
        },
        groupId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            comment: '群组id',
        },
        groupNotice: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '欢迎大家加入群聊！',
            comment: '群组公告',
        },
        groupAvatar: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'https://z3.ax1x.com/2021/06/16/2L9dL8.jpg',
            comment: '群头像',
        },
        groupCreator: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '群主',
        },
    },
    {
        underscored: true,
        timestamps: true,
    },
);

// 强制同步数据库(创建数据表)
GroupModel.sync({ force: true })

module.exports = GroupModel;
