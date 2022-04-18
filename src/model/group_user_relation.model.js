const { DataTypes } = require('sequelize');

const seq = require('../db/seq');

const GroupUserRelationModel = seq.define(
    'group_user_relation',
    {
        groupId: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '群组id',
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '用户id',
        },
    },
    {
        underscored: true,
        timestamps: true,
    },
);

// 强制同步数据库(创建数据表)
GroupUserRelationModel.sync({ force: true })

module.exports = GroupUserRelationModel;
