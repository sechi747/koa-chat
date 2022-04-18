const { DataTypes } = require('sequelize');

const seq = require('../db/seq');

const UserModel = seq.define(
  'user',
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      comment: '用户名, 唯一',
    },
    password: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      comment: '密码',
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '猫猫头',
      comment: '昵称',
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'https://z3.ax1x.com/2021/06/16/2L9dL8.jpg',
      comment: '头像',
    },
    profile: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'more love, no war',
      comment: '简介',
    },
    gender: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 2,
      comment: '性别，0-男，1-女，2-保密',
    },
    email: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: '邮箱',
    },
    area: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '银河系某不知名星球',
      comment: '地区',
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: '状态，0-离线，1-在线，2-离开',
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
      comment: '是否为管理员, 0: 不是管理员(默认); 1: 是管理员',
    },
    isBlock: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
      comment: '账号是否被禁用, 0: 未被禁用; 1: 被禁用',
    },
  },
  {
    underscored: true,
    timestamps: true,
  },
);

// 强制同步数据库(创建数据表)
// UserModel.sync({ force: true })

module.exports = UserModel;
