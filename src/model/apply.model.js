const { DataTypes } = require('sequelize');

const seq = require('../db/seq');

const ApplyModel = seq.define(
    'apply',
    {
        from: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '申请方',
        },
        to: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            comment: '被申请方',
        },
        applyType: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: '申请类型，0为好友申请，1为群组申请',
        },
        content: {
            type: DataTypes.STRING,
            allowNull: true,
            comment: '申请内容',
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0,
            comment: '申请状态，0为待确认，1为同意，2为拒绝',
        },
    },
    {
        underscored: true,
        timestamps: true,
    },
);

// 强制同步数据库(创建数据表)
ApplyModel.sync({ force: true })

module.exports = ApplyModel;
